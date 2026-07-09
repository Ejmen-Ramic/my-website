import { VStack, Button, Text } from '@chakra-ui/react';
import { Children, createContext, FC, useContext, useState } from 'react';

// export const ThemeContext = createContext<{
//   isLight: boolean;
//   setIsLight: (value: boolean) => void;
// }>(null!);

// export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isLight, setIsLight] = useState(false);
//   return (
//     <ThemeContext.Provider value={{ isLight, setIsLight }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

interface Props {
  id: number;
  language: string;
}

const language: Props[] = [
  { id: 1, language: 'english' },
  { id: 2, language: 'bosnian' },
  { id: 3, language: 'chinese' },
];

export const ThemeContext = createContext<{
  isLanguage: string;
  setIsLanguage: (value: string) => void;
}>(null!);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLanguage, setIsLanguage] = useState('English');
  return (
    <ThemeContext.Provider value={{ isLanguage, setIsLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
