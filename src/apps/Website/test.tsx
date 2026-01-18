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
  const [form, setForm] = useState({
    email: '',
    role: '', // 'user' | 'admin' | 'guest'
    age: 0,
    acceptedTerms: false,
    newsletter: false,
    emailVerified: false,
    phoneVerified: false,
    twoFactorEnabled: false,
    trialUser: false,
    hasPaidSubscription: false,
  });

  const isGuest = form.role === 'guest';
  const isUser = form.role === 'user';
  const isAdmin = form.role === 'admin';

  const canSubmit =
    (!isGuest && (form.hasPaidSubscription || form.age >= 18)) ||
    (isUser && form.age >= 16);

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
      <VStack w={'300px'} pt={'100px'} spacing={4}></VStack>
    </Flex>
  );
};
export default Test;
