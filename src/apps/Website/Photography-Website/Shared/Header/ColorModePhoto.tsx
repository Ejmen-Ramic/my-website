import {
  Button,
  ButtonProps,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
import { colors } from '../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const ColorMode:FC = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    /**
     * Note: Usually, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Button
        bg={useColorModeValue('#979191', `${colors.white}14`)}
        color={colors.white}
        _hover={{
          bgColor: useColorModeValue(colors.primary[200], colors.gray[600]),
        }}
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
