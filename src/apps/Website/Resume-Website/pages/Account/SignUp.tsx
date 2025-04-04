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
  useColorModeValue,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import FadeInView from '../../../../../shared/components/Hooks/FadeInView'
import { colors } from '../../../../../shared/components/Hooks/color'

const SignUp: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue(colors.gray[50], colors.gray[800])}
    >
      <FadeInView>
        <Stack
          spacing={8}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={6}
          data-testid={'sign-up'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={colors.gray[600]}>
              to enjoy all of the cool{' '}
              <Link
                style={{ color: colors.blue[400] }}
                to={'/'}
                data-testid={'sign-up-feature-link'}
              >
                features
              </Link>{' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue(colors.white, colors.gray[700])}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id={'firstName'} isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type={'text'} data-testid={'insert-first-name'} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id={'lastName'}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type={'text'} data-testid={'insert-last-name'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id={'email'} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type={'email'} data-testid={'insert-signup-email'} />
              </FormControl>
              <FormControl id={'password'} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    data-testid={'insert-signup-password'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                      data-testid={'toggle-password-visibility'}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText={'Submitting'}
                  size={'lg'}
                  bg={colors.blue[400]}
                  color={colors.white}
                  _hover={{
                    bg: colors.blue[500],
                  }}
                  data-testid={'sign-up-button'}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link style={{ color: colors.blue[400] }} to={'/signin'}>
                    Login
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

export default SignUp
