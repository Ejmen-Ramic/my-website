import {
  Button,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

const Test = () => {
  const [addItem, setAddItem] = useState<string>('');
  const [addItems, setAddItems] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    if (addItem.trim() === '') return;
    if (editingIndex !== null) {
      const updateTasks = [...addItems];
      updateTasks[editingIndex] = addItem;
      setAddItems(updateTasks);
      setEditingIndex(null);
    } else {
      setAddItems([...addItems, addItem]);
    }
    setAddItem('');
  };

  const handleDeleteItem = (indexToDelete: number) => {
    const deleteItem = addItems.filter((_, index) => index !== indexToDelete);
    setAddItems(deleteItem);
  };

  const handleEditTask = (index: number) => {
    setAddItem(addItems[index]);
    setEditingIndex(index);
  };

  const handleClearAll = () => {
    setAddItems([]);
  };

  return (
    <Stack
      w='full'
      h='100vh'
      alignItems='center'
      justifyContent='center'
      gap={3}
    >
      <Input
        placeholder={'type shopping item'}
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <HStack>
        <Button onClick={handleAddItem}>
          {editingIndex !== null ? 'Update Task' : 'Add Task'}
        </Button>
        <Button colorScheme='red' onClick={handleClearAll}>
          Clear Alla
        </Button>
      </HStack>
      <Text>Amount of movies added: {addItems.length} </Text>

      {addItems.map((item, index) => (
        <HStack key={index} gap={10}>
          <Text w={'auto'} h={'50px'} p={'10px'} color={'white'}>
            {item}
          </Text>
          <IconButton
            aria-label='Edit'
            icon={<FaEdit />}
            onClick={() => handleEditTask(index)}
          />
          <IconButton
            aria-label='delete item'
            icon={<FaRegTrashAlt />}
            onClick={() => handleDeleteItem(index)}
          />
        </HStack>
      ))}
    </Stack>
  );
};

export default Test;
