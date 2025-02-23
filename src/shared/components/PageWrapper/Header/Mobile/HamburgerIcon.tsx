import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC } from 'react'

interface HamburgerIconProps {
  isOpen: boolean
  color?: string
  size?: string
}

const MotionBox = motion(Box)

const HamburgerIcon: FC<HamburgerIconProps> = ({
  isOpen,
  color = 'currentColor',
  size = '30px',
}: HamburgerIconProps) => {
  const lineHeight = '2px'
  const transition = { duration: 0.3 }

  return (
    <Box
      h={size}
      w={size}
      position={'relative'}
      cursor={'pointer'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box position={'relative'} w={'24px'} h={'16px'}>
        {/* Top line */}
        <MotionBox
          position={'absolute'}
          top={'0'}
          left={'0'}
          height={lineHeight}
          bg={color}
          transformOrigin={'left center'}
          animate={{
            rotate: isOpen ? -46 : 0,
            width: isOpen ? '10px' : '24px',
            y: isOpen ? '7px' : 0,
            x: isOpen ? '-1px' : 0,
          }}
          transition={transition}
        />

        {/* Middle line */}
        <MotionBox
          position={'absolute'}
          top={'7px'}
          left={'0'}
          height={lineHeight}
          bg={color}
          animate={{
            width: isOpen ? '20px' : '24px',
            x: isOpen ? '-1.5px' : 0,
            borderRadius: isOpen ? '5px 0 0 5px' : '0px',
          }}
          transition={transition}
        />

        {/* Bottom line */}
        <MotionBox
          position={'absolute'}
          bottom={'0'}
          left={'0'}
          height={lineHeight}
          bg={color}
          transformOrigin={'left center'}
          animate={{
            rotate: isOpen ? 46 : 0,
            width: isOpen ? '10px' : '24px',
            y: isOpen ? '-7px' : 0,
            x: isOpen ? '-1px' : 0,
          }}
          transition={transition}
        />
      </Box>
    </Box>
  )
}

export default HamburgerIcon
