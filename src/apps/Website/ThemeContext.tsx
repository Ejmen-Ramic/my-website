import { VStack, Button, Text } from '@chakra-ui/react';
import { createContext, FC, useContext, useState } from 'react';

export const ThemeContext = createContext<{
  isLight: boolean;
  setIsLight: (value: boolean) => void;
}>(null!);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
