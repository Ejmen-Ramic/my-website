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
];

const Test: FC = () => {
  const [setsInput, setSetsInput] = useState(0);
  const [repsInput, setRepsInput] = useState(0);
  const [workout, setWorkout] = useState<WorkoutProps[]>([]);

  const handleAddWorkout = (exercise: WorkoutProps) => {
    if (setsInput === 0 || repsInput === 0) return;
    const newWorkout = {
      id: Date.now(),
      title: exercise.title,
      sets: setsInput,
      reps: repsInput,
    };
    setWorkout([...workout, newWorkout]);
    setSetsInput(0);
    setRepsInput(0);
  };

  const handleRemoveAll = () => {
    setWorkout([]);
  };
  const handleRemoveWorkout = (id: number) => {
    setWorkout(workout.filter((item) => item.id !== id));
  };

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
            <VStack key={item.id}>
              <Text>{item.title}</Text>
              <Input
                type='number'
                placeholder='type reps'
                value={repsInput}
                onChange={(e) => setRepsInput(Number(e.target.value))}
              />
              <Input
                type='number'
                placeholder='type sets'
                value={setsInput}
                onChange={(e) => setSetsInput(Number(e.target.value))}
              />
              <Button onClick={() => handleAddWorkout(item)}>
                Add Workout
              </Button>
            </VStack>
          ))}
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          {workout.map((item) => (
            <HStack key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.reps}</Text>
              <Text>{item.sets}</Text>

              <Button onClick={() => handleRemoveWorkout(item.id)}>
                Remove Workout
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
