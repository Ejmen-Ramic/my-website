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
import { FC, useMemo, useState } from 'react';

interface MovieProps {
  id: number;
  title: string;
  completion: boolean;
}

const Test: FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [addMovies, setAddMovies] = useState('');
  const [status, setStatus] = useState<'all' | 'watched' | 'not watched'>(
    'all',
  );

  const handleResetAll = () => {
    setMovies([]);
  };

  const handleRemoveMovie = (id: number) => {
    setMovies(movies.filter((item) => item.id !== id));
  };

  const handleAddMovie = () => {
    if (addMovies === '') return;
    const newItem = { id: Date.now(), title: addMovies, completion: false };
    setMovies([...movies, newItem]);
    setAddMovies('');
  };

  const handleToggle = (id: number) => {
    setMovies(
      movies.map((item) => {
        if (item.id === id) {
          return { ...item, completion: !item.completion };
        }
        return item;
      }),
    );
  };

  let filteredMovies = movies;
  if (status === 'not watched') {
    filteredMovies = movies.filter((item) => !item.completion);
  } else if (status === 'watched') {
    filteredMovies = movies.filter((item) => item.completion);
  }

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
        <Button onClick={handleResetAll}> Remove All</Button>
        <HStack w={'full'} maxW={'500px'} justifyContent={'space-between'}>
          <Input
            value={addMovies}
            onChange={(e) => setAddMovies(e.target.value)}
          />
          <Button onClick={handleAddMovie}>Add Task</Button>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          <Select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as 'all' | 'watched' | 'not watched')
            }
          >
            <option value={''}>Select Status</option>
            <option value={'all'}>All</option>
            <option value={'watched'}>Watched</option>
            <option value={'not watched'}>Not Watched</option>
          </Select>
          <HStack>
            {filteredMovies.map((item) => (
              <HStack key={item.id}>
                <VStack>
                  <Button onClick={() => handleToggle(item.id)}>T</Button>
                  <Text color={item.completion ? 'red' : 'green'}>
                    {item.completion ? 'Not Completed' : 'Completed'}
                  </Text>
                  <Text>{item.title}</Text>
                  <Button onClick={() => handleRemoveMovie(item.id)}>
                    Remove Movie
                  </Button>
                </VStack>
              </HStack>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
