import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { colors } from '../../../../../../shared/components/Hooks/color';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
];

interface LanguageDistributionChartProps {
  languageStats: { name: string; value: number }[];
  totalLangBytes: number;
}

const LanguageDistributionChart: React.FC<LanguageDistributionChartProps> = ({
  languageStats,
  totalLangBytes,
}) => {
  const MainBGColor = useColorModeValue(colors.gray[100], colors.gray[700]);

  return (
    <Stack bg={MainBGColor} rounded={'lg'} shadow={'md'} p={6}>
      <Heading size={'md'} mb={4}>
        Language Distribution
      </Heading>
      <ResponsiveContainer width={'100%'} height={300}>
        <PieChart>
          <Pie
            data={languageStats}
            dataKey={'value'}
            nameKey={'name'}
            cx={'50%'}
            cy={'50%'}
            outerRadius={90}
            innerRadius={40}
            label={({ name, percent }) => {
              const pct = Math.round((percent ?? 0) * 100);
              return pct >= 4 ? `${name} ${pct}%` : '';
            }}
            labelLine={false}
          >
            {languageStats.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, _name: string, props: any) => {
              const datum = props?.payload as { name: string; value: number };
              const pct = Math.round(
                ((datum?.value ?? 0) / totalLangBytes) * 100
              );
              return [
                `${Number(value).toLocaleString()} (${pct}%)`,
                datum?.name,
              ];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default LanguageDistributionChart;
