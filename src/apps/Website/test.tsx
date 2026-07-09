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
import { interval } from 'date-fns';
import { stat } from 'fs';
import { FC, useEffect, useMemo, useState } from 'react';

interface CountryProps {
  id: number;
  name: string;
  region: string;
  capital: string;
}

const countries: CountryProps[] = [
  { id: 1, name: 'Japan', region: 'Asia', capital: 'Tokyo' },
  { id: 2, name: 'Brazil', region: 'South America', capital: 'Brasilia' },
  { id: 3, name: 'Germany', region: 'Europe', capital: 'Berlin' },
  { id: 4, name: 'Egypt', region: 'Africa', capital: 'Cairo' },
  { id: 5, name: 'Canada', region: 'North America', capital: 'Ottawa' },
  { id: 6, name: 'Australia', region: 'Oceania', capital: 'Canberra' },
];

const Test: FC = () => {
  const [inputCountry, setInputCountry] = useState('');

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(inputCountry.toLowerCase()),
    );
  }, [inputCountry]);

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
        <Input
          value={inputCountry}
          onChange={(e) => setInputCountry(e.target.value)}
        />
        {inputCountry === '' ? (
          <Text>Search Something</Text>
        ) : filteredCountries.length === 0 ? (
          <Text>Nothing Found</Text>
        ) : (
          filteredCountries.map((item) => (
            <VStack key={item.id}>
              <HStack>
                <Text>{item.name}</Text>
                <Text>{item.capital}</Text>
                <Text>{item.region}</Text>
              </HStack>
            </VStack>
          ))
        )}
      </VStack>
    </VStack>
  );
};

export default Test;
