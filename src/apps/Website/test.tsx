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
import { FC, useEffect, useMemo, useState } from 'react';
import useTimer from './useTimer';

const Test: FC = () => {
  const { timer, isRunning, setIsRunning, handleReset } = useTimer();
  return (
    <VStack w={'full'} alignContent={'center'} mt={'300px'}>
      <VStack
        w={'full'}
        maxW={'8005px'}
        gap={'30px'}
        border={'1px'}
        borderColor={'gray'}
        borderRadius={'10px'}
        alignItems={'center'}
        p={'35px'}
      >
        <HStack>
          <Button onClick={() => setIsRunning(!isRunning)}>
            {!isRunning ? 'Starts' : 'Stop'}
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
