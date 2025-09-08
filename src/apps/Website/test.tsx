// GitHubDashboard.tsx
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Grid,
  GridItem,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
} from '@chakra-ui/react';

import { format, parseISO } from 'date-fns';
import {
  CommitSearchResult,
  GitHubRepo,
  githubService,
  GitHubUser,
  LanguageStats,
} from '../../backend/githubService';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
];

interface CommitByDate {
  date: string;
  commits: number;
}

interface RepoStat {
  name: string;
  value: number;
}

interface LanguageStat {
  name: string;
  value: number;
}

interface TopRepo {
  name: string;
  stars: number;
  forks: number;
  language: string;
}

const GitHubDashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [commitActivity, setCommitActivity] = useState<CommitByDate[]>([]);
  const [languageStats, setLanguageStats] = useState<LanguageStat[]>([]);
  const [recentCommits, setRecentCommits] = useState<CommitSearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const [profileData, reposData, recentCommitsData] = await Promise.all([
        githubService.getUserProfile(),
        githubService.getUserRepos(),
        githubService.getRecentCommits(90),
      ]);

      setProfile(profileData);
      setRepos(reposData);
      setRecentCommits(recentCommitsData);

      const languageData: LanguageStats =
        await githubService.getLanguageStats();
      const languageArray: LanguageStat[] = Object.entries(languageData)
        .map(([name, value]) => ({ name, value: Number(value) }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8);
      setLanguageStats(languageArray);

      const commitsByDate = processCommitsByDate(recentCommitsData);
      setCommitActivity(commitsByDate);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching GitHub data:', err);
    } finally {
      setLoading(false);
    }
  };

  const totalLangBytes = languageStats.reduce((s, d) => s + d.value, 0) || 1;
  const processCommitsByDate = (
    commits: CommitSearchResult[]
  ): CommitByDate[] => {
    const commitsByDate: { [key: string]: number } = {};

    commits.forEach((commit) => {
      const date = format(parseISO(commit.commit.committer.date), 'yyyy-MM-dd');
      commitsByDate[date] = (commitsByDate[date] || 0) + 1;
    });

    return Object.entries(commitsByDate)
      .map(([date, commits]) => ({ date, commits }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const getRepoStats = (): RepoStat[] => {
    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return [
      { name: 'Public Repos', value: repos.length },
      { name: 'Total Stars', value: totalStars },
      { name: 'Total Forks', value: totalForks },
      { name: 'Total Commits', value: recentCommits.length },
    ];
  };

  const getTopRepos = (): TopRepo[] => {
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
      .map((repo) => ({
        name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
      }));
  };

  if (loading) {
    return (
      <Flex justify='center' align='center' h='64'>
        <Spinner size='xl' mr={3} />
        <Text fontSize='xl'>Loading GitHub data...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Alert status='error' borderRadius='md'>
        <AlertIcon />
        <Box>
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>
            {error}. Make sure your GitHub token is set correctly in the .env
            file
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  const repoStats = getRepoStats();
  const topRepos = getTopRepos();

  return (
    <Box p={6} bg='gray.50' minH='100vh'>
      <Box maxW='7xl' mx='auto'>
        {/* Header */}
        <Box mb={8}>
          <Heading as='h1' size='xl' mb={2}>
            GitHub Analytics Dashboard
          </Heading>
          <Text color='gray.600'>
            Showcasing development activity and project statistics
          </Text>
        </Box>

        {/* Profile */}
        {profile && (
          <Box bg='white' rounded='lg' shadow='md' p={6} mb={8}>
            <Flex align='center' gap={4}>
              <Avatar src={profile.avatar_url} name={profile.name} size='xl' />
              <Box>
                <Heading as='h2' size='lg'>
                  {profile.name}
                </Heading>
                <Text color='gray.600'>@{profile.login}</Text>
                <Text fontSize='sm' color='gray.500'>
                  {profile.bio}
                </Text>
              </Box>
            </Flex>
          </Box>
        )}

        {/* Stats */}
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
          mb={8}
        >
          {repoStats.map((stat) => (
            <Box key={stat.name} bg='white' rounded='lg' shadow='md' p={6}>
              <Text fontWeight='semibold' color='gray.700'>
                {stat.name}
              </Text>
              <Text fontSize='3xl' fontWeight='bold' color='blue.600'>
                {stat.value}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Charts */}
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={8}
          mb={8}
        >
          <Box bg='white' rounded='lg' shadow='md' p={6}>
            <Heading size='md' mb={4}>
              Commit Activity (Last 90 Days)
            </Heading>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={commitActivity}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis
                  dataKey='date'
                  tickFormatter={(date: string) =>
                    format(new Date(date), 'MMM dd')
                  }
                />
                <YAxis />
                <Tooltip
                  labelFormatter={(date: string) =>
                    format(new Date(date), 'MMM dd, yyyy')
                  }
                />
                <Area
                  type='monotone'
                  dataKey='commits'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>

          <Box bg='white' rounded='lg' shadow='md' p={6}>
            <Heading size='md' mb={4}>
              Language Distribution
            </Heading>
            <ResponsiveContainer width={'100%'} height={300}>
              <PieChart>
                <Pie
                  data={languageStats}
                  dataKey={'value'}
                  nameKey={'name'}
                  cx={'50%'}
                  cy={'50%'}
                  outerRadius={100}
                  label={false}
                >
                  {languageStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend
                  verticalAlign={'middle'}
                  align={'right'}
                  layout={'vertical'}
                  wrapperStyle={{ paddingLeft: 16, lineHeight: '24px' }}
                  formatter={(value: string, entry: any) => {
                    // entry.payload is the datum: { name, value, ... }
                    const datum = entry?.payload as {
                      name: string;
                      value: number;
                    };
                    const pct = Math.round(
                      (datum?.value / totalLangBytes) * 100
                    );
                    return `${value} — ${pct}%`;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        {/* Top Repos */}
        <Box bg='white' rounded='lg' shadow='md' p={6}>
          <Heading size='md' mb={4}>
            Top Repositories by Stars
          </Heading>
          <ResponsiveContainer width='100%' height={400}>
            <BarChart data={topRepos} layout='horizontal'>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type='number' />
              <YAxis dataKey='name' type='category' width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey='stars' fill='#8884d8' name='Stars' />
              <Bar dataKey='forks' fill='#82ca9d' name='Forks' />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Commits */}
        <Box bg='white' rounded='lg' shadow='md' p={6} mt={8}>
          <Heading size='md' mb={4}>
            Recent Commits
          </Heading>
          <Stack spacing={3} maxH='96' overflowY='auto'>
            {recentCommits.slice(0, 20).map((commit, idx) => (
              <Box
                key={idx}
                borderLeft='4px solid'
                borderColor='blue.500'
                pl={4}
                py={2}
              >
                <Text fontWeight='medium'>
                  {commit.commit.message.split('\n')[0]}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  {commit.repository.name} •{' '}
                  {format(
                    parseISO(commit.commit.committer.date),
                    'MMM dd, yyyy'
                  )}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
      test
    </Box>
  );
};

export default GitHubDashboard;
