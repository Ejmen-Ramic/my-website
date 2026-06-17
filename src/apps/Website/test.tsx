import { Button, Input, VStack, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const Test: FC = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const BMI = useMemo(() => {
    return weight / (height / 100) ** 2;
  }, [height, weight]);

  const Categories = useMemo(() => {
    if (BMI < 18.5) {
      return 'UnderWeight';
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      return 'Normal';
    } else if (BMI >= 24.9 && BMI <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }, [BMI]);

  return (
    <VStack>
      <Input
        type={'number'}
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <Input
        type={'number'}
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <Text>{Categories}</Text>
    </VStack>
  );
};

export default Test;
