import { createSystem, defaultConfig } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const initialColorMode = 'system';
const useSystemColorMode = true;

export const system = createSystem(defaultConfig, {
  conditions: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  theme: {
    breakpoints,
  },
});
