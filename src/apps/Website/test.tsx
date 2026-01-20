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
    username: '',
    age: 0,
    role: '',
    acceptedTerms: false,
    newsletter: false,
    isSaving: false,
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRole = (value: string) => {
    setForm((prev) => ({
      ...prev,
      role: value,
    }));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const isGuest = form.role === 'guest';
  const isUser = form.role === 'user';
  const isAdmin = form.role === 'admin';

  const canSubmit =
    (isUser &&
      form.username.trim() !== '' &&
      ((!form.newsletter && form.age >= 16) ||
        (form.newsletter && form.age >= 21))) ||
    (isAdmin && form.username.trim() !== '' && form.acceptedTerms);

  const handleSubmit = () => {
    setForm((prev) => ({
      ...prev,
      isSaving: true,
    }));
  };

  useEffect(() => {
    if (!form.isSaving) return;
    const timer = setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        isSaving: false,
      }));
    }, 2000);
    return () => clearTimeout(timer);
  }, [form.isSaving]);

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
      <VStack w={'300px'} pt={'100px'} spacing={4}>
        <Input
          name={'username'}
          placeholder={'type username'}
          value={form.username}
          onChange={handleForm}
        />
        <Input
          name={'age'}
          value={form.age}
          onChange={handleForm}
          placeholder={'type age'}
        />

        <RadioGroup name={'role'} value={form.role} onChange={handleRole}>
          <Stack>
            <Radio value={'user'}>User</Radio>
            <Radio value={'admin'}>Admin</Radio>
            <Radio value={'guest'}>Guest</Radio>
          </Stack>
        </RadioGroup>
        {isAdmin && (
          <Checkbox
            name={'acceptedTerms'}
            isChecked={form.acceptedTerms}
            onChange={handleCheck}
          >
            Accept Terms
          </Checkbox>
        )}
        {isUser && (
          <Checkbox
            name={'newsletter'}
            isChecked={form.newsletter}
            onChange={handleCheck}
          >
            Newsletter (optional)
          </Checkbox>
        )}
        {!canSubmit && <Text>{canSubmit ? '✅ Ready' : '❌ Not ready'}</Text>}
        {isGuest && <Text color={'red'}>Guest are not allowed</Text>}
        <Button isDisabled={!canSubmit || form.isSaving} onClick={handleSubmit}>
          {form.isSaving ? 'Saving...' : 'Submit'}
        </Button>
      </VStack>
    </Flex>
  );
};
export default Test;
