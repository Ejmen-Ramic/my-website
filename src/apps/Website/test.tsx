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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Test = () => {
  const [form, setForm] = useState({
    username: '',
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const canSubmit = form.username.trim() !== '';

  return (
    <VStack>
      <Input
        name='username'
        placeholder={'username'}
        value={form.username}
        onChange={handleForm}
      />
      <Button isDisabled={!canSubmit}>Submit</Button>
      <Text color={canSubmit ? 'green' : 'red'}>
        {canSubmit ? 'Ready' : 'Not Ready'}
      </Text>
    </VStack>
  );
};

export default Test;
