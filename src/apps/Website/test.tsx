// src/App.tsx
import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Badge,
  Tag,
  TagLabel,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

type Day = { date: string; count: number };
type Weekly = { weekIndex: number; total: number };

type ContributionsResponse = {
  days: Day[];
  weekly: Weekly[];
  totals: {
    totalContributions: number;
    commit: number;
    pr: number;
    issue: number;
    review: number;
    restricted: number;
    followers: number;
    following: number;
    range: { start: string; end: string };
  };
};

type ReposResponse = {
  topRepos: {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
    language: string | null;
    topics: string[];
    pushed_at: string;
    updated_at: string;
    languages: Record<string, number>;
  }[];
  starsByRepo: { name: string; stars: number }[];
  languageTotals: Record<string, number>;
};

const API_BASE = '';
async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed ${url}: ${res.status} ${text}`);
  }
  return res.json();
}

function usePortfolioData(username: string) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [contrib, setContrib] = React.useState<ContributionsResponse | null>(
    null
  );
  const [repos, setRepos] = React.useState<ReposResponse | null>(null);

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    const load = async () => {
      try {
        const [c, r] = await Promise.all([
          fetchJSON<ContributionsResponse>(
            `${API_BASE}/api/github/contributions?username=${username}`
          ),
          fetchJSON<ReposResponse>(
            `${API_BASE}/api/github/repos?username=${username}`
          ),
        ]);
        if (!alive) return;
        setContrib(c);
        setRepos(r);
      } catch (e: any) {
        if (!alive) return;
        setError(e.message || 'Failed to load');
      } finally {
        if (alive) setLoading(false);
      }
    };
    load();
    return () => {
      alive = false;
    };
  }, [username]);

  return { loading, error, contrib, repos };
}

function formatDateLabel(iso: string) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function formatMonthTick(iso: string) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${String(d.getFullYear()).slice(-2)}`;
}

const COLORS = [
  '#6366F1',
  '#22C55E',
  '#F59E0B',
  '#EF4444',
  '#06B6D4',
  '#8B5CF6',
  '#84CC16',
  '#14B8A6',
  '#E11D48',
  '#F97316',
];

function KPICard(props: { label: string; value: number | string }) {
  const bg = useColorModeValue('#F7FAFC', '#1A202C');
  const border = useColorModeValue('#E2E8F0', '#2D3748');
  return (
    <Box
      bg={bg}
      border={'1px'}
      borderColor={border}
      borderRadius={'md'}
      p={'16px'}
    >
      <Text color={'gray.500'} fontSize={'sm'}>
        {props.label}
      </Text>
      <Heading size={'md'} mt={'4px'}>
        {props.value}
      </Heading>
    </Box>
  );
}

