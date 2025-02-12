import { Box, Button, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { colors } from '../../Hooks/color';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
  username: string;
};

const FetchUser: FC = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleFetch = async () => {
    const response = await fetch('https://dummyjson.com/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();

      setUsers(data.users);
      setMessage('');
    } else {
      setMessage('Info is not shown');
    }
  };
  return (
    <Stack w={'full'} alignItems={'center'}>
      <Button onClick={handleFetch}>Fetch Info</Button>
      <Grid templateColumns={'repeat(5, 1fr)'} gap={4}>
        {users.map((user) => (
          <GridItem key={user.id}>
            <Box
              p={'20px'}
              w={'full'}
              color={colors.white}
              borderWidth={'1px'}
              borderColor={colors.black}
            >
              <Text>ID: {user.id}</Text>
              <Text>First Name: {user.firstName}</Text>
              <Text>Last Name: {user.lastName}</Text>
              <Text>Age: {user.age}</Text>
              <Text>Password: {user.password}</Text>
              <Text>Username: {user.username}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Text>{message}</Text>
    </Stack>
  );
};

export default FetchUser;
