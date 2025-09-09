import React from 'react';
import { Grid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { colors } from '../../../../../../shared/components/Hooks/color';

interface StatsGridProps {
  repoStats: { name: string; value: string | number }[];
  MainBGColor: any;
}

const StatsGrid: React.FC<StatsGridProps> = ({ repoStats, MainBGColor }) => {
  const ColorNumber = useColorModeValue(colors.blue[400], colors.teal[400]);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={'24px'}
    >
      {repoStats.map((stat) => (
        <Stack
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
        </Stack>
      ))}
    </Grid>
  );
};

export default StatsGrid;
