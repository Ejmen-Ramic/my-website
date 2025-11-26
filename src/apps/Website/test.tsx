import { Box, VStack, Text } from '@chakra-ui/react';
import { todo } from 'node:test';
import { FC } from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoListProp = {
  todos: Todo[];
};

const TodoList: FC<TodoListProp> = ({ todos }) => {
  return (
    <VStack align={'start'}>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <Text>
            {todo.text} - {todo.done ? 'Done' : 'Pending'}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;
