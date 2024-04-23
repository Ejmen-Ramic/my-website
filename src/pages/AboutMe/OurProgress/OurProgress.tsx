import { Box, chakra, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue, VStack } from '@chakra-ui/react'
import { useState, useEffect, ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSolidBellRing } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa6'
import FadeInView from '../../../shared/components/Hooks/FadeInView'

interface StatsCardProps {
  title: string
  icon: ReactNode
  stat: string
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  const [count, setCount] = useState(0)
  const targetCount = parseInt(stat.replace(/,/g, ''), 10)
  const threshold = targetCount - 200 // Set your threshold here

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        let increment = Math.ceil(targetCount / 100) // Default increment

        // If current count is below the threshold, use a slower animation speed
        if (prevCount + increment >= threshold) {
          increment = 1 // Slow down the animation
        }

        if (prevCount + increment >= targetCount) {
          clearInterval(interval)
          return targetCount
        }

        return prevCount + increment
      })
    }, 20) // Adjust the default animation speed here

    return () => {
      clearInterval(interval)
    }
  }, [stat, targetCount, threshold])

  return (
    <FadeInView>
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        bgColor={useColorModeValue('white', 'gray.700')}
        rounded={'lg'}
      >
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }} color={useColorModeValue('gray.800', 'white')}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {count.toLocaleString()}
            </StatNumber>
          </Box>
          <Box my={'auto'} color={useColorModeValue('gray.800', 'white')} alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    </FadeInView>
  )
}

export default function BasicStatistics() {
  return (
    <VStack w={'full'} px={{ lg: 40 }} spacing={'50px'}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
        What are our company achievements?
      </chakra.h1>
      <SimpleGrid w={'full'} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Students'} stat={'2450 people'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Classes'} stat={'900 classes held'} icon={<BiSolidBellRing size={'3em'} />} />
        <StatsCard title={'Graduated'} stat={'400 graduated students'} icon={<FaGraduationCap size={'3em'} />} />
      </SimpleGrid>
    </VStack>
  )
}
