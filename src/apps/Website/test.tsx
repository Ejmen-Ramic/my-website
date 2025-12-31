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
    name: '',
    theme: 'light',
    emailNotification: false,
    isSaving: false,
  });

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setForm((prev) => ({
      ...prev,
      emailNotification: checked,
    }));
  };

  const handleSave = () => {
    setForm((prev) => ({
      ...prev,
      isSaving: true,
    }));
  };

  const isDisabled = form.name.trim() === '' || form.isSaving;

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
    <VStack>
      <Input name={'name'} value={form.name} onChange={handleForm} />
      <Select name={'theme'} value={form.theme} onChange={handleForm}>
        <option value={'light'}>Light</option>
        <option value={'dark'}>Dark</option>
      </Select>
      <Checkbox isChecked={form.emailNotification} onChange={handleCheck}>
        Email Notification
      </Checkbox>
      <Button
        loadingText={'loading'}
        onClick={handleSave}
        isLoading={form.isSaving}
        isDisabled={isDisabled}
      >
        Save
      </Button>

      {form.isSaving && <Text>Profile saved ✅</Text>}
    </VStack>
  );
};

export default Test;
