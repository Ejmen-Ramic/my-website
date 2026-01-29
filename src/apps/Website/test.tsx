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
  InputElementProps,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

const Test = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
  });

  const [touchedUsername, setTouchedUsername] = useState<boolean>(false);
  const [touchedEmail, setTouchedEmail] = useState<boolean>(false);

  const canSubmit = form.username.length >= 3 && form.email.includes('@');

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Flex w='100vw' align='center' justify='center'>
      <VStack w='300px' pt='100px' spacing={4}>
        <Input
          name='username'
          value={form.username}
          onChange={handleForm}
          onBlur={() => setTouchedUsername(true)}
          placeholder={'Type Username'}
        />
        <Input
          name='email'
          value={form.email}
          onChange={handleForm}
          onBlur={() => setTouchedEmail(true)}
          placeholder={'Type Email'}
        />
        {touchedUsername && form.username.trim() === '' && (
          <Text color={'red'}>Username is required</Text>
        )}
        {touchedUsername &&
          form.username.trim() !== '' &&
          form.username.length < 3 && (
            <Text>Username must be at least 3 characters</Text>
          )}

        {touchedEmail && form.email.trim() === '' && (
          <Text color={'red'}>Email is required</Text>
        )}
        {touchedEmail &&
          form.email.trim() !== '' &&
          !form.email.includes('@') && (
            <Text color='red'>Email must include @</Text>
          )}
        <Button isDisabled={!canSubmit}></Button>
      </VStack>
    </Flex>
  );
};

export default Test;
