import {
  Button,
  Flex,
  Heading,
  Hide,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import items from './Props';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

// interface DMProps {
//   title: string;
//   alt: string;
//   image: string;
//   text: string;
//   link: string;
// }

const DeliveryMethods = () => {
  return (
    <FadeInView>
      <VStack
        spacing={'180px'}
        textAlign={'center'}
        w={'full'}
        mx={'auto'}
        justifyContent={'center'}
      >
        <VStack w={'full'} px={'25px'}>
          <Heading>Our Available Delivery Methods</Heading>
          <Text>
            The Knowledge Academy is World's Leading Organization for training
            professionals. The Knowledge Academy provides training in 490+{' '}
            <Hide below={'lg'}>
              <br />
            </Hide>
            locations in around 221+ countries, covering 3000 subjects with the
            following delivery methods:
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={'32px'}>
          {items.map(({ title, alt, image, text, link }, i) => (
            <Flex
              key={i}
              maxW={{ md: '392px' }}
              p={'30px'}
              direction={'column'}
              borderWidth={'1px'}
              borderColor={'gray'}
            >
              <VStack spacing={'20px'} w={'full'}>
                <Heading fontSize={'20px'}>{title}</Heading>
                <Image src={image} alt={alt} />
                <Text mt={'20px'} mb={'20px'}>
                  {text}
                </Text>
                <Link href={link}>
                  <Button
                    rightIcon={<Icon as={BsArrowRight} boxSize={6} />}
                    fontSize={'17px'}
                    fontFamily={'body'}
                    letterSpacing={'1px'}
                    justifyContent={{ base: 'center', lg: 'flex-start' }}
                    variant={'ghost'}
                    color={'#EF562D'}
                    bg={'transparent'}
                    _hover={{ bg: 'transparent', color: '#02bece' }}
                    _active={{ bg: 'transparent' }}
                  >
                    Enquire Now
                  </Button>
                </Link>
              </VStack>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </FadeInView>
  );
};

export default DeliveryMethods;
