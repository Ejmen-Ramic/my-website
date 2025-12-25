import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { time } from 'console';
import { useEffect, useState } from 'react';

const Test = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
  };

  useEffect(() => {
    if (!isSaving) return;
    const timer = setTimeout(() => {
      setIsSaving(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSaving]);

  return (
    <Stack>
      <Input placeholder='type your email' />
      <Button onClick={handleSave} isLoading={isSaving}>
        Subscribe
      </Button>
      {isSaving && <Text>Subscribed successfully ✅</Text>}
    </Stack>
  );
};

export default Test;
