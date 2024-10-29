import Footer from '../../../../../shared/components/PageWrapper/Footer/Footer';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../../../../shared/components/Hooks/color';
import Header from '../../../../../shared/components/PageWrapper/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <Center>
        <Flex>
          <VStack
            gap={'50px'}
            minH={'700px'}
            width={'full'}
            justifyContent={'center'}
          >
            <Heading>404: Not Found</Heading>
            <Text
              fontSize={'2xl'}
              maxW={{ base: '350px', md: 'full' }}
              textAlign={{ base: 'center', md: 'unset' }}
            >
              Press the button below to go to the{' '}
              <Box color={'red'} textTransform={'uppercase'} as={'span'}>
                Home
              </Box>{' '}
              page
            </Text>
            <Link to={'/'}>
              <Button
                w={'200px'}
                h={'50px'}
                borderRadius={'0px'}
                borderWidth={'1px'}
                borderColor={colors.black}
                bgColor={colors.white}
                color={colors.black}
                _hover={{ bgColor: colors.black, color: colors.white }}
              >
                Home Page
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Center>
      <Footer />
    </>
  );
};

export default NotFound;
