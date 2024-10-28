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

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  const SUBSCRIBE_URL = `subscribe API URL, we will describe it in a sec`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = JSON.stringify({
      email,
      api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_API_KEY,
    });

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (json?.subscription?.id) {
        setStatus('SUCCESS');
        return;
      }

      setStatus('ERROR');
      Sentry.captureMessage('Error subscribing to newsletter', {
        extra: json,
      });
    } catch (err) {
      setStatus('ERROR');
      console.error(err);
      Sentry.captureException(err);
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
          />
          <IconButton
            type='submit'
            bg={useColorModeValue('green.400', 'green.800')}
            color={useColorModeValue(colors.white, 'gray.800')}
            _hover={{
              bg: 'green.600',
            }}
            aria-label='Subscribe'
          >
            <BiMailSend />
          </IconButton>
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
