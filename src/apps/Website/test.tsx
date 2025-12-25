import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  Text,
  Box,
  HStack,
  Switch,
} from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [isOnline, setIsOnline] = useState(false);
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOnline(e.target.checked);
  };

  return (
    <VStack gap={'20px'}>
      <Switch onChange={handleSwitch} color={isOnline ? 'green' : 'red'}>
        {isOnline ? 'Go online' : 'Go offline'}
      </Switch>
      <Text>{isOnline ? 'User is online' : 'User is offline'}</Text>
    </VStack>
  );
};

export default Test;
