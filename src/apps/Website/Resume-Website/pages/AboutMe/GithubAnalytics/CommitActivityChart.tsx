import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Box,
  Flex,
  Heading,
  useToast,
  useColorModeValue,
  Stack,
  Text,
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
import { t, Trans } from '@lingui/macro';
import { colors } from '../../../../../../shared/components/Hooks/color';
import FilterMenu from './FilterMenu';
import { i18n } from '@lingui/core';

interface CommitActivityChartProps {
  commitActivity: { date: string; commits: number; year?: number }[];
  graphColor: string;
}

const rangeOptions = [
  { label: i18n._('Last 90 days'), value: '90', type: 'range' },
  { label: i18n._('Last 150 days'), value: '150', type: 'range' },
  { label: i18n._('Full Year'), value: '365', type: 'range' },
];

const yearOptions = [
  { label: '2025', value: '2025', type: 'year' },
  { label: '2024', value: '2024', type: 'year' },
];

const CommitActivityChart: React.FC<CommitActivityChartProps> = ({
  commitActivity,
  graphColor,
}) => {
  const MainBGColor = useColorModeValue(colors.gray[100], colors.gray[700]);

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

  const aggregateData = useCallback(
    (data: typeof commitActivity, days: number) => {
      if (days === 90) {
        const aggregated: Record<
          string,
          { date: string; commits: number; count: number }
        > = {};

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
        const aggregated: Record<
          string,
          { date: string; commits: number; count: number }
        > = {};

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
        const aggregated: Record<
          string,
          { date: string; commits: number; count: number }
        > = {};

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
    },
    []
  );

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
  }, [commitActivity, selectedRange, selectedYears, aggregateData]);

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
      parts.push(t`Full Year`);
    }
    return parts.length > 0 ? parts.join(' | ') : t`Select filters`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          as={'div'}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            color: 'white',
          }}
        >
          <Text as={'p'}>{`Date: ${label}`}</Text>
          {payload.map((entry: any, index: number) => (
            <Text as={'p'} key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value} commits`}
            </Text>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <Stack
      bg={MainBGColor}
      rounded={'lg'}
      shadow={'md'}
      py={'24px'}
      pr={'24px'}
    >
      <Flex
        justify={{ base: 'center', md: 'space-between' }}
        align={'center'}
        pl={'24px'}
        mb={'16px'}
      >
        <Heading fontSize={'20px'} textAlign={'center'}>
          <Trans>Commit Activity</Trans>
        </Heading>
        <Box display={{ base: 'none', md: 'block' }}>
          <FilterMenu
            selectedRange={selectedRange}
            selectedYears={selectedYears}
            rangeOptions={rangeOptions}
            yearOptions={yearOptions}
            getMenuButtonText={getMenuButtonText}
            handleRangeSelect={handleRangeSelect}
            handleYearSelect={handleYearSelect}
          />
        </Box>
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

      <Box pl={'24px'} display={{ base: 'block', md: 'none' }}>
        <FilterMenu
          selectedRange={selectedRange}
          selectedYears={selectedYears}
          rangeOptions={rangeOptions}
          yearOptions={yearOptions}
          getMenuButtonText={getMenuButtonText}
          handleRangeSelect={handleRangeSelect}
          handleYearSelect={handleYearSelect}
        />
      </Box>
    </Stack>
  );
};

export default CommitActivityChart;
