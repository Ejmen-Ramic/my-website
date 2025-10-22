import {
  Button,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Test = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTasks = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (indexToDelete: number) => {
    const filteredTask = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(filteredTask);
  };
  return (
    <Stack
      w='full'
      h='100vh'
      alignItems='center'
      justifyContent='center'
      gap={3}
    >
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      <Button onClick={addTasks}>Add Task</Button>
      {tasks.length === 0 ? (
        <Text color='gray.500' textAlign='center'>
          No tasks added yet
        </Text>
      ) : (
        tasks.map((item, index) => (
          <HStack>
            <Text
              key={index}
              p={2}
              borderWidth='1px'
              borderRadius='md'
              bg='gray.700'
              color='white'
            >
              {item}
            </Text>
            <IconButton
              aria-label={'Delete'}
              icon={<FaRegTrashAlt />}
              onClick={() => deleteTask(index)}
            />
          </HStack>
        ))
      )}
    </Stack>
  );
};

export default Test;
