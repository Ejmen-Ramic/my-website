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

const people = ['Alice', 'Bob', 'Charlie', 'Diana'];

interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  paidBy: string;
}

const Test: FC = () => {
  const [inputDescription, setInputDescription] = useState('');
  const [inputAmount, setInputAmount] = useState(0);
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);
  const [paidBy, setPaidBy] = useState('');

  const handleAddExpense = () => {
    if (inputDescription === '' || paidBy === '') return;
    const existing = {
      id: Date.now(),
      description: inputDescription,
      amount: inputAmount,
      paidBy: paidBy,
    };
    setExpenses([...expenses, existing]);
    setInputAmount(0);
    setPaidBy('');
    setInputDescription('');
  };

  const handleRemoveAll = () => {
    setExpenses([]);
  };

  const handleRemoveItem = (id: number) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const totalExpense = useMemo(() => {
    return expenses.reduce((total, item) => total + item.amount, 0);
  }, [expenses]);

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
          <Input
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
          <Input
            type={'number'}
            value={inputAmount}
            onChange={(e) => setInputAmount(Number(e.target.value))}
          />
          <Select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
            <option value={''}>Select person</option>
            {people.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </Select>
          <Button onClick={handleAddExpense}>Add Expense</Button>
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          <HStack gap={'30px'}>
            {expenses.map((item) => (
              <VStack key={item.id}>
                <Text>Amount: {item.amount}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Paid by: {item.paidBy}</Text>
                <Button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
