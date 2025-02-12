import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../components/Hooks/color'

interface IconBurgerProps extends React.SVGProps<SVGSVGElement> {
  size?: string
}
//   base?: string
//   md?: string
// }
const IconBurger = ({ size, ...props }: IconBurgerProps) => {
  // const baseWidth = size?.base || '24'
  // const baseHeight = size?.base || '24'
  // const mdWidth = size?.md || '24'
  // const mdHeight = size?.md || '24'
  // const width = size?.md ? mdWidth : baseWidth
  // const height = size?.md ? mdHeight : baseHeight

  return (
    <svg
      // width={width}
      // height={height}
      viewBox={'0 0 24 24'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        // width={width}
        // height={height}
        d={'M4 18L20 18'}
        stroke={useColorModeValue(colors.primary4, colors.white)}
        strokeWidth={'2'}
        strokeLinecap={'round'}
      />
      <path
        // width={width}
        // height={height}
        d={'M4 12L20 12'}
        stroke={useColorModeValue(colors.primary4, colors.white)}
        strokeWidth={'2'}
        strokeLinecap={'round'}
      />
      <path
        // width={width}
        // height={height}
        d={'M4 6L20 6'}
        stroke={useColorModeValue(colors.primary4, colors.white)}
        strokeWidth={'2'}
        strokeLinecap={'round'}
      />
    </svg>
  )
}

export default IconBurger
