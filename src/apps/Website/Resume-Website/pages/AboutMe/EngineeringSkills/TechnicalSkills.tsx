import {
  Stack,
  Heading,
  Grid,
  Text,
  useColorModeValue,
  Icon,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  Hide,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { FC, useRef, useState } from 'react'
import { useOutsideClick } from '@chakra-ui/react'
import { colors } from '../../../../../../shared/components/Hooks/color'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { itemsTechSkills } from './Props'

const TechnicalSkills: FC = () => {
  const GridColor = useColorModeValue(colors.white, 'gray.800')
  const StackColor = useColorModeValue(colors.white, '#2D3748')
  const hoverShadowLight = useColorModeValue(
    '0 8px 16px rgba(0, 0, 0, 0.2)',
    '0 12px 24px rgba(0, 0, 0, 0.3)'
  )
  const popoverShadow = useColorModeValue(
    '0 16px 32px rgba(0, 0, 0, 0.15)',
    '0 20px 40px rgba(0, 0, 0, 0.3)'
  )
  const transformScale = useColorModeValue('scale(1)', 'scale(1.03)')
  const HeaderPopColor = useColorModeValue('teal.400', 'blue.400')

  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null)

  const handleTogglePopover = (index: number) => {
    setOpenPopoverIndex((prev) => (prev === index ? null : index))
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: containerRef,
    handler: () => setOpenPopoverIndex(null),
  })

  return (
    <FadeInView data-testid={'engineering-skills-component'}>
      <Stack
        w={'full'}
        maxW={'1400px'}
        bg={GridColor}
        p={'32px'}
        spacing={'20px'}
        borderRadius={{ md: '10px' }}
        border={{ base: 'none', lg: '1px solid #ECEFF4' }}
        ref={containerRef}
      >
        <FadeInView delay={0.1}>
          <Heading>
            <Trans>Technical Skills</Trans>
          </Heading>
        </FadeInView>

        <Grid
          w={'full'}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={'20px'}
        >
          {itemsTechSkills.map((item, i) => (
            <FadeInView key={i} delay={0.2}>
              <Popover
                open={openPopoverIndex === i}
                onClose={() => setOpenPopoverIndex(null)}
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <Stack
                    as={'button'}
                    w={'full'}
                    textAlign={'left'}
                    minH={'190px'}
                    bg={StackColor}
                    spacing={'20px'}
                    p={'32px'}
                    border={'1px solid #ECEFF4'}
                    borderRadius={'10px'}
                    boxShadow={'0 8px 12px rgba(0, 0, 0, 0.1)'}
                    transition={
                      'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s'
                    }
                    _hover={{
                      boxShadow: hoverShadowLight,
                      transform: transformScale,
                      borderColor: 'blue.400',
                    }}
                    onClick={() => handleTogglePopover(i)}
                    data-testid={`engineering-skills-trigger-${i}`}
                  >
                    <HStack w={'full'} justify={'space-between'}>
                      <FadeInView delay={0.3}>
                        <Heading size={'md'}>{item.title}</Heading>
                      </FadeInView>

                      <FadeInView delay={0.3} direction={'right'}>
                        <Icon fontSize={'22px'}>{item.icon}</Icon>
                      </FadeInView>
                    </HStack>

                    <FadeInView delay={0.3}>
                      <Text>
                        {typeof item.detail === 'function'
                          ? item.detail(HeaderPopColor)
                          : item.detail}
                      </Text>
                    </FadeInView>
                  </Stack>
                </PopoverTrigger>

                <PopoverContent
                  w={'full'}
                  maxW={{ base: '320px', lg: '500px' }}
                  boxShadow={popoverShadow}
                  data-testid={`engineering-skills-popover-content-${i}`}
                >
                  <PopoverArrow />
                  <Hide below={'md'}>
                    <PopoverCloseButton />
                  </Hide>
                  <PopoverHeader
                    fontWeight={'bold'}
                    data-testid={`engineering-skills-popover-header-${i}`}
                  >
                    {item.popoverHeader}
                  </PopoverHeader>
                  <PopoverBody
                    py={'15px'}
                    data-testid={`engineering-skills-popover-body-${i}`}
                  >
                    {typeof item.popoverBody === 'function'
                      ? item.popoverBody(HeaderPopColor)
                      : item.popoverBody}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </FadeInView>
          ))}
        </Grid>
      </Stack>
    </FadeInView>
  )
}

export default TechnicalSkills
