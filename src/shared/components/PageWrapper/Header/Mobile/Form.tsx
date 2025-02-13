import { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  useColorModeValue,
  useToast,
  Text,
} from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../Hooks/color'
import * as Sentry from '@sentry/browser'

type Status = 'IDLE' | 'SUCCESS' | 'ERROR'

interface SubscribeResponse {
  message: string
  data?: any
  error?: string
}

const HeaderForm = () => {
  const [email, setEmail] = useState<string>('')
  const [status, setStatus] = useState<Status>('IDLE')
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!validateEmail(email)) {
      toast({
        title: t`Invalid email`,
        description: t`Please enter a valid email address.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setLoading(true)
    setStatus('IDLE')

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )

      const data: SubscribeResponse = await response.json()

      if (response.ok) {
        setStatus('SUCCESS')
        setEmail('')
        toast({
          title: t`Success!`,
          description: t`You have been successfully subscribed to our newsletter.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } else {
        setStatus('ERROR')
        toast({
          title: t`Subscription failed`,
          description: data.error || t`An error occurred while subscribing.`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

        Sentry.captureMessage('Newsletter subscription failed', {
          extra: {
            email,
            error: data.error,
            response: data,
          },
          level: 'error',
        })
      }
    } catch (err) {
      setStatus('ERROR')
      console.error('Newsletter subscription error:', err)

      toast({
        title: t`Connection Error`,
        description: t`Unable to connect to the subscription service. Please try again later.`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })

      Sentry.captureException(err, {
        extra: {
          email,
          context: 'Newsletter subscription',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box mt={'auto'} bottom={0}>
      <Heading fontSize={'20px'} pb={'15px'}>
        <Trans>Stay up to date</Trans>
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box position={'relative'}>
          <Input
            type={'email'}
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            pr={'25px'}
            pl={'15px'}
            height={'50px'}
            rounded={'17px'}
            _placeholder={{ color: 'gray.300' }}
            placeholder={t`Enter your email`}
            color={colors.gray[100]}
            bg={useColorModeValue('blackAlpha.100', 'gray.600')}
            borderWidth={0}
          />
          <Button
            type={'submit'}
            height={'50px'}
            color={useColorModeValue(colors.white, colors.gray[100])}
            bg={useColorModeValue('green.400', 'gray.700')}
            _hover={{ bg: 'yellow.400', color: 'gray.900' }}
            position={'absolute'}
            top={'0'}
            right={'0'}
            rounded={'17px'}
            isLoading={loading}
            loadingText={t`Subscribing...`}
          >
            <Trans>Subscribe</Trans>
          </Button>
        </Box>
        {status === 'SUCCESS' && (
          <Text mt={2} color={'green.500'} fontSize={'sm'}>
            <Trans>Thank you for subscribing!</Trans>
          </Text>
        )}
        {status === 'ERROR' && (
          <Text mt={2} color={'red.500'} fontSize={'sm'}>
            <Trans>Subscription failed. Please try again.</Trans>
          </Text>
        )}
      </form>
    </Box>
  )
}

export default HeaderForm
