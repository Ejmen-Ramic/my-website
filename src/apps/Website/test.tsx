import {
  Button,
  Checkbox,
  Input,
  Select,
  VStack,
  Text,
  useToast,
  Switch,
  Box,
  Flex,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
('');
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
      <VStack w={'300px'} pt={'100px'} spacing={4}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder='Type something'
        />

        {touched && value.trim() === '' && (
          <Text color='red'>This field is required</Text>
        )}
      </VStack>
    </Flex>
  );
};
export default Test;
