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
  Radio,
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
import { format, subDays, isAfter, isBefore, startOfDay } from 'date-fns';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface CommitActivityChartProps {
  commitActivity: { date: string; commits: number; year?: number }[];
  graphColor: string;
}

const options = [
  { label: 'Last 90 days', value: '90', type: 'range' },
  { label: 'Last 150 days', value: '150', type: 'range' },
  { label: 'Full Year', value: '365', type: 'range' },
  { label: '2025', value: '2025', type: 'year' },
  { label: '2024', value: '2024', type: 'year' },
];

const CommitActivityChart: React.FC<CommitActivityChartProps> = ({
  commitActivity,
  graphColor,
}) => {
  // Default to 2025 as requested
  const [selectedRange, setSelectedRange] = useState<string>('');
  const [selectedYears, setSelectedYears] = useState<string[]>(['2025']);

  const handleSelect = (opt: (typeof options)[number]) => {
    if (opt.type === 'range') {
      setSelectedRange(opt.value);
      setSelectedYears([]); // clear years if switching back
    } else {
      // toggle year on/off
      setSelectedYears((prev) =>
        prev.includes(opt.value)
          ? prev.filter((y) => y !== opt.value)
          : [...prev, opt.value]
      );
      setSelectedRange(''); // clear range if choosing years
    }
  };

  // Filter data based on selection
  const filteredData = useMemo(() => {
    const today = new Date();

    if (selectedRange) {
      // Filter by days range
      const daysBack = parseInt(selectedRange);
      const cutoffDate = subDays(today, daysBack);

      return commitActivity.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          isAfter(itemDate, cutoffDate) ||
          itemDate.getTime() === cutoffDate.getTime()
        );
      });
    } else if (selectedYears.length > 0) {
      // Filter by selected years
      return commitActivity.filter((item) => {
        const itemYear = new Date(item.date).getFullYear().toString();
        return selectedYears.includes(itemYear);
      });
    }

    return commitActivity;
  }, [commitActivity, selectedRange, selectedYears]);

  // Prepare data for multi-year line chart
  const multiYearData = useMemo(() => {
    if (selectedYears.length <= 1) return filteredData;

    // Group data by date (month-day) and create separate series for each year
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

  // Custom tooltip for multi-year chart
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
              {`${entry.dataKey}: ${entry.value}`}
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
            {selectedYears.length > 0
              ? selectedYears.join(', ')
              : options.find((o) => o.value === selectedRange)?.label ||
                'Select range'}
          </MenuButton>
          <MenuList>
            {options.map((opt) => (
              <MenuItem key={opt.value} closeOnSelect={false}>
                {opt.type === 'range' ? (
                  <Radio
                    isChecked={selectedRange === opt.value}
                    onChange={() => handleSelect(opt)}
                    mr={'8px'}
                  />
                ) : (
                  <Checkbox
                    isChecked={selectedYears.includes(opt.value)}
                    onChange={() => handleSelect(opt)}
                    mr={'8px'}
                  />
                )}
                {opt.label}
              </MenuItem>
            ))}
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
            <YAxis tick={{ fill: graphColor, fontSize: 14 }} />
            <Tooltip
              labelFormatter={(date: string) =>
                format(new Date(date), 'MMM dd, yyyy')
              }
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
            <YAxis tick={{ fill: graphColor, fontSize: 14 }} />
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
