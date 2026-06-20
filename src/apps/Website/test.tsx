import {
  Button,
  Input,
  VStack,
  Text,
  Select,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

interface TaskProps {
  id: number;
  title: string;
  completion: boolean;
}

const Test: FC = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [status, setStatus] = useState<'all' | 'active' | 'completed'>('all');

  const handleAddTask = () => {
    if (taskInput === '') return;
    const newTask = { id: Date.now(), title: taskInput, completion: false };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };
  const handleToggle = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completion: !task.completion };
        }
        return task;
      }),
    );
  };

  let filteredTasks = tasks;
  if (status === 'active') {
    filteredTasks = tasks.filter((task) => !task.completion);
  } else if (status === 'completed') {
    filteredTasks = tasks.filter((task) => task.completion);
  }

  const handleRemoveAll = () => {
    setTasks([]);
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <VStack w={'full'} alignContent={'center'} mt={'300px'}>
      <VStack
        w={'full'}
        maxW={'700px'}
        gap={'30px'}
        border={'1px'}
        borderColor={'gray'}
        borderRadius={'10px'}
        alignItems={'center'}
        p={'35px'}
      >
        <HStack w={'full'} maxW={'500px'} justifyContent={'space-between'}>
          <Input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <HStack>
            <Button px={'10px'} onClick={handleAddTask}>
              Add
            </Button>
            <Button px={'10px'} onClick={handleRemoveAll}>
              Remove All
            </Button>
          </HStack>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          <HStack>
            <Button onClick={() => setStatus('all')}>All</Button>
            <Button onClick={() => setStatus('active')}>Active</Button>
            <Button onClick={() => setStatus('completed')}>Completed</Button>
          </HStack>

          {filteredTasks.map((item) => (
            <HStack w={'full'} justifyContent={'space-between'} key={item.id}>
              <Button onClick={() => handleToggle(item.id)}>T</Button>

              <Text>
                {item.completion === true ? 'Completed' : 'Not Completed'}
              </Text>
              <Text>{item.title}</Text>

              <Button onClick={() => handleRemoveTask(item.id)}>
                Remove Item
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
