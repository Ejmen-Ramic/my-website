import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <FadeInView>
        <Stack gap={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of the cool{' '}
              <Link style={{ color: '#4299E1' }} to={'/'}>
                features
              </Link>{' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue(colors.white, 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack gap={4}>
              <HStack>
                <Box>
                  <FormControl id={'firstName'} required>
                    <FormLabel>First Name</FormLabel>
                    <Input type={'text'} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id={'lastName'}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type={'text'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id={'email'} required>
                <FormLabel>Email address</FormLabel>
                <Input type={'email'} />
              </FormControl>
              <FormControl id={'password'} required>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'plain'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack gap={10} pt={2}>
                <Button
                  loadingText={'Submitting'}
                  size={'lg'}
                  bg={'blue.400'}
                  color={colors.white}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link style={{ color: '#4299E1' }} to={'/signin'}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </FadeInView>
    </Flex>
  );
};

export default SignUp;
