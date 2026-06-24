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

interface WorkoutProps {
  id: number;
  title: string;
  sets: number;
  reps: number;
}
const workoutPlan: WorkoutProps[] = [
  { id: 1, title: 'Push Ups', sets: 0, reps: 0 },
  { id: 2, title: 'Squats', sets: 0, reps: 0 },
  { id: 3, title: 'Pull Ups', sets: 0, reps: 0 },
  { id: 4, title: 'Lunges', sets: 0, reps: 0 },
  { id: 5, title: 'Bench Press', sets: 0, reps: 0 },
];

const Test: FC = () => {
  const [workout, setWorkout] = useState<WorkoutProps[]>([]);

  const handleAddWorkout = (exercise: WorkoutProps) => {
    const existing = workout.find((muscle) => muscle.id === exercise.id);
    if (existing) {
      setWorkout(
        workout.map((item) => {
          if (item.id === exercise.id) {
            return { ...item, sets: item.sets + 1, reps: item.reps + 1 };
          }
          return item;
        }),
      );
    } else {
      setWorkout([...workout, { ...exercise, sets: 1, reps: 1 }]);
    }
  };

  const handleRemoveAll = () => {
    setWorkout([]);
  };
  const handleRemoveWorkout = (id: number) => {
    setWorkout(workout.filter((exercise) => exercise.id !== id));
  };

  const totalSets = useMemo(() => {
    return workout.reduce((total, workout) => total + workout.sets, 0);
  }, [workout]);

  const totalReps = useMemo(() => {
    return workout.reduce((total, workout) => total + workout.reps, 0);
  }, [workout]);

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
          {workoutPlan.map((item) => (
            <HStack key={item.id}>
              <Text>{item.title}</Text>
              <Button onClick={() => handleAddWorkout(item)}>C</Button>
            </HStack>
          ))}
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          {workout.map((item) => (
            <HStack key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.reps}</Text>
              <Text>{item.sets}</Text>
              <Button onClick={() => handleRemoveWorkout(item.id)}>
                Remove workout
              </Button>
            </HStack>
          ))}
          <Text>{totalReps}</Text>
          <Text>{totalSets}</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
