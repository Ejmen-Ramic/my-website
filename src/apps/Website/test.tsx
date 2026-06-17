import { Button, Input, VStack, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const Test: FC = () => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const savedAmount = useMemo(() => {
    return price * (discount / 100);
  }, [price, discount]);

  const finalPrice = useMemo(() => {
    return price - savedAmount;
  }, [price, savedAmount]);

  return (
    <VStack>
      <Input
        type='number'
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Input
        type='number'
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      />
      <Text>{finalPrice}</Text>
      <Text>{savedAmount}</Text>
    </VStack>
  );
};

export default Test;
