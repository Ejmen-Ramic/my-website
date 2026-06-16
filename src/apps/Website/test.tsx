import { Button, HStack, VStack, Text, Input } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const Test: FC = () => {
  const [celsius, setCelsius] = useState(0);

  const handleReset = () => {
    setCelsius(0);
  };

  const tempConverter = useMemo(() => {
    return (celsius * 9) / 5 + 32;
  }, [celsius]);

  const message = useMemo(() => {
    if (tempConverter > 100) {
      return 'Hot!';
    } else if (tempConverter < 32) {
      return 'Freezing';
    } else {
      return '';
    }
  }, [tempConverter]);

  return (
    <VStack>
      <HStack>
        <Input
          value={celsius}
          onChange={(e) => setCelsius(Number(e.target.value))}
        />
      </HStack>
      <HStack>
        <Text
          color={
            tempConverter > 100
              ? 'red'
              : tempConverter < 32
              ? 'lightblue'
              : 'green'
          }
        >
          {tempConverter}
        </Text>
        <Text
          color={
            tempConverter > 100
              ? 'red'
              : tempConverter < 32
              ? 'lightblue'
              : 'green'
          }
        >
          {celsius}
        </Text>
        <Button onClick={handleReset}>Reset</Button>
      </HStack>
    </VStack>
  );
};

export default Test;
