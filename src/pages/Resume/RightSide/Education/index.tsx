import { VStack, Box, Heading, HStack, Text } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { itemProps } from './Props'

const Education = () => {
  return (
    <VStack w={'full'} alignItems={'start'} color={'#ECEFF4'}>
      <HStack w={'full'} spacing={'10px'}>
        <FaGraduationCap size={'22px'} />
        <Heading textTransform={'uppercase'} lineHeight={'12px'} fontSize={'18px'} color={'#ECEFF4'}>
          Education
        </Heading>
      </HStack>

      <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
      {itemProps.map(({ year, location, experience, description }, i) => (
        <VStack w={'full'} spacing={'10px'} alignItems={'start'} key={i}>
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
          <Text px={'20px'} fontSize={'12px'}>
            {description}
          </Text>
        </VStack>
      ))}
    </VStack>
  )
}

export default Education
