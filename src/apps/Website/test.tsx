import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { count } from 'console';
import { useEffect, useState } from 'react';

const Test = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [email, setEmail] = useState('');

  const handleSave = () => {
    setIsSaving(true);
    setCountdown(3);
  };

  useEffect(() => {
    if (!isSaving) return;

    if (countdown === 0) {
      setIsSaving(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isSaving, countdown]);

  return (
    <Stack>
      <Input
        placeholder='type your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button onClick={handleSave} isLoading={isSaving}>
        Subscribe
      </Button>

      {isSaving && (
        <Text>Subscribed successfully ✅ (disappears in {countdown})</Text>
      )}
    </Stack>
  );
};

export default Test;
