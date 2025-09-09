import React, { useState } from 'react';
import {
  Grid,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { colors } from '../../../../../../shared/components/Hooks/color';

interface StatsGridProps {
  repoStats: { name: string; value: string | number }[];
  commitsByYear: { [year: number]: number }; // 👈 already precomputed in Dashboard
  MainBGColor: any;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  repoStats,
  commitsByYear,
  MainBGColor,
}) => {
  const ColorNumber = useColorModeValue(colors.blue[400], colors.teal[400]);

  // default year = 2025
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={'24px'}
    >
      {repoStats.map((stat) => {
        // Special handling for Total Commits
        if (stat.name === 'Total Commits') {
          return (
            <Stack
              key={stat.name}
              bg={MainBGColor}
              rounded={'lg'}
              shadow={'md'}
              p={'24px'}
            >
              <Flex justify='space-between' align='center'>
                <Text fontWeight={'semibold'}>{stat.name}</Text>

                {/* Year dropdown */}
                <Menu closeOnSelect={true} placement={'bottom-end'}>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    size={'sm'}
                  >
                    {selectedYear}
                  </MenuButton>
                  <MenuList maxH={'400px'} overflowY={'auto'}>
                    <Box px={'12px'} py={'8px'}>
                      <Text
                        fontSize={'sm'}
                        fontWeight={'bold'}
                        color={'gray.500'}
                        mb={'8px'}
                      >
                        YEARS
                      </Text>
                      {[2025, 2024].map((year) => (
                        <MenuItem
                          key={year}
                          closeOnSelect={true}
                          pl={'4px'}
                          onClick={() => setSelectedYear(year)}
                        >
                          <Checkbox
                            isChecked={selectedYear === year}
                            mr={'8px'}
                            pointerEvents={'none'}
                          />
                          {year}
                        </MenuItem>
                      ))}
                    </Box>
                  </MenuList>
                </Menu>
              </Flex>

              {/* Show commits for the selected year */}
              <Text fontSize={'3xl'} fontWeight={'bold'} color={ColorNumber}>
                {commitsByYear[selectedYear] ?? 0}
              </Text>
            </Stack>
          );
        }

        // Default cards
        return (
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
        );
      })}
    </Grid>
  );
};

export default StatsGrid;
