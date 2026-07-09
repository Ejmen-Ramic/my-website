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
import ThemeDisplay from './ThemeDisplay';
import { ThemeProvider } from './ThemeContext';
import ThemeButton from './ThemeButton';
import ThemeIcon from './ThemeIcon';

const Test: FC = () => {
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
        <ThemeProvider>
          <ThemeIcon />
          <ThemeButton />
          <ThemeDisplay />
        </ThemeProvider>
      </VStack>
    </VStack>
  );
};

export default Test;
