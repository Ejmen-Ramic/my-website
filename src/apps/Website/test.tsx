import {
  Button,
  Input,
  VStack,
  Text,
  Select,
  HStack,
  Stack,
  filter,
} from '@chakra-ui/react';
import { interval } from 'date-fns';
import { stat } from 'fs';
import { FC, useEffect, useMemo, useState } from 'react';

const Test: FC = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setTimer(0);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <VStack w={'full'} alignContent={'center'} mt={'300px'}>
      <VStack
        w={'full'}
        maxW={'800px'}
        gap={'30px'}
        border={'1px'}
        borderColor={'gray'}
        borderRadius={'10px'}
        alignItems={'center'}
        p={'35px'}
      >
        <HStack>
          <Button onClick={() => setIsRunning(!isRunning)}>
            {!isRunning ? 'Start' : 'Stop'}
          </Button>

          <Button onClick={handleReset}>Reset</Button>
        </HStack>

        <Text>
          {Math.floor(timer / 1000)}.{Math.floor((timer % 1000) / 10)}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Test;
