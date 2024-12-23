import React, { useState } from 'react';
import {
  Stack,
  Input,
  IconButton,
  useColorModeValue,
  Box,
  Text,
  useToast,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import * as Sentry from '@sentry/browser';
import { colors } from '../../Hooks/color';
import FadeInView from '../../Hooks/FadeInView';
import { Trans } from '@lingui/macro';

type Status = 'IDLE' | 'SUCCESS' | 'ERROR';

interface SubscribeResponse {
  message: string;
  data?: any;
  error?: string;
}

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<Status>('IDLE');
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setStatus('IDLE');

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
      );

      const data: SubscribeResponse = await response.json();

      if (response.ok) {
        setStatus('SUCCESS');
        setEmail('');
        toast({
          title: 'Success!',
          description:
            'You have been successfully subscribed to my newsletter.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        setStatus('ERROR');
        toast({
          title: 'Subscription failed',
          description: data.error || 'An error occurred while subscribing.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });

        Sentry.captureMessage('Newsletter subscription failed', {
          extra: {
            email,
            error: data.error,
            response: data,
          },
          level: 'error',
        });
      }
    } catch (err) {
      setStatus('ERROR');
      console.error('Newsletter subscription error:', err);

      toast({
        title: 'Connection Error',
        description:
          'Unable to connect to the subscription service. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      Sentry.captureException(err, {
        extra: {
          email,
          context: 'Newsletter subscription',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const inputBgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const inputFocusBgColor = useColorModeValue(
    'blackAlpha.200',
    'whiteAlpha.200'
  );
  const buttonBgColor = useColorModeValue('green.400', 'green.800');
  const buttonColor = useColorModeValue(colors.white, 'gray.800');
  const buttonHoverBgColor = 'green.600';

  return (
    <FadeInView delay={0.1}>
      <Box
        as={'form'}
        onSubmit={handleSubmit}
        width={'100%'}
        maxWidth={'500px'}
        m={'0 auto'}
        pb={{ base: '60px', md: 0 }}
      >
        <Stack direction={'row'} spacing={2}>
          <Popover trigger={'click'} placement={'top-start'}>
            <PopoverTrigger>
              <Input
                placeholder={'Enter your email address'}
                bg={inputBgColor}
                border={0}
                _focus={{
                  bg: inputFocusBgColor,
                  borderColor: 'green.400',
                  boxShadow: '0 0 0 1px green.400',
                }}
                _hover={{
                  bg: inputFocusBgColor,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                type={'email'}
                aria-label={'Email address'}
                size={'lg'}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Trans>Newsletter Subscription</Trans>
              </PopoverHeader>
              <PopoverBody>
                <Trans>
                  Stay updated with my latest news and updates! By subscribing,
                  you agree to receive my newsletter.
                </Trans>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <IconButton
            type={'submit'}
            bg={buttonBgColor}
            color={buttonColor}
            _hover={{
              bg: buttonHoverBgColor,
            }}
            aria-label={'Subscribe to newsletter'}
            icon={<BiMailSend />}
            isLoading={loading}
            size={'lg'}
          />
        </Stack>

        {status === 'SUCCESS' && (
          <Text mt={2} color={'green.500'} textAlign={'center'} fontSize={'sm'}>
            <Trans>Thank you for subscribing to my newsletter!</Trans>
          </Text>
        )}

        {status === 'ERROR' && (
          <Text mt={2} color={'red.500'} textAlign={'center'} fontSize={'sm'}>
            <Trans>Unable to subscribe. Please try again later.</Trans>
          </Text>
        )}

        <Text
          mt={2}
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={'xs'}
          textAlign={'center'}
        >
          <Trans>
            We respect your privacy and will never share your information.
          </Trans>
        </Text>
      </Box>
    </FadeInView>
  );
};

export default Newsletter;
