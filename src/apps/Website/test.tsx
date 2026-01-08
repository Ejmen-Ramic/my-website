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
  const [form, setForm] = useState({ role: '', name: '' });
  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const canSubmit = form.name.trim() !== '' && form.role !== 'guest';
  return (
    <VStack>
      {' '}
      <Select name='role' value={form.role} onChange={handleForm}>
        {' '}
        <option value={'user'}>User</option>{' '}
        <option value={'admin'}>Admin</option>{' '}
        <option value={'guest'}>Guest</option>{' '}
      </Select>{' '}
      <Input name='name' value={form.name} onChange={handleForm} />{' '}
      <Button isDisabled={!canSubmit}>Submit</Button>{' '}
      <Text color={canSubmit ? 'green' : 'red'}>
        {' '}
        {canSubmit ? 'Access Granted' : 'Access Denied'}{' '}
      </Text>{' '}
    </VStack>
  );
};
export default Test;
