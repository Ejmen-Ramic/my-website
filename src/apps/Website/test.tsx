import {
  Button,
  FormLabel,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { set } from 'date-fns';
import { FC, useState } from 'react';
import { isatty } from 'tty';

const Test: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [canEnter, setCanEnter] = useState<boolean | null>(null);
  const correctCredentials = () => {
    const accessGranted = username === 'Ejmen' && password === '12345';
    setCanEnter(accessGranted);
  };
  const hardReset = () => {
    setUsername('');
    setPassword('');
    setCanEnter(null);
  };
  return (
    <Stack
      w={'full'}
      h={'100vh'}
      gap={'10px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Input
        type={'text'}
        placeholder={'Username'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder={'Password'}
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={correctCredentials}>Login</Button>
      {canEnter === true && <Text>Access Granted</Text>}
      {canEnter === false && <Text>Accesss Denied</Text>}
      <Button onClick={hardReset}>Reset</Button>
    </Stack>
  );
};

export default Test;
