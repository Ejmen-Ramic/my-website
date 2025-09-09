import React, { useState, useMemo } from 'react';
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
  // Allow both range and year selections simultaneously - Set defaults
  const [selectedRanges, setSelectedRanges] = useState<string[]>(['365']); // Default to Full Year
  const [selectedYears, setSelectedYears] = useState<string[]>(['2025']); // Default to 2025

  const handleRangeSelect = (value: string) => {
    setSelectedRanges((prev) => {
      // If trying to uncheck and it's the last selected range, prevent it
      if (prev.includes(value) && prev.length === 1) {
        return prev; // Don't allow unchecking the last range
      }
      return prev.includes(value)
        ? prev.filter((r) => r !== value)
        : [...prev, value];
    });
  };

  const handleYearSelect = (value: string) => {
    setSelectedYears((prev) => {
      // If trying to uncheck and it's the last selected year, prevent it
      if (prev.includes(value) && prev.length === 1) {
        return prev; // Don't allow unchecking the last year
      }
      return prev.includes(value)
        ? prev.filter((y) => y !== value)
        : [...prev, value];
    });
  };

  // Aggregate data based on time range
  const aggregateData = (data: typeof commitActivity, days: number) => {
    if (days === 90) {
      // Every 3 days (30 points)
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
        commits: item.commits, // Sum total commits, don't average
      }));
    } else if (days === 150 || days === 182) {
      // Weekly aggregation (26 points for ~182 days)
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
        commits: item.commits, // Sum total commits, don't average
      }));
    } else if (days === 365) {
      // Monthly aggregation (12 points)
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
        commits: item.commits, // Sum total commits for the month, don't average
      }));
    }

    return data;
  };

  // Filter and process data based on selections
  const filteredData = useMemo(() => {
    const today = new Date();
    let baseData = commitActivity;

    // Filter by years if selected
    if (selectedYears.length > 0) {
      baseData = commitActivity.filter((item) => {
        const itemYear = new Date(item.date).getFullYear().toString();
        return selectedYears.includes(itemYear);
      });
    }

    // If range is selected, further filter by date range
    if (selectedRanges.length > 0) {
      // Use the largest selected range
      const maxRange = Math.max(...selectedRanges.map((r) => parseInt(r)));
      const cutoffDate = subDays(today, maxRange);

      baseData = baseData.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          isAfter(itemDate, cutoffDate) ||
          itemDate.getTime() === cutoffDate.getTime()
        );
      });

      // Apply aggregation based on the selected range
      baseData = aggregateData(baseData, maxRange);
    }

    return baseData;
  }, [commitActivity, selectedRanges, selectedYears]);

  // Prepare data for multi-year comparison
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

  // Generate menu button text
  const getMenuButtonText = () => {
    const parts = [];
    if (selectedYears.length > 0) {
      parts.push(selectedYears.join(', '));
    }
    if (selectedRanges.length > 0) {
      const rangeLabels = selectedRanges.map(
        (r) => rangeOptions.find((opt) => opt.value === r)?.label || r
      );
      parts.push(rangeLabels.join(', '));
    }
    return parts.length > 0 ? parts.join(' | ') : 'Select filters';
  };

  // Custom tooltip
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

        <Menu closeOnSelect={false}>
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
                <MenuItem key={opt.value} closeOnSelect={false} pl={'4px'}>
                  <Checkbox
                    isChecked={selectedRanges.includes(opt.value)}
                    onChange={() => handleRangeSelect(opt.value)}
                    mr={'8px'}
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
                <MenuItem key={opt.value} closeOnSelect={false} pl={'4px'}>
                  <Checkbox
                    isChecked={selectedYears.includes(opt.value)}
                    onChange={() => handleYearSelect(opt.value)}
                    mr={'8px'}
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
              domain={[0, 'dataMax']} // This ensures Y-axis shows full range
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
              domain={[0, 'dataMax']} // This ensures Y-axis shows full range
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
