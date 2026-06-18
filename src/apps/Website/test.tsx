import { Button, Input, VStack, Text, Select } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const rates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  MYR: 4.72,
  JPY: 149.5,
};

const Test: FC = () => {
  const [amount, setAmount] = useState(0);
  const [conversionFrom, setConversionFrom] = useState('');
  const [conversionTo, setConversionTo] = useState('');

  const conversionFormula = useMemo(() => {
    const fromRate = rates[conversionFrom];
    const toRate = rates[conversionTo];
    return (amount / fromRate) * toRate;
  }, [amount, conversionFrom, conversionTo]);

  return (
    <VStack>
      <Input
        type={'number'}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <Select
        value={conversionFrom}
        onChange={(e) => setConversionFrom(e.target.value)}
      >
        <option value=''>From</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='GBP'>GBP</option>
        <option value='MYR'>MYR</option>
        <option value='JPY'>JPY</option>
      </Select>
      <Select
        value={conversionTo}
        onChange={(e) => setConversionTo(e.target.value)}
      >
        <option value=''>To</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='GBP'>GBP</option>
        <option value='MYR'>MYR</option>
        <option value='JPY'>JPY</option>
      </Select>
      <Text>{conversionFormula}</Text>
    </VStack>
  );
};

export default Test;
