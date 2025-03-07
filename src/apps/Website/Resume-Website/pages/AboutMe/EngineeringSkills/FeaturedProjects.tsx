import {
  Stack,
  Heading,
  Grid,
  Text,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { FC } from 'react'
import { colors } from '../../../../../../shared/components/Hooks/color'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { itemsFeatureProjects } from './Props'

const FeaturedProjects: FC = () => {
  const GridColor = useColorModeValue(colors.white, colors.gray[800])
  const StackColor = useColorModeValue(colors.white, '#2D3748')
  const HeaderPopColor = useColorModeValue(colors.teal[400], colors.blue[400])
  const popoverShadow = useColorModeValue(
    '0 16px 32px rgba(0, 0, 0, 0.15)',
    '0 20px 40px rgba(0, 0, 0, 0.3)'
  )
  return (
    <FadeInView>
      <Stack
        w={'full'}
        maxW={'1400px'}
        bg={GridColor}
        p={'32px'}
        spacing={'20px'}
        borderRadius={{ md: '10px' }}
        border={{ base: 'none', lg: `1px solid ${colors.iceGray}` }}
        data-testid={'featured-projects-component'}
      >
        <FadeInView delay={0.1}>
          <Heading>
            <Trans>Featured Projects</Trans>
          </Heading>
        </FadeInView>

        <Grid
          w={'full'}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={'20px'}
        >
          {itemsFeatureProjects.map((item, i) => (
            <FadeInView key={i} delay={0.2}>
              <Stack
                w={'full'}
                h={'full'}
                minH={'450px'}
                bg={StackColor}
                spacing={'20px'}
                p={'32px'}
                border={`1px solid ${colors.iceGray}`}
                borderRadius={'10px'}
                boxShadow={popoverShadow}
                data-testid={`technical-skills-content-${i}`}
              >
                <HStack w={'full'} justify={'space-between'}>
                  <FadeInView delay={0.3}>
                    <Heading
                      size={'md'}
                      data-testid={`technical-skills-title-${i}`}
                    >
                      {item.title}
                    </Heading>
                  </FadeInView>

                  <FadeInView delay={0.3} direction={'right'}>
                    <Icon
                      fontSize={'22px'}
                      data-testid={`technical-skills-icon-${i}`}
                    >
                      {item.icon}
                    </Icon>
                  </FadeInView>
                </HStack>

                <FadeInView delay={0.3}>
                  <Text data-testid={`technical-skills-text-${i}`}>
                    {typeof item.detail === 'function'
                      ? item.detail(HeaderPopColor)
                      : item.detail}
                  </Text>
                </FadeInView>
              </Stack>
            </FadeInView>
          ))}
        </Grid>
      </Stack>
    </FadeInView>
  )
}

export default FeaturedProjects
