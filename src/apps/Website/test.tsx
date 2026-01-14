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

  const isViewer = form.role === 'viewer';
  const isEditor = form.role === 'editor';
  const isOwner = form.role === 'owner';

  const canSubmit =
    form.username.trim() !== '' &&
    !isViewer &&
    (isEditor || (isOwner && form.acceptedTerms));

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
          name='username'
          value={form.username}
          onChange={handleForm}
          placeholder='type username'
        />
        <RadioGroup value={form.role} onChange={handleRole}>
          <Stack>
            <Radio value='viewer'>Viewer</Radio>
            <Radio value='editor'>Editor</Radio>
            <Radio value='owner'>Owner</Radio>
          </Stack>
        </RadioGroup>
        {isOwner && (
          <Checkbox
            name={'acceptedTerms'}
            isChecked={form.acceptedTerms}
            onChange={handleCheck}
          >
            Accepted Terms
          </Checkbox>
        )}

        {isEditor && <Text>Terms not required for editors</Text>}
        <Button isDisabled={!canSubmit || form.isSaving} onClick={handleSubmit}>
          {form.isSaving ? 'Saving ...' : 'Submit'}
        </Button>
        <Text color={canSubmit ? 'green' : 'red'}>
          {canSubmit ? 'Ready' : 'Not ready'}
        </Text>
      </VStack>
    </Flex>
  );
};
export default Test;
