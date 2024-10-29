import { createSystem, defaultConfig } from '@chakra-ui/react';
import ScrollBar from './shared/components/ScrollBar/ScrollBar';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

export const system = createSystem(defaultConfig, {
  conditions: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  theme: {
    ...ScrollBar,
    breakpoints,
  },
});
