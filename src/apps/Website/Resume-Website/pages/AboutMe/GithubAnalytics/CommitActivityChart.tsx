import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';

interface CommitActivityChartProps {
  commitActivity: { date: string; commits: number }[];
}

const CommitActivityChart: React.FC<CommitActivityChartProps> = ({
  commitActivity,
}) => {
  const GraphColor = useColorModeValue('#1a202c', 'white');

  return (
    <Stack bg='gray.700' rounded='lg' shadow='md' p={6} spacing='36px'>
      <Heading fontSize='20px'>Commit Activity (Last 90 Days)</Heading>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={commitActivity}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='date'
            tickFormatter={(date: string) => format(new Date(date), 'MMM dd')}
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
    </Stack>
  );
};

export default CommitActivityChart;
