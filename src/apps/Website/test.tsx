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
    acceptedTerms: false,
    newsletter: false,
    age: 0,
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePlan = (value: string) => {
    setForm((prev) => ({
      ...prev,
      plan: value,
    }));
  };

  const isGuest = form.role === 'guest';
  const isUser = form.role === 'user';
  const isAdmin = form.role === 'admin';

  const canSubmit =
    form.email !== '' &&
    !isGuest &&
    (isUser || (form.age >= 18 && form.acceptedTerms)) &&
    (isAdmin || (form.acceptedTerms && form.age));

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
      <VStack w={'300px'} pt={'100px'} spacing={4}>
        <Input
          name={'email'}
          placeholder={'type email'}
          value={form.email}
          onChange={handleForm}
        />
        <RadioGroup value={form.role} onChange={handlePlan}>
          <Stack>
            <Radio value={'basic'}>Basic</Radio>
            <Radio value={'team'}>Team</Radio>
            <Radio value={'enterprise'}>Enterprise</Radio>
          </Stack>
        </RadioGroup>
        {isAdmin && (
          <>
            <Checkbox
              name={'acceptedTerms'}
              isChecked={form.acceptedTerms}
              onChange={handleCheck}
            >
              Accept Terms
            </Checkbox>
          </>
        )}

        {/* {isBasic && <Text color={'yellow'}>Terms not required</Text>}
        {isEnterprise && <Text color={'red'}>Enterprise is not allowed</Text>}
        <Button isDisabled={!canSubmit || form.isSaving} onClick={handleSubmit}>
          Submit
        </Button> */}
      </VStack>
    </Flex>
  );
};
export default Test;
