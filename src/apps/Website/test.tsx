import { Button, Text, VStack } from '@chakra-ui/react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Test = ({ label, onClick }: ButtonProps) => {
  return (
    <VStack>
      <Button onClick={onClick}>{label}</Button>
      <Text></Text>
    </VStack>
  );
};

export default Test;
