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
import { useEffect, useState } from 'react';

const Test = () => {
  const [form, setForm] = useState({
    username: '',
    role: '',
    acceptedTerms: false,
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

  const isViewer = form.role === 'viewer';
  const isEditor = form.role === 'editor';
  const isOwner = form.role === 'owner';

  const canSubmit =
    form.username.trim() !== '' &&
    !isViewer &&
    (isEditor || (isOwner && form.acceptedTerms));

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
      <VStack w={'300px'} pt={'100px'} spacing={4}>
        <Input name={'username'} value={form.username} onChange={handleForm} />
        <RadioGroup name={'role'} value={form.role} onChange={handleRole}>
          <Stack>
            <Radio value={'viewer'}>Viewer</Radio>
            <Radio value={'editor'}>Editor</Radio>
            <Radio value={'owner'}>Owner</Radio>
          </Stack>
        </RadioGroup>
        {isOwner && (
          <Checkbox
            name={'acceptedTerms'}
            isChecked={form.acceptedTerms}
            onChange={handleCheck}
          >
            Accept Terms
          </Checkbox>
        )}
        {isEditor && <Text>Policy not required for editors</Text>}
        <Button isDisabled={!canSubmit}>Submit</Button>
        <Text color={canSubmit ? 'green' : 'red'}>
          {canSubmit ? 'Ready' : 'Not ready'}
        </Text>
      </VStack>
    </Flex>
  );
};
export default Test;
