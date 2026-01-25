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

import React, { useEffect, useState } from 'react';

const Test = () => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  return (
    <Flex w='100vw' align='center' justify='center'>
      <VStack w='300px' pt='100px' spacing={4}>
        <Input placeholder={'type value'} />
        <Text>Required</Text>
        <Text></Text>
        <Text></Text>
        <Text fontSize='sm'>
          touched: {String(touched)} | dirty: {String(dirty)}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Test;
