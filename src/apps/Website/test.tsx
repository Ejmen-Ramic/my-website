import { Button, Input, VStack, Text, Select, HStack } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

interface FoodProps {
  id: number;
  name: string;
  calories: number;
}

const food: FoodProps[] = [
  { id: 1, name: 'Meat', calories: 100 },
  { id: 2, name: 'Dairy', calories: 130 },
  { id: 3, name: 'Chocolate', calories: 50 },
  { id: 4, name: 'Fruit', calories: 20 },
  { id: 5, name: 'Bread', calories: 300 },
];

const Test: FC = () => {
  const [foodStat, setFoodStat] = useState<FoodProps[]>([]);

  const calorieCalculator = useMemo(
    () => foodStat.reduce((total, item) => total + item.calories, 0),
    [foodStat],
  );

  const handleAddFood = (food: FoodProps) => {
    setFoodStat([...foodStat, food]);
  };
  return (
    <VStack>
      {food.map((item) => (
        <HStack key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.calories}</Text>
          <Button onClick={() => handleAddFood(item)}>Add</Button>
        </HStack>
      ))}
      <Text>{calorieCalculator}</Text>
    </VStack>
  );
};

export default Test;
