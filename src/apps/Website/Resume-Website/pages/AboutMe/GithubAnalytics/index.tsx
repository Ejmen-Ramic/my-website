import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  useColorModeValue,
  VStack,
  Grid,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { useGitHubData } from './useGitHubData';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { Trans } from '@lingui/macro';
import ProfileCard from './ProfileCard';
import StatsGrid from './StatsGrid';
import CommitActivityChart from './CommitActivityChart';
import LanguageDistributionChart from './LanguageDistributionChart';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

const GitHubDashboard: React.FC = () => {
  const MainBGColor = {
    md: useColorModeValue(colors.gray[100], colors.gray[700]),
  };
  const CardBGColor = useColorModeValue(colors.white, colors.gray[800]);
  const HighlightColor = useColorModeValue(colors.blue[400], colors.teal[400]);
  const GraphColor = useColorModeValue('#1a202c', colors.white);

  const {
    loading,
    error,
    profile,
    commitActivity,
    languageStats,
    totalLangBytes,
    getRepoStats,
    getCommitStats,
  } = useGitHubData();

  if (loading) {
    return (
      <Stack
        w={'full'}
        minH={'100vh'}
        bg={MainBGColor}
        pt={{ lg: '100px', base: '32px' }}
        pb={{ lg: '100px', base: '32px' }}
        px={{ base: '32px', lg: 'unset' }}
        mb={{ base: '50px', lg: '100px' }}
      >
        <Stack
          w={'full'}
          maxW={'1400px'}
          mx={'auto'}
          spacing={'32px'}
          p={{ md: '32px' }}
          bg={CardBGColor}
          borderRadius={{ md: '10px' }}
          border={{ base: 'none', md: `1px solid ${colors.iceGray}` }}
        >
          {/* Header skeleton */}
          <VStack spacing={'20px'} alignItems={'start'}>
            <Skeleton height='32px' width='280px' />
            <SkeletonText mt='4' noOfLines={2} spacing='4' width='80%' />
          </VStack>

          {/* Profile skeleton */}
          <Box w='full'>
            <Skeleton height='150px' borderRadius='md' />
          </Box>

          {/* Stats skeleton */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} height='120px' borderRadius='md' />
            ))}
          </Grid>

          {/* Charts skeleton */}
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
            <Skeleton height='300px' borderRadius='md' />
            <Skeleton height='300px' borderRadius='md' />
          </Grid>
        </Stack>
      </Stack>
    );
  }
  if (loading) {
    return (
      <Stack
        w={'full'}
        minH={'100vh'}
        bg={MainBGColor}
        pt={{ lg: '100px', base: '32px' }}
        pb={{ lg: '100px', base: '32px' }}
        px={{ base: '32px', lg: 'unset' }}
        mb={{ base: '50px', lg: '100px' }}
      >
        <Stack
          w={'full'}
          maxW={'1400px'}
          mx={'auto'}
          spacing={'32px'}
          p={{ md: '32px' }}
          bg={CardBGColor}
          borderRadius={{ md: '10px' }}
          border={{ base: 'none', md: `1px solid ${colors.iceGray}` }}
        >
          {/* Header skeleton */}
          <VStack spacing={'20px'} alignItems={'start'}>
            <Skeleton height='32px' width='280px' />
            <SkeletonText mt='4' noOfLines={2} spacing='4' width='80%' />
          </VStack>

          {/* Profile skeleton */}
          <Box w='full'>
            <Skeleton height='150px' borderRadius='md' />
          </Box>

          {/* Stats skeleton */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} height='120px' borderRadius='md' />
            ))}
          </Grid>

          {/* Charts skeleton */}
          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
            <Skeleton height='300px' borderRadius='md' />
            <Skeleton height='300px' borderRadius='md' />
          </Grid>
        </Stack>
      </Stack>
    );
  }

  if (error) {
    return (
      <Alert status={'error'} borderRadius={'md'}>
        <AlertIcon />
        <Box>
          <AlertTitle>
            <Trans>Error:</Trans>
          </AlertTitle>
          <AlertDescription>
            {error}.{' '}
            <Trans>
              Make sure your GitHub token is set correctly in the .env file
            </Trans>
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  const repoStats = getRepoStats();

  return (
    <Stack
      w={'full'}
      minH={'100vh'}
      bg={MainBGColor}
      pt={{ lg: '100px', base: '32px' }}
      pb={{ lg: '100px', base: '32px' }}
      px={{ base: '32px', lg: 'unset' }}
      mb={{ base: '50px', lg: '100px' }}
    >
      <Stack
        w={'full'}
        maxW={'1400px'}
        mx={'auto'}
        spacing={'32px'}
        p={{ md: '32px' }}
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
              Showcasing development{' '}
              <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                activity
              </Box>{' '}
              and{' '}
              <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                project
              </Box>{' '}
              statistics
            </Trans>
          </Text>
        </VStack>

        {/* Profile */}
        {profile && <ProfileCard profile={profile} />}

        {/* Stats */}
        <StatsGrid repoStats={repoStats} commitsByYear={getCommitStats()} />

        {/* Charts */}
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
          <CommitActivityChart
            commitActivity={commitActivity}
            graphColor={GraphColor}
          />
          <LanguageDistributionChart
            languageStats={languageStats}
            totalLangBytes={totalLangBytes}
          />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default GitHubDashboard;
