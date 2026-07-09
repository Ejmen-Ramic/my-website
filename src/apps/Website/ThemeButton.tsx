import { Select } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeButton: FC = () => {
  const { isLanguage, setIsLanguage } = useContext(ThemeContext);
  return (
    <>
      <Select
        value={isLanguage}
        onChange={(e) => setIsLanguage(e.target.value)}
      >
        <option value={'English'}>English</option>
        <option value={'Bosnian'}>Bosnian</option>
        <option value={'Chinese'}>Chinese</option>
      </Select>
    </>
  );
};

export default ThemeButton;
