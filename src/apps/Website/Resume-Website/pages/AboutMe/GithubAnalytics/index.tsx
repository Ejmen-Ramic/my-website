import React from 'react';
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
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useGitHubData } from './useGitHubData';
import { colors } from '../../../../../../shared/components/Hooks/color';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
];

const GitHubDashboard: React.FC = () => {
  const {
    loading,
    error,
    profile,
    commitActivity,
    languageStats,
    totalLangBytes,
    getRepoStats,
    getTopRepos,
  } = useGitHubData();

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
          <Heading as='h1' size='xl' mb={2} color={colors.teal[600]}>
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
                <Heading as='h2' size='lg' color={colors.teal[600]}>
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
          {/* Commit Activity */}
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

          {/* Language Distribution */}
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
                  outerRadius={90}
                  innerRadius={40}
                  label={({ name, percent }) => {
                    const pct = Math.round((percent ?? 0) * 100);
                    return pct >= 4 ? `${name} ${pct}%` : '';
                  }}
                  labelLine={false}
                >
                  {languageStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, _name: string, props: any) => {
                    const datum = props?.payload as {
                      name: string;
                      value: number;
                    };
                    const pct = Math.round(
                      ((datum?.value ?? 0) / totalLangBytes) * 100
                    );
                    return [
                      `${Number(value).toLocaleString()} (${pct}%)`,
                      datum?.name,
                    ];
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default GitHubDashboard;
