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
    acceptedTerms: false,
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

  const canSubmit = form.username.trim() !== '' && form.acceptedTerms;

  return (
    <VStack>
      <Input
        name={'username'}
        value={form.username}
        onChange={handleForm}
        placeholder={'type username'}
      />
      <Checkbox
        name={'acceptedTerms'}
        isChecked={form.acceptedTerms}
        onChange={handleCheck}
      />
      <Button isDisabled={!canSubmit}>Submit</Button>
    </VStack>
  );
};
export default Test;
