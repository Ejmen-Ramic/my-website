import {
  VStack,
  Box,
  Heading,
  HStack,
  Text,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { FaCalendarAlt, FaLink } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPaintBrush } from 'react-icons/fa'
import { itemProps } from './Props'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const Projects: FC = () => {
  const colorMode = useColorModeValue(colors.black, colors.iceGray)
  const colorLink = useColorModeValue(colors.navy, colors.primary[100])
  return (
    <VStack w={'full'} alignItems={'start'} color={colorMode}>
      <HStack w={'full'} spacing={'10px'}>
        <FaPaintBrush size={'18px'} color={colorMode} />
        <Heading
          textTransform={'uppercase'}
          lineHeight={'12px'}
          fontSize={'18px'}
          color={colorMode}
        >
          <Trans>Projects</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      {itemProps.map(
        ({ name, year, location, description, link, gallery }, i) => (
          <VStack
            w={'full'}
            pt={{ md: '13px' }}
            spacing={'10px'}
            alignItems={'start'}
            key={i}
          >
            <HStack w={'full'}>
              <HStack
                w={'full'}
                alignItems={'start'}
                fontSize={'16px'}
                fontWeight={400}
                textAlign={'start'}
              >
                {link ? (
                  <Link href={link}>
                    <Button
                      color={colorLink}
                      variant={'none'}
                      p={'0px'}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {name}
                      <FaLink style={{ marginLeft: '8px' }} />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    color={colorLink}
                    variant={'none'}
                    p={'0px'}
                    cursor={'text'}
                    _hover={{ cursor: 'text' }}
                  >
                    {name}
                  </Button>
                )}
                {gallery && <Box>{gallery}</Box>}
              </HStack>
              <VStack w={{ md: '300px' }} spacing={'0px'}>
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
        )
      )}
    </VStack>
  )
}

export default Projects
