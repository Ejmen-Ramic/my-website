import { Button, Stack } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeIcon from './ThemeIcon';

const ThemeButton: FC = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);
  return (
    <Stack>
      <Button onClick={() => setIsLight(!isLight)}>
        {!isLight ? 'On' : 'Off'}
      </Button>
    </Stack>
  );
};
export default ThemeButton;
