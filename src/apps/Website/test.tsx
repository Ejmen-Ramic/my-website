import {
  Button,
  FormLabel,
  HStack,
  Input,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { isatty } from 'tty';

const Test: FC = () => {
  const [age, setAge] = useState<number>(0);
  const [hasTicket, setHasTicket] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean | null>(null);
  // const handleCheckAccess = () => {
  //   const accessGranted = isAdmin || (age >= 21 && hasTicket);
  //   setCanEnter(accessGranted);
  // };

  const handleCheckAccess = () => {
    const accessGranted = isAdmin || (age >= 21 && hasTicket);
    setCanEnter(accessGranted);
  };

  const handleRest = () => {
    setAge(0);
    setHasTicket(false);
    setIsAdmin(false);
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
      <Input value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <Switch
        isChecked={hasTicket}
        onChange={(e) => setHasTicket(e.target.checked)}
      />
      <Switch
        isChecked={isAdmin}
        onChange={(e) => setIsAdmin(e.target.checked)}
      />
      <Button onClick={handleCheckAccess}>Check Result</Button>
      {canEnter !== null && <Text>{canEnter ? 'Yes' : 'No'}</Text>}

      <Button onClick={handleRest} color={'red'}>
        Resett
      </Button>
    </Stack>
  );
};

export default Test;
