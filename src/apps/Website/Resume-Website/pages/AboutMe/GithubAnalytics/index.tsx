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
} from '@chakra-ui/react';
import { useGitHubData } from './useGitHubData';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { Trans } from '@lingui/macro';
import ProfileCard from './ProfileCard';
import StatsGrid from './StatsGrid';
import CommitActivityChart from './CommitActivityChart';
import LanguageDistributionChart from './LanguageDistributionChart';

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
  } = useGitHubData();

  if (loading) {
    return (
      <Flex justify={'center'} align={'center'} h={'64px'}>
        <Spinner size={'xl'} mr={3} />
        <Text fontSize={'xl'}>
          <Trans>Loading GitHub data...</Trans>
        </Text>
      </Flex>
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
            {error}. Make sure your GitHub token is set correctly in the .env
            file
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  const repoStats = getRepoStats();

  return (
    <Stack
      w='full'
      minH='100vh'
      bg={MainBGColor}
      pt={{ lg: '100px', base: '32px' }}
      pb={{ lg: '100px', base: '32px' }}
      px={{ base: '32px', lg: 'unset' }}
    >
      <Stack
        w='full'
        maxW='1400px'
        mx='auto'
        spacing='32px'
        p='32px'
        bg={CardBGColor}
        borderRadius={{ md: '10px' }}
        border={{ base: 'none', md: `1px solid ${colors.iceGray}` }}
      >
        {/* Header */}
        <VStack spacing='20px' alignItems='start'>
          <Heading>
            <Trans>GitHub Analytics Dashboard</Trans>
          </Heading>
          <Text>
            <Trans>
              Showcasing development{' '}
              <Box as='span' fontWeight='bold' color={HighlightColor}>
                activity
              </Box>{' '}
              and{' '}
              <Box as='span' fontWeight='bold' color={HighlightColor}>
                project
              </Box>{' '}
              statistics
            </Trans>
          </Text>
        </VStack>

        {/* Profile */}
        {profile && <ProfileCard profile={profile} MainBGColor={MainBGColor} />}

        {/* Stats */}
        <StatsGrid repoStats={repoStats} MainBGColor={MainBGColor} />

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
