import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState, useEffect, ReactNode } from 'react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { colors } from '../../../../../../shared/components/Hooks/color'

interface StatsCardProps {
  title: string
  icon: ReactNode
  stat: string
}

const StatsCard = (props: StatsCardProps) => {
  const { title, stat, icon } = props
  const [count, setCount] = useState(0)
  const targetCount = parseInt(stat.replace(/,/g, ''), 10)
  const threshold = targetCount - 200

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        let increment = Math.ceil(targetCount / 100)

        if (prevCount + increment >= threshold) {
          increment = 1
        }

        if (prevCount + increment >= targetCount) {
          clearInterval(interval)
          return targetCount
        }

        return prevCount + increment
      })
    }, 20)

    return () => {
      clearInterval(interval)
    }
  }, [stat, targetCount, threshold])

  return (
    <FadeInView delay={0.2}>
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue(colors.gray[800], colors.gray[500])}
        bgColor={useColorModeValue(colors.white, colors.gray[700])}
        rounded={'lg'}
      >
        <FadeInView delay={0.3}>
          <Flex justifyContent={'space-between'}>
            <Box
              pl={{ base: 2, md: 4 }}
              color={useColorModeValue(colors.gray[800], colors.white)}
            >
              <StatLabel fontWeight={'medium'} isTruncated>
                {title}
              </StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {count.toLocaleString()}
              </StatNumber>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue(colors.gray[800], colors.white)}
              alignContent={'center'}
            >
              {icon}
            </Box>
          </Flex>
        </FadeInView>
      </Stat>
    </FadeInView>
  )
}

export default StatsCard
