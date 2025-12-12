import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <Box as='form'>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleSubmit}>Sub</Button>
    </Box>
  );
};

export default Test;
