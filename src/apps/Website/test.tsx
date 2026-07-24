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
import { interval } from 'date-fns';
import { FC, useEffect, useMemo, useState } from 'react';
import useTimer from './useTimer';

interface Props {
  id: number;
  name: string;
  quantity: number;
}

const Test: FC = () => {
  const [item, setItem] = useState<Props[]>([]);
  const [inputItem, setInputItem] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleResetAll = () => setItem([]);

  const handleRemove = (id: number) => {
    setItem(item.filter((items) => items.id !== id));
  };

  const handleAddItem = () => {
    if (inputItem === '') return;
    const newItem = { id: Date.now(), name: inputItem, quantity: quantity };
    setItem([...item, newItem]);
    setInputItem('');
  };

  const handleUpdateName = (id: number) => {
    setItem(
      item.map((items) =>
        items.id === id ? { ...items, name: editName } : items,
      ),
    );
    setEditingId(null);
    setEditName('');
  };

  const totalQuantity = useMemo(() => {
    return item.reduce((total, items) => total + items.quantity, 0);
  }, [item]);

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
        <HStack>
          <Text>Q: {totalQuantity}</Text>

          <Input
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <Button onClick={handleAddItem}>Add</Button>
          <Button onClick={handleResetAll}>Reset</Button>
        </HStack>
        {item.map((item) => (
          <HStack key={item.id}>
            {editingId === item.id ? (
              <>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  width='200px'
                />
                <Button onClick={() => handleUpdateName(item.id)}>Save</Button>
                <Button
                  onClick={() => {
                    setEditingId(null);
                    setEditName('');
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Text>{item.name}</Text>
                <Button
                  onClick={() => {
                    setEditingId(item.id);
                    setEditName(item.name);
                  }}
                >
                  Edit
                </Button>
              </>
            )}
            <Button onClick={() => handleRemove(item.id)}>R</Button>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Test;
