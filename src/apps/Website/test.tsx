import { Stack, VStack, Text, HStack, Button, Input } from '@chakra-ui/react';

const Test = () => {
  return (
    <VStack w={'full'} mt={'300px'}>
      <Stack
        w={'full'}
        maxW={'400px'}
        borderRadius={'md'}
        border={'1px solid'}
        borderColor={'gray.200'}
        p={4}
      >
        <Input />
      </Stack>
    </VStack>
  );
};

export default Test;
