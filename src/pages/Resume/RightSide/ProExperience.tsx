import { VStack, Box, Heading, HStack, Text } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaBriefcase, FaLocationDot } from 'react-icons/fa6'

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
      <VStack w={'full'} spacing={'10px'} alignItems={'start'}>
        <HStack w={'full'}>
          <VStack w={'full'} spacing={'0px'}>
            <HStack w={'full'}>
              <FaCalendarAlt size={'12px'} />
              <Text fontSize={'12px'}>2018 - 2022</Text>
            </HStack>
            <HStack w={'full'}>
              <FaLocationDot size={'12px'} />
              <Text fontSize={'12px'}>Kuala Lumpur, Malaysia</Text>
            </HStack>
          </VStack>
          <VStack w={'full'} alignItems={'end'} fontSize={'16px'} fontWeight={400} textAlign={'end'}>
            <Text>Bachelor's in Information and Communication Technology</Text>
          </VStack>
        </HStack>
        <Text px={'20px'} fontSize={'12px'}>
          DASI is Técnico Lisboa's IT Services' Development Team, which I joined during my first year at the university.
          It is responsible for developing and managing the school's learning management system, FenixEdu, and other
          services. I developed a new version of the public API, as well as various bug fixes and UX improvements, some
          of which were my initiative.
        </Text>
      </VStack>
    </VStack>
  )
}

export default ProExperience
