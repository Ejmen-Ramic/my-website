import { Button, Input, VStack, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const Test: FC = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  const billCalc = useMemo(() => {
    return bill * (tip / 100);
  }, [bill, tip]);

  const tipCalc = useMemo(() => {
    return bill + billCalc;
  }, [bill, billCalc]);

  const handleDeleteAll = () => {
    setBill(0);
    setTip(0);
  };

  return (
    <VStack>
      <Input
        type={'number'}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <Button onClick={() => setTip(10)}>10%</Button>
      <Button onClick={() => setTip(15)}>15%</Button>
      <Button onClick={() => setTip(20)}>20%</Button>
      <Button onClick={handleDeleteAll}>Reset</Button>
      <Text>Tip amount: {billCalc}</Text>
      <Text>Total: {tipCalc}</Text>
    </VStack>
  );
};

export default Test;
