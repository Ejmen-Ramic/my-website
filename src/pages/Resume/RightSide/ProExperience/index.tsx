import { VStack, Box, Heading, HStack, Text } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaBriefcase, FaLocationDot } from 'react-icons/fa6'
import { itemProps } from './Props'

const ProExperience = () => {
  return (
    <VStack w={'full'} alignItems={'start'} color={'#ECEFF4'}>
      <HStack w={'full'} spacing={'10px'}>
        <FaBriefcase size={'18px'} />
        <Heading textTransform={'uppercase'} lineHeight={'12px'} fontSize={'18px'} color={'#ECEFF4'}>
          Professional Experience
        </Heading>
      </HStack>

      <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
      {itemProps.map(({ year, location, experience, description }) => (
        <VStack w={'full'} spacing={'10px'} alignItems={'start'} key={experience}>
          <HStack w={'full'}>
            <VStack w={'full'} spacing={'0px'}>
              <HStack w={'full'}>
                <FaCalendarAlt size={'12px'} />
                <Text fontSize={'12px'}>{year}</Text>
              </HStack>
              <HStack w={'full'}>
                <FaLocationDot size={'12px'} />
                <Text fontSize={'12px'}>{location}</Text>
              </HStack>
            </VStack>
            <VStack w={'full'} alignItems={'end'} fontSize={'16px'} fontWeight={400} textAlign={'end'}>
              <Text>{experience}</Text>
            </VStack>
          </HStack>
          <Text fontSize={'12px'}>{description}</Text>
        </VStack>
      ))}
    </VStack>
  )
}

export default ProExperience
