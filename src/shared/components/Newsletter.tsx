import React, { useState } from 'react';
import {
  Stack,
  Input,
  IconButton,
  useColorModeValue,
  Box,
  Text,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import * as Sentry from '@sentry/browser';
import { colors } from './Hooks/color';
import FadeInView from './Hooks/FadeInView';

type Status = 'IDLE' | 'SUCCESS' | 'ERROR';

interface SubscribeResponse {
  message: string;
  data?: any;
  error?: string;
  [key: string]: any;
}

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<Status>('IDLE');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: SubscribeResponse = await response.json();

      if (response.ok) {
        setStatus('SUCCESS');
        setEmail(''); // Clear the input after successful subscription
      } else {
        setStatus('ERROR');
        Sentry.captureMessage('Error subscribing to newsletter', {
          extra: {
            message: data.message,
            error: data.error,
            data: data.data,
          },
        });
      }
    } catch (err) {
      setStatus('ERROR');
      console.error(err);
      Sentry.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeInView delay={0.1}>
      <Box as='form' onSubmit={handleSubmit}>
        <Stack direction={'row'}>
          <Input
            placeholder='Your email address'
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            border={0}
            _focus={{
              bg: 'whiteAlpha.300',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
          />
          <IconButton
            type='submit'
            bg={useColorModeValue('green.400', 'green.800')}
            color={useColorModeValue(colors.white, 'gray.800')}
            _hover={{
              bg: 'green.600',
            }}
            aria-label='Subscribe'
            icon={<BiMailSend />}
            isLoading={loading}
          />
        </Stack>
        {status === 'SUCCESS' && (
          <Text mt={2} color='green.500'>
            Subscription successful!
          </Text>
        )}
        {status === 'ERROR' && (
          <Text mt={2} color='red.500'>
            Subscription failed. Please try again.
          </Text>
        )}
      </Box>
    </FadeInView>
  );
};

export default SubscribeForm;
