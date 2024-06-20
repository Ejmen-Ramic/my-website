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
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <FadeInView>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>
              <Trans>Sign in to your account</Trans>
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              <Trans>to enjoy all of the cool</Trans>{' '}
              <Link style={{ color: '#4299E1' }} to={'/'}>
                <Trans>features</Trans>
              </Link>{' '}
              ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue(colors.white, 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id={'email'}>
                <FormLabel>
                  <Trans>Email address</Trans>
                </FormLabel>
                <Input type={'email'} />
              </FormControl>
              <FormControl id={'password'}>
                <FormLabel>
                  <Trans>Password</Trans>
                </FormLabel>
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
                  <Checkbox>
                    <Trans>Remember me</Trans>
                  </Checkbox>
                  <Link style={{ color: '#4299E1' }} to={'/passwordreset'}>
                    <Trans>Forgot password?</Trans>
                  </Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={colors.white}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  <Trans>Sign in</Trans>
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  <Trans>Not a user?</Trans>{' '}
                  <Link style={{ color: '#4299E1' }} to={'/signup'}>
                    <Trans>Register</Trans>
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
