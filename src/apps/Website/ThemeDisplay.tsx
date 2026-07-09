import { FC, useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { ThemeContext } from './ThemeContext';
const ThemeDisplay: FC = () => {
  const { isLanguage } = useContext(ThemeContext);

  return (
    <>
      <Text>{isLanguage}</Text>
    </>
  );
};

export default ThemeDisplay;
