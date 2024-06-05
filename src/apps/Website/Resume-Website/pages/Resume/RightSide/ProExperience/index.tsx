import { VStack, Box, Heading, HStack, Text, useColorModeValue, Stack } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaBriefcase, FaLocationDot } from 'react-icons/fa6'
import { itemProps } from './Props'
import { Trans } from '@lingui/macro'

const ProExperience = () => {
  const colorMode = useColorModeValue('#000000', '#ECEFF4')

  return (
    <VStack w={'full'} alignItems={'start'} color={colorMode}>
      <HStack w={'full'} spacing={'10px'}>
        <FaBriefcase size={'18px'} />
        <Heading textTransform={'uppercase'} lineHeight={'12px'} fontSize={'18px'} color={colorMode}>
          <Trans>Professional Experience</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      <VStack spacing={{ base: '30px', md: '18px' }}>
        {itemProps.map(({ year, location, experience, description }, i) => (
          <VStack w={'full'} spacing={'10px'} alignItems={'start'} key={i}>
            <HStack w={'full'}>
              <VStack w={'full'} spacing={'0px'}>
                <HStack w={'full'}>
                  <FaCalendarAlt size={'12px'} />
                  <Text fontSize={'12px'} color={colorMode}>
                    {year}
                  </Text>
                </HStack>
                <HStack w={'full'}>
                  <FaLocationDot size={'12px'} />
                  <Text fontSize={'12px'} color={colorMode}>
                    {location}
                  </Text>
                </HStack>
              </VStack>
              <Stack w={'full'} alignItems={'end'} fontSize={'16px'} fontWeight={400} textAlign={'end'}>
                <Text color={colorMode}>{experience}</Text>
              </Stack>
            </HStack>
            <Text fontSize={'12px'} color={colorMode}>
              {description}
            </Text>
          </VStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default ProExperience
