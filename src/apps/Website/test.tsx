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

interface ExpenseProps {
  id: number;
  amount: number;
  description: string;
  type: 'income' | 'expense';
}

const Test: FC = () => {
  const [transactionList, setTransactionList] = useState<ExpenseProps[]>([]);
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [inputAmount, setInputAmount] = useState(0);
  const [inputDescription, setInputDescription] = useState('');

  const handleResetAll = () => {
    setTransactionList([]);
  };

  const handleResetItem = (id: number) => {
    setTransactionList(transactionList.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    if (inputAmount === 0 || inputDescription === '') return;
    const newItem = {
      id: Date.now(),
      amount: inputAmount,
      description: inputDescription,
      type: type,
    };
    setTransactionList([...transactionList, newItem]);
    setInputAmount(0);
    setInputDescription('');
  };

  const totalBalance = useMemo(() => {
    return transactionList.reduce((total, amount) => {
      if (amount.type === 'income') {
        return total + amount.amount;
      } else {
        return total - amount.amount;
      }
    }, 0);
  }, [transactionList]);

  const totalIncome = useMemo(() => {
    return transactionList.reduce((total, amount) => {
      if (amount.type === 'income') {
        return total + amount.amount;
      } else {
        return total;
      }
    }, 0);
  }, [transactionList]);

  const totalExpense = useMemo(() => {
    return transactionList.reduce((total, amount) => {
      if (amount.type === 'expense') {
        return total + amount.amount;
      } else {
        return total;
      }
    }, 0);
  }, [transactionList]);

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
        <HStack>
          <Input
            type={'number'}
            value={inputAmount}
            onChange={(e) => setInputAmount(Number(e.target.value))}
          />
          <Input
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={handleResetAll}>Reset</Button>
        </HStack>
        {transactionList.map((item) => (
          <VStack key={item.id}>
            <HStack>
              <Text>{item.description}</Text>
              <Text>{item.amount}</Text>

              <Button onClick={() => handleResetItem(item.id)}>D</Button>
            </HStack>
          </VStack>
        ))}
        <Text>Income: {totalIncome}</Text>
        <Text>Expense: {totalExpense}</Text>
        <Text>Balance: {totalBalance}</Text>
      </VStack>
    </VStack>
  );
};

export default Test;
