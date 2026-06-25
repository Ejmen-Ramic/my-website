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

interface MovieProps {
  id: number;
  title: string;
  watched: boolean;
}

const Test: FC = () => {
  const [watchedMovie, setWatchedMovie] = useState('');
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [status, setStatus] = useState<'all' | 'watched' | 'not watched'>(
    'all',
  );

  const handleResetAll = () => {
    setMovies([]);
  };

  const handleRemoveMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleAddMovie = () => {
    if (watchedMovie === '') return;
    const newMovie = { id: Date.now(), title: watchedMovie, watched: false };
    setMovies([...movies, newMovie]);
    setWatchedMovie('');
  };

  const handleToggle = (id: number) => {
    setMovies(
      movies.map((item) => {
        if (item.id === id) {
          return { ...item, watched: !item.watched };
        }
        return item;
      }),
    );
  };

  let filteredMovies = movies;
  if (status === 'not watched') {
    filteredMovies = movies.filter((item) => !item.watched);
  } else if (status === 'watched') {
    filteredMovies = movies.filter((item) => item.watched);
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
            value={watchedMovie}
            onChange={(e) => setWatchedMovie(e.target.value)}
          />
          <Button onClick={handleAddMovie}>Add Task</Button>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          <HStack>
            <Select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as 'all' | 'watched' | 'not watched')
              }
            >
              <option value={''}>Select Status</option>
              <option value={status} onChange={() => setStatus('all')}>
                All
              </option>
              <option value={status} onChange={() => setStatus('watched')}>
                Watched
              </option>
              <option value={status} onChange={() => setStatus('not watched')}>
                Not Watched{' '}
              </option>
            </Select>
          </HStack>
          {filteredMovies.map((item) => (
            <HStack key={item.id}>
              <Button onClick={() => handleToggle(item.id)}>T</Button>
              <Text color={item.watched ? 'green' : 'red'}>
                {item.watched ? 'Completed' : 'Not Completed'}
              </Text>
              <Text>{item.title}</Text>
              <Button onClick={() => handleRemoveMovie(item.id)}>
                Remove Movie
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;

// A movie watchlist — add movies, mark as watched, filter by watched/unwatched
