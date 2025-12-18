import { Input, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: '',
  });

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress({
      ...address,
      [name]: value,
    });
  };

  return (
    <VStack>
      <Input
        name={'street'}
        placeholder={'Type street'}
        value={address.street}
        onChange={handleAddress}
      />
      <Input
        name={'city'}
        placeholder={'Type city'}
        value={address.city}
        onChange={handleAddress}
      />
      <Input
        name={'zip'}
        placeholder={'Type zip'}
        value={address.zip}
        onChange={handleAddress}
      />

      <Text></Text>
    </VStack>
  );
};

export default Test;
