import { FC, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Icon } from '@chakra-ui/react';
import { LuLightbulb, LuLightbulbOff } from 'react-icons/lu';

const ThemeIcon: FC = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <>
      <Icon>{!isLight ? <LuLightbulb /> : <LuLightbulbOff />}</Icon>
    </>
  );
};

export default ThemeIcon;
