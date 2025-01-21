import {
  Button,
  ButtonProps,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

const ColorMode = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Button
        bg={useColorModeValue('gray.300', '#FFFFFF14')}
        aria-label={'Toggle Color Mode'}
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w={'fit-content'}
        {...props}
        data-testid={'color-mode-toggle'}
      >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  )
}

export default ColorMode