function DailyContributionsChart({ data }: { data: Day[] }) {
  const chartData = data.map((d) => ({ date: d.date, count: d.count }));
  return (
    <Box w={'100%'} h={'300px'}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis
            dataKey={'date'}
            tickFormatter={formatMonthTick}
            minTickGap={32}
          />
          <YAxis allowDecimals={false} />
          <Tooltip labelFormatter={(v) => `Date: ${v}`} />
          <Line
            type={'monotone'}
            dataKey={'count'}
            stroke={'#6366F1'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

function WeeklyContributionsChart({ data }: { data: Weekly[] }) {
  return (
    <Box w={'100%'} h={'240px'}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis dataKey={'weekIndex'} tickFormatter={(v) => `W${v}`} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey={'total'} fill={'#22C55E'} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

function LanguagesPie({ totals }: { totals: Record<string, number> }) {
  const entries = Object.entries(totals).filter(([, bytes]) => bytes > 0);
  const sum = entries.reduce((s, [, v]) => s + v, 0);
  const pieData = entries.map(([name, v]) => ({
    name,
    value: Math.round((v / sum) * 1000) / 10,
  })); // %
  return (
    <Box w={'100%'} h={'280px'}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey={'value'}
            nameKey={'name'}
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => [`${value}%`, 'Share']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

function StarsBar({ stars }: { stars: { name: string; stars: number }[] }) {
  const data = [...stars].sort((a, b) => b.stars - a.stars).slice(0, 12);
  return (
    <Box w={'100%'} h={'280px'}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis
            dataKey={'name'}
            angle={-35}
            textAnchor={'end'}
            interval={0}
            height={60}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey={'stars'} fill={'#06B6D4'} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

function ProjectsList({ repos }: { repos: ReposResponse['topRepos'] }) {
  const cardBg = useColorModeValue('#FFFFFF', '#111827');
  const border = useColorModeValue('#E2E8F0', '#374151');
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={'16px'}>
      {repos.map((r) => (
        <Box
          key={r.id}
          bg={cardBg}
          border={'1px'}
          borderColor={border}
          borderRadius={'md'}
          p={'16px'}
        >
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <ChakraLink
              href={r.html_url}
              isExternal
              color={'blue.500'}
              fontWeight={'semibold'}
            >
              {r.name}
            </ChakraLink>
            <Flex gap={'8px'} alignItems={'center'}>
              <Badge colorScheme={'yellow'}>{r.stargazers_count} ★</Badge>
              <Badge colorScheme={'purple'}>{r.forks_count} Forks</Badge>
            </Flex>
          </Flex>
          {r.description && (
            <Text mt={'8px'} color={'gray.600'}>
              {r.description}
            </Text>
          )}
          <Flex mt={'8px'} gap={'8px'} flexWrap={'wrap'}>
            {Object.entries(r.languages)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([lang]) => (
                <Tag key={lang} variant={'subtle'} colorScheme={'blue'}>
                  <TagLabel>{lang}</TagLabel>
                </Tag>
              ))}
            {r.topics.slice(0, 3).map((t) => (
              <Tag key={t} variant={'outline'} colorScheme={'gray'}>
                <TagLabel>#{t}</TagLabel>
              </Tag>
            ))}
          </Flex>
          <Text mt={'8px'} fontSize={'sm'} color={'gray.500'}>
            Updated {new Date(r.updated_at).toLocaleDateString()}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

function Dashboard({ username }: { username: string }) {
  const { loading, error, contrib, repos } = usePortfolioData(username);

  if (loading) {
    return (
      <Flex minH={'60vh'} alignItems={'center'} justifyContent={'center'}>
        <Spinner size={'lg'} />
      </Flex>
    );
  }
  if (error || !contrib || !repos) {
    return (
      <Flex minH={'60vh'} alignItems={'center'} justifyContent={'center'}>
        <Text color={'red.500'}>Error: {error || 'Failed to load data'}</Text>
      </Flex>
    );
  }

  return (
    <Box maxW={'1200px'} mx={'auto'} px={'16px'} py={'24px'}>
      <Heading size={'lg'}>GitHub Overview</Heading>
      <Text color={'gray.600'} mt={'4px'}>
        Range: {new Date(contrib.totals.range.start).toLocaleDateString()} —{' '}
        {new Date(contrib.totals.range.end).toLocaleDateString()}
      </Text>

      <SimpleGrid columns={{ base: 2, md: 6 }} gap={'12px'} mt={'16px'}>
        <KPICard
          label={'Total Contributions'}
          value={contrib.totals.totalContributions}
        />
        <KPICard label={'Commits'} value={contrib.totals.commit} />
        <KPICard label={'PRs'} value={contrib.totals.pr} />
        <KPICard label={'Issues'} value={contrib.totals.issue} />
        <KPICard label={'Reviews'} value={contrib.totals.review} />
        <KPICard label={'Followers'} value={contrib.totals.followers} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={'16px'} mt={'24px'}>
        <Box>
          <Heading size={'md'} mb={'8px'}>
            Daily Contributions
          </Heading>
          <DailyContributionsChart data={contrib.days} />
        </Box>
        <Box>
          <Heading size={'md'} mb={'8px'}>
            Weekly Contributions
          </Heading>
          <WeeklyContributionsChart data={contrib.weekly} />
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={'16px'} mt={'24px'}>
        <Box>
          <Heading size={'md'} mb={'8px'}>
            Language Mix (Top Repos)
          </Heading>
          <LanguagesPie totals={repos.languageTotals} />
        </Box>
        <Box>
          <Heading size={'md'} mb={'8px'}>
            Stars by Repo
          </Heading>
          <StarsBar stars={repos.starsByRepo} />
        </Box>
      </SimpleGrid>

      <Box mt={'32px'}>
        <Heading size={'md'} mb={'12px'}>
          Projects
        </Heading>
        <ProjectsList repos={repos.topRepos} />
      </Box>
    </Box>
  );
}

export default function App() {
  // Set your GitHub username here
  const GITHUB_USERNAME = 'your-github-username';
  return (
    <ChakraProvider>
      <Dashboard username={GITHUB_USERNAME} />
    </ChakraProvider>
  );
}
