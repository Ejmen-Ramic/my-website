import {
  Button,
  Checkbox,
  Input,
  Select,
  VStack,
  Text,
  useToast,
  Switch,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Test = () => {
  const form = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribed: false,
    country: '',
  };

  const canSubmit =
    form.firstName.trim() !== '' &&
    form.lastName.trim() !== '' &&
    form.email.includes('@') &&
    form.password.length >= 8 &&
    form.confirmPassword === form.password &&
    form.subscribed &&
    (form.country === 'USA' || form.country === 'Canada');

  return <VStack></VStack>;
};
export default Test;
