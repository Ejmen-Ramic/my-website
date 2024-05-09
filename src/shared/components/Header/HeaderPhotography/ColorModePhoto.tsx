import { Button, ButtonProps, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

const ColorMode = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    /**
     * Note: Usually, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Button
        bg={useColorModeValue('#979191', '#FFFFFF14')}
        color={'white'}
        _hover={{ bgColor: useColorModeValue('#817e7e', 'gray.600') }}
        aria-label={'Toggle Color Mode'}
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w={'fit-content'}
        {...props}
      >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  )
}

export default ColorMode
