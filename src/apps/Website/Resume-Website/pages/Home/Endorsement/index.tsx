import {
  Avatar,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Stack,
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { colors } from '../../../../../../shared/components/Hooks/color'
import { FC, useEffect, useState } from 'react'
import items from './Props'

const Endorsement: FC = () => {
  const textColor = useColorModeValue('gray.600', colors.gray[400])
  const bg = useColorModeValue(colors.gray[100], 'gray.700')
  const borderTopColor = useColorModeValue(colors.white, 'gray.800')
  const cardBg = useColorModeValue(colors.white, 'gray.800')
  const buttonColor = useColorModeValue('blue.500', 'blue.300')

  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null)
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenPopoverId(null)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <VStack
      w={'full'}
      bg={bg}
      spacing={10}
      py={'100px'}
      px={{ base: '16px', md: '50px' }}
      data-testid={'endorsement-component'}
    >
      {/* Title and subtitle */}
      <Stack spacing={0} align={'center'}>
        <FadeInView delay={0.1}>
          <Heading>
            <Trans>Endorsement</Trans>
          </Heading>
        </FadeInView>
        <FadeInView>
          <Text
            color={textColor}
            textAlign={'center'}
            fontSize={'sm'}
            px={{ base: '16px', md: '50px' }}
          >
            <Trans>
              Recommendation from top employers in USA, Malaysia and Bosnia
            </Trans>
          </Text>
        </FadeInView>
      </Stack>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={10}>
        {/* Cards */}
        {items.map(
          ({ title, halfDescription, description, image, name, jobTitle }) => (
            <FadeInView delay={0.1} key={image}>
              <Stack
                bg={cardBg}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                textAlign={'center'}
                pos={'relative'}
                maxW={'400px'}
                _after={{
                  content: `""`,
                  w: 0,
                  h: 0,
                  borderLeft: 'solid transparent',
                  borderLeftWidth: 16,
                  borderRight: 'solid transparent',
                  borderRightWidth: 16,
                  borderTop: 'solid',
                  borderTopWidth: 16,
                  borderTopColor: borderTopColor,
                  pos: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <FadeInView delay={0.1}>
                  <Heading as={'h3'} fontSize={'20px'}>
                    {title}
                  </Heading>
                </FadeInView>
                <FadeInView delay={0.1}>
                  <HStack>
                    <Text
                      textAlign={'center'}
                      color={textColor}
                      fontSize={'sm'}
                    >
                      {halfDescription}{' '}
                      <Popover
                        isOpen={openPopoverId === `popover-${name}`}
                        onClose={() => setOpenPopoverId(null)}
                      >
                        <PopoverTrigger>
                          <Button
                            size={'sm'}
                            variant={'link'}
                            color={buttonColor}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenPopoverId(`popover-${name}`)
                            }}
                          >
                            <Trans>Read More</Trans>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent onClick={(e) => e.stopPropagation()}>
                          <PopoverArrow />
                          <PopoverBody p={4}>{description}</PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Text>
                  </HStack>
                </FadeInView>

                {/* Avatar */}
                <Flex align={'center'} mt={8} direction={'column'}>
                  <FadeInView delay={0.1}>
                    <Avatar src={image} mb={2} />
                  </FadeInView>
                  <Stack spacing={-1} align={'center'}>
                    <FadeInView delay={0.1}>
                      <Text fontWeight={600}>{name}</Text>
                    </FadeInView>
                    <FadeInView delay={0.1}>
                      <Text fontSize={'sm'} color={textColor}>
                        {jobTitle}
                      </Text>
                    </FadeInView>
                  </Stack>
                </Flex>
              </Stack>
            </FadeInView>
          )
        )}
      </Stack>
    </VStack>
  )
}

export default Endorsement
