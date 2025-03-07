import { Box } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { colors } from '../Hooks/color'
import { keyframes } from '@emotion/react'
import { FC } from 'react'

const circle = keyframes`
  0% {
    transform: rotate(0deg) translate(-50px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-50px) rotate(-360deg);
  }
`

const WhatsappIcon: FC = () => {
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      bg={colors.black}
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      position={'relative'}
    >
      <Box
        width={'100px'}
        height={'100px'}
        borderWidth={'1px'}
        borderColor={'#25D366'}
        bgColor={'#25D366'}
        borderRadius={'50%'}
        position={'absolute'}
        top={'60%'}
        right={'-50px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <FaWhatsapp
          size={'30px'}
          color={colors.white}
          style={{ marginRight: '35px' }}
        />
        <Box
          width={'30px'}
          height={'30px'}
          bg={'#25D366'}
          borderRadius={'50%'}
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin={'auto'}
          animation={`${circle} 6s linear infinite`}
        />
      </Box>
    </Box>
  )
}

export default WhatsappIcon
