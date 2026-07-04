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

interface RecipeProps {
  id: number;
  name: string;
  ingredients: string[];
}

const Test: FC = () => {
  const [recipe, setRecipe] = useState<RecipeProps[]>([]);
  const [inputRecipe, setInputRecipe] = useState('');
  const [inputIngredients, setInputIngredients] = useState('');
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);

  const handleDeleteAll = () => {
    setRecipe([]);
  };
  const handleRemoveRecipe = (id: number) => {
    setRecipe(recipe.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    if (inputRecipe === '' || inputIngredients === '') return;
    const newRecipe = {
      id: Date.now(),
      name: inputRecipe,
      ingredients: [inputIngredients],
    };
    setRecipe([...recipe, newRecipe]);
    setInputRecipe('');
    setInputIngredients('');
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
        <HStack>
          <Input
            value={inputRecipe}
            onChange={(e) => setInputRecipe(e.target.value)}
          />
          <Input
            value={inputIngredients}
            onChange={(e) => setInputIngredients(e.target.value)}
          />
          <Button>Ad</Button>
        </HStack>
        <VStack>
          {recipe.map((item) => (
            <HStack key={item.id}></HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
