import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Component = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  );
};
export default Component;
