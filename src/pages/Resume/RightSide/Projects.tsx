import { VStack, Box, Heading, HStack, Text, Button } from '@chakra-ui/react'
import { FaCalendarAlt, FaLink } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaintBrush } from 'react-icons/fa'

const Projects = () => {
  return (
    <VStack w={'full'} alignItems={'start'} color={'#ECEFF4'}>
      <HStack w={'full'} spacing={'10px'}>
        <FaPaintBrush size={'18px'} />
        <Heading textTransform={'uppercase'} lineHeight={'12px'} fontSize={'18px'} color={'#ECEFF4'}>
          Projects
        </Heading>
      </HStack>

      <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} spacing={'10px'} alignItems={'start'}>
        <HStack w={'full'}>
          <VStack w={'full'} alignItems={'start'} fontSize={'16px'} fontWeight={400} textAlign={'start'}>
            <Button color={'#98bed5'} variant={'none'} p={'0px'} _hover={{ textDecoration: 'underline' }}>
              Final Year Project <FaLink style={{ marginLeft: '8px' }} />
            </Button>
          </VStack>
          <VStack w={{ lg: '300px' }} spacing={'0px'}>
            <HStack w={'full'}>
              <FaCalendarAlt size={'12px'} />
              <Text fontSize={'12px'}>2018 - 2022</Text>
            </HStack>
            <HStack w={'full'}>
              <FaLocationDot size={'12px'} />
              <Text fontSize={'12px'}>Kuala Lumpur, Malaysia</Text>
            </HStack>
          </VStack>
        </HStack>
        <Text fontSize={'12px'}>
          DASI is Técnico Lisboa's IT Services' Development Team, which I joined during my first year at the university.
          It is responsible for developing and managing the school's learning management system, FenixEdu, and other
          services. I developed a new version of the public API, as well as various bug fixes and UX improvements, some
          of which were my initiative.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Projects
