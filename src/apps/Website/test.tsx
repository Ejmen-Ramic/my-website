import { VStack, HStack, Input, Button, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

interface TaskProps {
  title: string;
  completion: boolean;
  id: number;
}

const Test: FC = () => {
  const [addTask, setAddTask] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = () => {
    const newItem = { title: addTask, completion: false, id: Date.now() };
    setTasks([...tasks, newItem]);
    setAddTask('');
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

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const [progress, setProgress] = useState<'all' | 'active' | 'completed'>(
    'all',
  );

  let filteredTasks = tasks;
  if (progress === 'active') {
    filteredTasks = tasks.filter((task) => !task.completion);
  } else if (progress === 'completed') {
    filteredTasks = tasks.filter((task) => task.completion);
  }

  return (
    <VStack w={'full'}>
      <VStack>
        <HStack w={'full'}>
          <Input value={addTask} onChange={(e) => setAddTask(e.target.value)} />
          <Button onClick={handleAddTask}>Add Task</Button>
          <Button onClick={handleDeleteAll}>Delete All</Button>
          <HStack w={'full'}>
            <Button onClick={() => setProgress('all')}>All</Button>
            <Button onClick={() => setProgress('active')}>Active</Button>
            <Button onClick={() => setProgress('completed')}>Completed</Button>
          </HStack>
        </HStack>
        {filteredTasks.map((task) => (
          <HStack key={task.id}>
            <Text>{task.title}</Text>
            <Text color={task.completion ? 'green' : 'red'}>
              {task.completion ? 'completed' : 'not completed'}
            </Text>

            <Button onClick={() => handleToggle(task.id)}>Toggle</Button>
            <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Test;
