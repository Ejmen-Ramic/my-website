import {
  VStack,
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { itemProps } from './Props'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../../shared/components/Hooks/color'

const Education = () => {
  const colorMode = useColorModeValue(colors.black, colors.iceGray)

  return (
    <VStack w={'full'} alignItems={'start'}>
      <HStack w={'full'} spacing={'10px'}>
        <FaGraduationCap size={'22px'} color={colorMode} />
        <Heading
          textTransform={'uppercase'}
          lineHeight={'12px'}
          fontSize={'18px'}
          color={colorMode}
          data-testid={'education-text'}
        >
          <Trans>Education</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      {itemProps.map(({ year, location, experience, description }, i) => (
        <VStack w={'full'} spacing={'10px'} alignItems={'start'} key={i}>
          <HStack w={'full'}>
            <VStack w={'full'} spacing={'0px'}>
              <HStack w={'full'}>
                <FaCalendarAlt size={'12px'} color={colorMode} />
                <Text fontSize={'12px'} color={colorMode}>
                  {year}
                </Text>
              </HStack>
              <HStack w={'full'}>
                <FaLocationDot size={'12px'} color={colorMode} />
                <Text fontSize={'12px'} color={colorMode}>
                  {location}
                </Text>
              </HStack>
            </VStack>
            <Stack
              w={'full'}
              alignItems={'end'}
              fontSize={'16px'}
              fontWeight={400}
              textAlign={'end'}
            >
              <Text color={colorMode}>{experience}</Text>
            </Stack>
          </HStack>
          <Text px={'20px'} fontSize={'12px'} color={colorMode}>
            {description}
          </Text>
        </VStack>
      ))}
    </VStack>
  )
}

export default Education
