import {
  Button,
  Input,
  VStack,
  Text,
  Select,
  HStack,
  Stack,
  filter,
} from '@chakra-ui/react';
import { stat } from 'fs';
import { FC, useEffect, useMemo, useState } from 'react';

interface ContactsProps {
  id: number;
  name: string;
  phoneNumber: number;
}

const Test: FC = () => {
  const [contacts, setContacts] = useState<ContactsProps[]>([]);
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const handleRemoveAll = () => {
    setContacts([]);
  };
  const handleRemoveContact = (id: number) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  const handleAddContact = () => {
    if (inputName === '' || inputNumber === '') return;
    const newContacts = {
      id: Date.now(),
      name: inputName,
      phoneNumber: Number(inputNumber),
    };
    setContacts([...contacts, newContacts]);
    setInputName('');
    setInputNumber('');
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(activeSearch.toLowerCase()),
    );
  }, [activeSearch, contacts]);

  return (
    <VStack w={'full'} alignContent={'center'} mt={'300px'}>
      <VStack
        w={'full'}
        maxW={'800px'}
        gap={'30px'}
        border={'1px'}
        borderColor={'gray'}
        borderRadius={'10px'}
        alignItems={'center'}
        p={'35px'}
      >
        <Button onClick={handleRemoveAll}> Remove All</Button>
        <HStack w={'full'} maxW={'500px'} justifyContent={'space-between'}>
          <Input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <Input
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            type={'number'}
          />
          <Button onClick={handleAddContact}>Add Contacts</Button>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button onClick={() => setActiveSearch(searchInput)}>S</Button>
          <HStack>
            {filteredContacts.map((item) => (
              <VStack key={item.id}>
                <Text>{item.name}</Text>
                <Text>{item.phoneNumber}</Text>
                <Button onClick={() => handleRemoveContact(item.id)}>T</Button>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
