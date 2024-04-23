import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FadeInView from '../../../shared/components/Hooks/FadeInView'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Flex align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <FadeInView>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool{' '}
              <Link style={{ color: '#4299E1' }} to={'/'}>
                features
              </Link>{' '}
              ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id={'email'}>
                <FormLabel>Email address</FormLabel>
                <Input type={'email'} />
              </FormControl>
              <FormControl id={'password'}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link style={{ color: '#4299E1' }} to={'/passwordreset'}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Not a user?{' '}
                  <Link style={{ color: '#4299E1' }} to={'/signup'}>
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </FadeInView>
    </Flex>
  )
}

export default SignIn
