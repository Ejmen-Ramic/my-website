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

interface InventoryProps {
  id: number;
  name: string;
  quantity: number;
}

const Test: FC = () => {
  const [inventory, setInventory] = useState<InventoryProps[]>([]);
  const [inputItem, setInputItem] = useState('');

  const handleResetAll = () => {
    setInventory([]);
  };

  const handleRemoveItem = (id: number) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    if (inputItem === '') return;
    const newItem = { id: Date.now(), name: inputItem, quantity: 0 };
    setInventory([...inventory, newItem]);
    setInputItem('');
  };

  const handleUpdateQuantity = (id: number, type: 'add' | 'remove') => {
    setInventory(
      inventory.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: type === 'add' ? item.quantity + 1 : item.quantity - 1,
          };
        }
        return item;
      }),
    );
  };

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
        <VStack w={'full'} maxW={'600px'}>
          <HStack>
            <Input
              value={inputItem}
              onChange={(e) => setInputItem(e.target.value)}
            />
            <Button onClick={handleAddItem}>Add</Button>
            <Button onClick={handleResetAll}>Reset</Button>
          </HStack>
          {inventory.map((item) => (
            <VStack key={item.id}>
              <HStack>
                <Text>{item.name}</Text>
                <Text color={item.quantity < 5 ? 'red' : 'green'}>
                  {' '}
                  Q: {item.quantity}
                </Text>
                <Button onClick={() => handleUpdateQuantity(item.id, 'add')}>
                  +
                </Button>
                <Button onClick={() => handleUpdateQuantity(item.id, 'remove')}>
                  -
                </Button>
                <Button onClick={() => handleRemoveItem(item.id)}>R</Button>
              </HStack>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
