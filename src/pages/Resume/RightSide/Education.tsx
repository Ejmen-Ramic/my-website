import { VStack, Box, Heading, HStack, Text } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaGraduationCap, FaLocationDot } from 'react-icons/fa6'

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
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Final average: 18.63/20 (19)
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Elected Year Delegate (2020 - 2023) and Degree Delegate (2022 - 2023)
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Awarded
          <Box as={'span'} color={'#98bed5'} fontWeight={'bold'}>
            Academic Excellence Diploma (2020/2021)
          </Box>
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Awarded
          <Box as={'span'} color={'#98bed5'} fontWeight={'bold'}>
            Academic Merit Diploma (2021/2022)
          </Box>
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Top 3 amongst students who enrolled in LEIC-A in 2020/2021 (out of ~180)
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Member of the University's Pedagogic Council
        </Text>
      </VStack>
    </VStack>
  )
}

export default Education
