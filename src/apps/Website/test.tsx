import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [color, setColor] = useState<string>('');

  const handleColor = (value: string) => {
    setColor(value);
  };
  return (
    <Stack>
      <RadioGroup value={color} onChange={handleColor}>
        <Radio>Red</Radio>
        <Radio>Blue</Radio>
        <Radio>Green</Radio>
      </RadioGroup>

      <Box>
        <Text>
          {color ? `Selected color: ${color}` : 'No color has been selected'}
        </Text>
      </Box>
    </Stack>
  );
};

export default Test;
