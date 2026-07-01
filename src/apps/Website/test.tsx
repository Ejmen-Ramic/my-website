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

interface VoterProps {
  id: number;
  name: string;
  votes: number;
}

const Test: FC = () => {
  const [candidates, setCandidates] = useState<VoterProps[]>([]);
  const [candidateInput, setCandidateInput] = useState('');

  const handleRemoveAll = () => {
    setCandidates([]);
  };

  const handleAddCandidate = () => {
    if (candidateInput === '') return;
    const newVote = { id: Date.now(), name: candidateInput, votes: 0 };
    setCandidates([...candidates, newVote]);
    setCandidateInput('');
  };

  const handleVote = (id: number, type: 'add' | 'remove') => {
    setCandidates(
      candidates.map((candidate) => {
        if (candidate.id === id) {
          return {
            ...candidate,
            votes: type === 'add' ? candidate.votes + 1 : candidate.votes - 1,
          };
        }
        return candidate;
      }),
    );
  };

  const handleRemoveVoter = (id: number) => {
    setCandidates(candidates.filter((item) => item.id !== id));
  };

  const totalVotes = useMemo(() => {
    return candidates.reduce((total, candidate) => total + candidate.votes, 0);
  }, [candidates]);

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
        <VStack w={'full'} maxW={'600px'}>
          <Button onClick={handleRemoveAll}>Remove All Votes</Button>
          <HStack>
            <Input
              value={candidateInput}
              onChange={(e) => setCandidateInput(e.target.value)}
            />
            <Button onClick={handleAddCandidate}>Add Candidate</Button>
          </HStack>
          <HStack>
            {candidates.map((item) => (
              <VStack key={item.id}>
                <HStack>
                  <Text>{item.name}</Text>
                  <Text>Votes: {item.votes}</Text>
                  <Text>
                    {totalVotes === 0
                      ? '0.0'
                      : ((item.votes / totalVotes) * 100).toFixed(1)}
                    %
                  </Text>
                  <Button onClick={() => handleVote(item.id, 'add')}>+</Button>
                  <Button onClick={() => handleVote(item.id, 'remove')}>
                    -
                  </Button>
                  <Button onClick={() => handleRemoveVoter(item.id)}>
                    Remove Voter
                  </Button>
                </HStack>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
