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
import { FC, useEffect, useMemo, useState } from 'react';

const Test: FC = () => {
  const [goal, setGoal] = useState(0);
  const [contribution, setContribution] = useState<number[]>([]);
  const [contributionInput, setContributionInput] = useState(0);

  const handleRemoveAll = () => {
    setContribution([]);
    setGoal(0);
    setContributionInput(0);
  };

  const handleAddContribution = () => {
    if (contributionInput === 0) return;
    setContribution([...contribution, contributionInput]);
    setContributionInput(0);
  };

  const totalSaved = useMemo(() => {
    return contribution.reduce((total, item) => total + item, 0);
  }, [contribution]);

  const progress = useMemo(() => {
    if (goal === 0) return 0;
    return (totalSaved / goal) * 100;
  }, [totalSaved, goal]);

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
        <VStack w={'full'} maxW={'400px'}>
          <Input
            value={contributionInput}
            onChange={(e) => setContributionInput(Number(e.target.value))}
          />
          <Input
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
          <Button onClick={handleAddContribution}>Add Contribution</Button>
          <Text>{progress}% complete</Text>
          <Text>Total Saved: {totalSaved}</Text>
          <Button onClick={handleRemoveAll}>Reset</Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
