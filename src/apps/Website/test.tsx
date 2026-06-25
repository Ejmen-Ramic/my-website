import {
  Button,
  Input,
  VStack,
  Text,
  Select,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { title } from 'process';
import { FC, useMemo, useState } from 'react';

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const Test: FC = () => {
  const [tasks, setTasks] = useState<Props[]>([]);
  const [addTask, setAddTask] = useState('');

  const handleRemoveAll = () => {
    setTasks([]);
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    const newItem = { id: Date.now(), title: addTask, completed: false };
    setTasks([...tasks, newItem]);
    setAddTask('');
  };

  const handleToggle = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completedCount = tasks.filter((task) => task.completed).length;
    return (completedCount / tasks.length) * 100;
  }, [tasks]);

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
          <Input value={addTask} onChange={(e) => setAddTask(e.target.value)} />
          <Button onClick={handleAddTask}>Add Task</Button>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          {tasks.map((task) => (
            <HStack gap={'30px'} key={task.id}>
              <Button onClick={() => handleToggle(task.id)}>T</Button>
              <Text color={task.completed ? 'Green' : 'Red'}>
                {task.completed ? 'Completed' : 'Not Completed'}
              </Text>
              <Text>{task.title}</Text>
              <Button onClick={() => handleRemoveTask(task.id)}>
                Remove Task
              </Button>
            </HStack>
          ))}
          <Text>{completionRate}%</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
