import { VStack, Box, Heading, HStack, Text, Button } from '@chakra-ui/react'
import { FaCalendarAlt, FaLink } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaintBrush } from 'react-icons/fa'
import { itemProps } from './Props'

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
      {itemProps.map(({ name, year, location, description }, i) => (
        <VStack w={'full'} spacing={'10px'} alignItems={'start'} key={i}>
          <HStack w={'full'}>
            <VStack w={'full'} alignItems={'start'} fontSize={'16px'} fontWeight={400} textAlign={'start'}>
              <Button color={'#98bed5'} variant={'none'} p={'0px'} _hover={{ textDecoration: 'underline' }}>
                {name}
                <FaLink style={{ marginLeft: '8px' }} />
              </Button>
            </VStack>
            <VStack w={{ lg: '300px' }} spacing={'0px'}>
              <HStack w={'full'}>
                <FaCalendarAlt size={'12px'} />
                <Text fontSize={'12px'}>{year}</Text>
              </HStack>
              <HStack w={'full'}>
                <FaLocationDot size={'12px'} />
                <Text fontSize={'12px'}>{location}</Text>
              </HStack>
            </VStack>
          </HStack>
          <Text fontSize={'12px'}>{description}</Text>
        </VStack>
      ))}
    </VStack>
  )
}

export default Projects
