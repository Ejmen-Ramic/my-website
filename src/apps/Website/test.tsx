import { Box, Button, Input, Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

const list = [10, 25, 8, 42, 15];

const Test: FC = () => {
  const [input, setInput] = useState('');

  const highestNumber = useMemo(() => {
    console.log('recalculating...');
    return Math.max(...list);
  }, [list]);
  return (
    <Box>
      <Text>{highestNumber}</Text>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </Box>
  );
};

export default Test;
