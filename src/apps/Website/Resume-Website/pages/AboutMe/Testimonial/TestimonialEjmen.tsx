import {
  Container,
  Text,
  VStack,
  Stack,
  Avatar,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaQuoteRight } from 'react-icons/fa';
import { colors } from '../../../../../../shared/components/Hooks/color';
interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: 'Ejmen Ramic',
  position: 'Software & QA Engineer',
  company: 'FLUX',
  image: './Website/About-Us/ejmenbusiness.png',
  content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`,
};

const TestimonialCard = () => {
  return (
    <Container maxW={'5xl'} p={{ base: 10, md: 14 }}>
      <VStack
        gap={3}
        p={4}
        bg={useColorModeValue(colors.white, 'blackAlpha.600')}
        border={'3px solid'}
        borderColor={'green.400'}
        maxW={'xl'}
        margin={'0 auto'}
        boxShadow={'lg'}
        pos={'relative'}
      >
        <Icon
          as={FaQuoteRight}
          w={10}
          h={10}
          color={'green.400'}
          left={'-1.3rem'}
          position={'absolute'}
          top={'-1.5rem'}
        />
        <Stack direction={'column'} gap={5}>
          <Text color={'gray.500'}></Text>
          <Text color={'gray.500'}></Text>
          <Text
            fontWeight={'bold'}
            fontSize={'lg'}
            align={'right'}
            mr={'3rem !important'}
          >
            {testimonial.username}
          </Text>
        </Stack>
        <Avatar
          name={'avatar'}
          src={testimonial.image}
          showBorder={true}
          borderColor={'green.400'}
          size={'xl'}
          pos={'absolute'}
          right={'-48px'}
          bottom={'-20px'}
          shadow={'lg'}
        />
      </VStack>
    </Container>
  );
};

export default TestimonialCard;
