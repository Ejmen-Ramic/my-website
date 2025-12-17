import { Box, Button, Text } from '@chakra-ui/react';
import { FC } from 'react';

type User = {
  name: string;
  age: number;
};

type TestProps = {
  users: User[];
};
const Test: FC<TestProps> = ({ users }) => {
  return (
    <Box>
      {users.map((user, index) => (
        <Text p='4' border='1px solid black' key={index}>
          Names: {user.name} | Ages: {user.age}
        </Text>
      ))}
    </Box>
  );
};

export default Test;
