import { Stack, Text } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeDisplay: FC = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <Stack>
      <Text color={!isLight ? 'green' : 'red'}>
        {!isLight ? 'Turn On' : 'Turn Off'}
      </Text>
    </Stack>
  );
};
export default ThemeDisplay;
