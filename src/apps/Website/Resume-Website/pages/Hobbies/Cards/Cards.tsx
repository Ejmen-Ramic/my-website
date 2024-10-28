import { Stack, SimpleGrid, HStack } from '@chakra-ui/react';
import { colors } from '../../../../../../shared/components/Hooks/color';

const Cards = () => {
  const zoomInStyles = {
    transition: 'transform 0.3s',
    '&:hover, &:focus': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    transform: 'scale(0.1)',
  };

  return (
    <HStack display='flex' justifyContent='center' minH={'800px'} my={'100px'}>
      <SimpleGrid columns={[1, 2, 4]} gap={10} minH={'500px'} minW={'1200px'}>
        <Stack
          w={'100%'}
          h={'100%'}
          borderWidth={'1px'}
          borderColor={colors.black}
          borderRadius={'24px'}
          _hover={zoomInStyles}
          _focus={zoomInStyles}
        ></Stack>
        <Stack
          w={'100%'}
          h={'100%'}
          borderWidth={'1px'}
          borderColor={colors.black}
          borderRadius={'24px'}
          _hover={zoomInStyles}
          _focus={zoomInStyles}
        ></Stack>
        <Stack
          w={'100%'}
          h={'100%'}
          borderWidth={'1px'}
          borderColor={colors.black}
          borderRadius={'24px'}
          _hover={zoomInStyles}
          _focus={zoomInStyles}
        ></Stack>
        <Stack
          w={'100%'}
          h={'100%'}
          borderWidth={'1px'}
          borderColor={colors.black}
          borderRadius={'24px'}
          _hover={zoomInStyles}
          _focus={zoomInStyles}
        ></Stack>
      </SimpleGrid>
    </HStack>
  );
};

export default Cards;
