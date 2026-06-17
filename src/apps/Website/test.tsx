import { Button, Input, VStack, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const Test: FC = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const splitBill = useMemo(() => {
    return people === 0 ? 0 : bill / people;
  }, [bill, people]);

  return (
    <VStack>
      <Input
        type={'number'}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <Input
        type={'number'}
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />
      <Text>{splitBill}</Text>
    </VStack>
  );
};

export default Test;
