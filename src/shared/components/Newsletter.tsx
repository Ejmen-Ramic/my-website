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
import emailjs from '@emailjs/browser';

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID!,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID!,
        {
          email,
          to_email: email, // This will be used in the EmailJS template
          // You can add more template variables here
        },
        process.env.GATSBY_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('SUCCESS');
        setEmail(''); // Clear the input after successful subscription
      } else {
        setStatus('ERROR');
        Sentry.captureMessage('Error subscribing to newsletter', {
          extra: {
            status: response.status,
            text: response.text,
          },
        });
      }
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
            type='email' // Add email type for better validation
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
