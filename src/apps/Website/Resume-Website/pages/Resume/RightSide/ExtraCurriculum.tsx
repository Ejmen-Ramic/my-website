import {
  VStack,
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { FC, ReactNode } from 'react'
import { FaLink, FaRunning, FaShapes } from 'react-icons/fa'
import { colors } from '../../../../../../shared/components/Hooks/color'

type Props = {
  text: string | JSX.Element
  icon: ReactNode
  link?: string
}

const itemProps: Props[] = [
  {
    text: <Trans>I'm a web developer.</Trans>,
    icon: <FaShapes />,
    link: 'https://github.com/Ejmen-Ramic',
  },
  {
    text: <Trans>I love running.</Trans>,
    icon: <FaRunning />,
    link: 'https://strava.app.link/6Xms63ppyPb',
  },
]

const ExtraCurriculum: FC = () => {
  const colorMode = useColorModeValue(colors.black, colors.iceGray)
  const colorLink = useColorModeValue(colors.navy, colors.primary[100])

  return (
    <VStack w={'full'} alignItems={'start'} color={colors.iceGray}>
      <HStack w={'full'} spacing={'10px'}>
        <FaShapes size={'18px'} color={colorMode} />
        <Heading
          textTransform={'uppercase'}
          lineHeight={'12px'}
          fontSize={'18px'}
          color={colorMode}
        >
          <Trans>Extra Curriculum</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} spacing={'10px'} alignItems={'start'}>
        <HStack w={'full'}>
          <VStack
            w={'full'}
            alignItems={'start'}
            fontSize={'12px'}
            textAlign={'start'}
            spacing={'1px'}
          >
            {itemProps.map(({ icon, text }, i) => (
              <HStack w={'full'} key={i}>
                <Box color={colorMode}> {icon}</Box>
                <Text color={colorMode} variant={'none'} p={'0px'}>
                  {text}
                </Text>
                <Link href={itemProps[i].link}>
                  <FaLink size={'12px'} color={colorLink} />
                </Link>
              </HStack>
            ))}
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default ExtraCurriculum
