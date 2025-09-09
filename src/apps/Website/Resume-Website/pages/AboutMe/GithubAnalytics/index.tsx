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
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useGitHubData } from './useGitHubData';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { Trans } from '@lingui/macro';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
];

const GitHubDashboard: React.FC = () => {
  const MainBGColor = {
    md: useColorModeValue(colors.gray[100], colors.gray[700]),
  };
  const CardBGColor = useColorModeValue(colors.white, colors.gray[800]);
  const ColorNumber = useColorModeValue(colors.blue[400], colors.teal[400]);
  const GraphColor = useColorModeValue('#1a202c', colors.white);
  const HighlightColor = useColorModeValue(colors.blue[400], colors.teal[400]);

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
    <Stack w={'full'} minH={'100vh'} bg={MainBGColor} py={'100px'}>
      <Stack
        w={'full'}
        maxW={'1400px'}
        mx={'auto'}
        spacing={'32px'}
        p={'32px'}
        bg={CardBGColor}
        borderRadius={{ md: '10px' }}
        border={{ base: 'none', md: `1px solid ${colors.iceGray}` }}
      >
        {/* Header */}
        <VStack spacing={'20px'} alignItems={'start'}>
          <Heading>
            <Trans>GitHub Analytics Dashboard</Trans>
          </Heading>
          <Text>
            <Trans>
              Showcasing development activity and project statistics
            </Trans>
          </Text>
        </VStack>

        {/* Profile */}
        {profile && (
          <VStack
            alignItems={'start'}
            bg={MainBGColor}
            rounded={'lg'}
            shadow={'md'}
            p={6}
          >
            <Flex gap={'32px'}>
              <Avatar src={profile.avatar_url} name={profile.name} size='xl' />
              <VStack alignItems={'start'} gap={'8px'}>
                <Heading as={'h2'} size={'lg'}>
                  {profile.name}
                </Heading>
                <Text>@{profile.login}</Text>
                <Text fontSize='sm'>{profile.bio}</Text>
              </VStack>
            </Flex>
          </VStack>
        )}

        {/* Stats */}
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={'24px'}
        >
          {repoStats.map((stat) => (
            <Box
              key={stat.name}
              bg={MainBGColor}
              rounded={'lg'}
              shadow={'md'}
              p={'24px'}
            >
              <Text fontWeight={'semibold'}>{stat.name}</Text>
              <Text fontSize={'3xl'} fontWeight={'bold'} color={ColorNumber}>
                {stat.value}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Charts */}
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
          {/* Commit Activity */}
          <Box bg={MainBGColor} rounded={'lg'} shadow={'md'} p={6}>
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
                  tick={{ fill: GraphColor, fontSize: 16 }}
                  axisLine={{ stroke: GraphColor }}
                />
                <YAxis tick={{ fill: GraphColor, fontSize: 16 }} />
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
          <Box bg={MainBGColor} rounded={'lg'} shadow={'md'} p={6}>
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
      </Stack>
    </Stack>
  );
};

export default GitHubDashboard;
