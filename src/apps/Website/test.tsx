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

  const handleAddIngredient = () => {
    if (inputIngredients === '') return;
    setIngredientsList([...ingredientsList, inputIngredients]);
    setInputIngredients('');
  };

  const handleAddRecipe = () => {
    if (inputRecipe === '') return;
    const newRecipe = {
      id: Date.now(),
      name: inputRecipe,
      ingredients: ingredientsList,
    };
    setRecipe([...recipe, newRecipe]);
    setIngredientsList([]);
    setInputRecipe('');
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
        <VStack alignItems={'start'}>
          <HStack>
            <Input
              value={inputRecipe}
              onChange={(e) => setInputRecipe(e.target.value)}
              placeholder={'add recipe'}
            />
            <Button onClick={handleAddRecipe}>Save</Button>
          </HStack>
          <HStack>
            <Input
              value={inputIngredients}
              onChange={(e) => setInputIngredients(e.target.value)}
              placeholder={'add ingredients'}
            />
            <Button onClick={handleAddIngredient}>Add</Button>
            <Button onClick={handleDeleteAll}>R All</Button>
          </HStack>
        </VStack>
        <VStack>
          {recipe.map((item) => (
            <HStack key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.ingredients.join(', ')}</Text>

              <Button onClick={() => handleRemoveRecipe(item.id)}>R</Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
