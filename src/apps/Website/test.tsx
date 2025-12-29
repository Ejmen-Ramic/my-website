import {
  Button,
  Checkbox,
  Input,
  Select,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [form, setForm] = useState({
    email: '',
    frequency: '',
    agree: false,
  });

  const toast = useToast();

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'frequency' && value === 'daily') {
      toast({
        title: 'Heads up!',
        description: 'There will be many emails if you choose daily.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setForm((prev) => ({
      ...prev,
      agree: checked,
    }));
  };

  const canSubscribe =
    form.email.trim() !== '' && form.frequency !== '' && form.agree;

  return (
    <VStack>
      <Input name='email' value={form.email} onChange={handleForm} />
      <Select name='frequency' value={form.frequency} onChange={handleForm}>
        <option value='daily'>Daily</option>
        <option value='weekly'>Weekly</option>
        <option value='monthly'>Monthly</option>
      </Select>
      <Checkbox isChecked={form.agree} onChange={handleCheck}>
        I agree to receive emails
      </Checkbox>

      {/* disable when cannot subscribe */}
      <Button disabled={!canSubscribe}>Subscribe</Button>

      <Text color={canSubscribe ? 'green' : 'red'}>
        {canSubscribe ? 'Granted' : 'Not granted'}
      </Text>
    </VStack>
  );
};

export default Test;
