import { extendTheme } from '@chakra-ui/react'

const ScrollBar = extendTheme({
  styles: {
    global: {
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: '#F1F1F1',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
      },
    },
  },
})

export default ScrollBar
