import React, { useState, useMemo, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Text,
  Divider,
  useToast,
} from '@chakra-ui/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import {
  format,
  subDays,
  isAfter,
  addDays,
  startOfWeek,
  startOfMonth,
} from 'date-fns';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { t } from '@lingui/macro';

interface CommitActivityChartProps {
  commitActivity: { date: string; commits: number; year?: number }[];
  graphColor: string;
}

const rangeOptions = [
  { label: 'Last 90 days', value: '90', type: 'range' },
  { label: 'Last 150 days', value: '150', type: 'range' },
  { label: 'Full Year', value: '365', type: 'range' },
];

const yearOptions = [
  { label: '2025', value: '2025', type: 'year' },
  { label: '2024', value: '2024', type: 'year' },
];

const CommitActivityChart: React.FC<CommitActivityChartProps> = ({
  commitActivity,
  graphColor,
}) => {
  const [selectedRange, setSelectedRange] = useState<string>('365');
  const [selectedYears, setSelectedYears] = useState<string[]>(['2025']);
  const toast = useToast();

  const handleRangeSelect = (value: string) => {
    setSelectedRange(value);
  };

  const handleYearSelect = (value: string) => {
    setSelectedYears((prev) => {
      if (prev.includes(value) && prev.length === 1) {
        return prev;
      }
      const newYears = prev.includes(value)
        ? prev.filter((y) => y !== value)
        : [...prev, value];

      return newYears;
    });
  };

  useEffect(() => {
    if (selectedYears.length > 1) {
      toast({
        title: t`Multiple Years Selected`,
        description: t`Only full year data can be shown when multiple years are selected.`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [selectedYears.length, toast]);

  const aggregateData = (data: typeof commitActivity, days: number) => {
    if (days === 90) {
      const aggregated: {
        [key: string]: { date: string; commits: number; count: number };
      } = {};

      data.forEach((item) => {
        const date = new Date(item.date);
        const daysSinceStart = Math.floor(
          (date.getTime() - new Date(data[0]?.date || date).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const groupIndex = Math.floor(daysSinceStart / 3);
        const groupKey = `group-${groupIndex}`;

        if (!aggregated[groupKey]) {
          aggregated[groupKey] = {
            date: format(
              addDays(new Date(data[0]?.date || date), groupIndex * 3),
              'yyyy-MM-dd'
            ),
            commits: 0,
            count: 0,
          };
        }
        aggregated[groupKey].commits += item.commits;
        aggregated[groupKey].count += 1;
      });

      return Object.values(aggregated).map((item) => ({
        date: item.date,
        commits: item.commits,
      }));
    } else if (days === 150 || days === 182) {
      const aggregated: {
        [key: string]: { date: string; commits: number; count: number };
      } = {};

      data.forEach((item) => {
        const date = new Date(item.date);
        const weekStart = startOfWeek(date);
        const weekKey = format(weekStart, 'yyyy-MM-dd');

        if (!aggregated[weekKey]) {
          aggregated[weekKey] = { date: weekKey, commits: 0, count: 0 };
        }
        aggregated[weekKey].commits += item.commits;
        aggregated[weekKey].count += 1;
      });

      return Object.values(aggregated).map((item) => ({
        date: item.date,
        commits: item.commits,
      }));
    } else if (days === 365) {
      const aggregated: {
        [key: string]: { date: string; commits: number; count: number };
      } = {};

      data.forEach((item) => {
        const date = new Date(item.date);
        const monthStart = startOfMonth(date);
        const monthKey = format(monthStart, 'yyyy-MM-dd');

        if (!aggregated[monthKey]) {
          aggregated[monthKey] = { date: monthKey, commits: 0, count: 0 };
        }
        aggregated[monthKey].commits += item.commits;
        aggregated[monthKey].count += 1;
      });

      return Object.values(aggregated).map((item) => ({
        date: item.date,
        commits: item.commits,
      }));
    }

    return data;
  };

  const filteredData = useMemo(() => {
    const today = new Date();
    let baseData = commitActivity;

    if (selectedYears.length > 0) {
      baseData = commitActivity.filter((item) => {
        const itemYear = new Date(item.date).getFullYear().toString();
        return selectedYears.includes(itemYear);
      });
    }

    if (selectedRange && selectedYears.length <= 1) {
      const rangeValue = parseInt(selectedRange);
      const cutoffDate = subDays(today, rangeValue);

      baseData = baseData.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          isAfter(itemDate, cutoffDate) ||
          itemDate.getTime() === cutoffDate.getTime()
        );
      });

      baseData = aggregateData(baseData, rangeValue);
    } else if (selectedYears.length > 1) {
      baseData = aggregateData(baseData, 365);
    }

    return baseData;
  }, [commitActivity, selectedRange, selectedYears]);

  const multiYearData = useMemo(() => {
    if (selectedYears.length <= 1) return filteredData;

    const groupedData: { [key: string]: any } = {};

    filteredData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear().toString();
      const monthDay = format(date, 'MM-dd');

      if (!groupedData[monthDay]) {
        groupedData[monthDay] = { date: monthDay };
      }

      groupedData[monthDay][year] = item.commits;
    });

    return Object.values(groupedData);
  }, [filteredData, selectedYears]);

  const isMultiYear = selectedYears.length > 1;
  const chartData = isMultiYear ? multiYearData : filteredData;

  const getMenuButtonText = () => {
    const parts = [];
    if (selectedYears.length > 0) {
      parts.push(selectedYears.join(', '));
    }
    if (selectedRange && selectedYears.length <= 1) {
      const rangeLabel =
        rangeOptions.find((opt) => opt.value === selectedRange)?.label ||
        selectedRange;
      parts.push(rangeLabel);
    } else if (selectedYears.length > 1) {
      parts.push('Full Year');
    }
    return parts.length > 0 ? parts.join(' | ') : 'Select filters';
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            color: 'white',
          }}
        >
          <p>{`Date: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value} commits`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Box bg={'gray.700'} rounded={'lg'} shadow={'md'} p={'24px'}>
      <Flex justify={'space-between'} align={'center'} mb={'16px'}>
        <Heading fontSize={'20px'}>Commit Activity</Heading>

        <Menu closeOnSelect={false} placement={'bottom-end'}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={'sm'}>
            {getMenuButtonText()}
          </MenuButton>
          <MenuList maxH={'400px'} overflowY={'auto'}>
            {/* Time Range Section */}
            <Box px={'12px'} py={'8px'}>
              <Text
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'gray.500'}
                mb={'8px'}
              >
                TIME RANGES
              </Text>
              {rangeOptions.map((opt) => (
                <MenuItem
                  key={opt.value}
                  closeOnSelect={false}
                  pl={'4px'}
                  onClick={() => handleRangeSelect(opt.value)}
                  isDisabled={selectedYears.length > 1}
                  opacity={selectedYears.length > 1 ? 0.5 : 1}
                >
                  <Checkbox
                    isChecked={selectedRange === opt.value}
                    onChange={() => handleRangeSelect(opt.value)}
                    mr={'8px'}
                    pointerEvents={'none'}
                    isDisabled={selectedYears.length > 1}
                  />
                  {opt.label}
                </MenuItem>
              ))}
            </Box>

            <Divider />

            {/* Years Section */}
            <Box px={'12px'} py={'8px'}>
              <Text
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'gray.500'}
                mb={'8px'}
              >
                YEARS
              </Text>
              {yearOptions.map((opt) => (
                <MenuItem
                  key={opt.value}
                  closeOnSelect={false}
                  pl={'4px'}
                  onClick={() => handleYearSelect(opt.value)}
                >
                  <Checkbox
                    isChecked={selectedYears.includes(opt.value)}
                    onChange={() => handleYearSelect(opt.value)}
                    mr={'8px'}
                    pointerEvents={'none'}
                  />
                  {opt.label}
                </MenuItem>
              ))}
            </Box>
          </MenuList>
        </Menu>
      </Flex>

      <ResponsiveContainer width={'100%'} height={300}>
        {!isMultiYear ? (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray={'3 3'} />
            <XAxis
              dataKey={'date'}
              tickFormatter={(date: string) => format(new Date(date), 'MMM dd')}
              tick={{ fill: graphColor, fontSize: 14 }}
              axisLine={{ stroke: graphColor }}
            />
            <YAxis
              tick={{ fill: graphColor, fontSize: 14 }}
              domain={[0, 'dataMax']}
            />
            <Tooltip
              labelFormatter={(date: string) =>
                format(new Date(date), 'MMM dd, yyyy')
              }
              formatter={(value: any) => [`${value} commits`, 'Commits']}
            />
            <Area
              type={'monotone'}
              dataKey={'commits'}
              stroke={'#8884d8'}
              fill={'#8884d8'}
              fillOpacity={0.6}
            />
          </AreaChart>
        ) : (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray={'3 3'} />
            <XAxis
              dataKey={'date'}
              tick={{ fill: graphColor, fontSize: 14 }}
              axisLine={{ stroke: graphColor }}
            />
            <YAxis
              tick={{ fill: graphColor, fontSize: 14 }}
              domain={[0, 'dataMax']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {selectedYears.map((year, idx) => (
              <Line
                key={year}
                type={'monotone'}
                dataKey={year}
                stroke={idx === 0 ? '#8884d8' : '#82ca9d'}
                dot={false}
                name={year}
              />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
};

export default CommitActivityChart;
