import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'
import { FC } from 'react'
import { colors } from '../../../../../shared/components/Hooks/color'
import FadeInView from '../../../../../shared/components/Hooks/FadeInView'

// type ForgotPasswordFormInputs = {
//   email: string;
// };

const ForgotPassword: FC = (): JSX.Element => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue(colors.gray[50], colors.gray[800])}
    >
      <FadeInView>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue(colors.white, colors.gray[700])}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            <Trans>Forgot your password?</Trans>
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue(colors.gray[800], colors.gray[400])}
          >
            <Trans>You&apos;ll get an email with a reset link</Trans>
          </Text>
          <FormControl id={'email'}>
            <Input
              placeholder={t`your-email@example.com`}
              _placeholder={{ color: colors.gray[500] }}
              type={'email'}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={colors.blue[400]}
              color={colors.white}
              _hover={{
                bg: colors.blue[500],
              }}
            >
              <Trans>Request Reset</Trans>
            </Button>
          </Stack>
        </Stack>
      </FadeInView>
    </Flex>
  )
}

export default ForgotPassword
