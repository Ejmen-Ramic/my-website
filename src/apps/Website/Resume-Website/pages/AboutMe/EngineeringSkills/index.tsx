import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { colors } from '../../../../../../shared/components/Hooks/color'
import { Trans } from '@lingui/macro'
import { FC } from 'react'
import TechnicalSkills from './TechnicalSkills'
import FeaturedProjects from './FeaturedProjects'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'

const EngineeringSKills: FC = () => {
  const HighlightColor = useColorModeValue('blue.400', 'teal.400')

  return (
    <Stack w={'full'} bg={{ md: useColorModeValue('gray.100', 'gray.700') }}>
      <FadeInView>
        <VStack
          w={'full'}
          px={{ lg: '120px' }}
          py={{ base: '50px', lg: '100px' }}
          divider={<Divider display={{ base: 'block', md: 'none' }} />}
        >
          <VStack w={'full'} spacing={'40px'}>
            {/* About Me Section */}
            <Stack
              w={'full'}
              maxW={'1400px'}
              bg={useColorModeValue(colors.white, 'gray.800')}
              spacing={'20px'}
              p={'32px'}
              borderRadius={{ md: '10px' }}
              border={{ base: 'none', md: '1px solid #ECEFF4' }}
            >
              <FadeInView delay={0.1}>
                <Heading>
                  <Trans>About Me</Trans>
                </Heading>
              </FadeInView>

              <FadeInView delay={0.2}>
                <Text>
                  <Trans>
                    <b>•</b> With over{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      4 years
                    </Box>{' '}
                    of experience in software development, I specialize in
                    building scalable{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      web applications
                    </Box>{' '}
                    and{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      microservices
                    </Box>
                    . I'm passionate about clean code, performance optimization,
                    and creating exceptional user experiences.
                    <br />
                    <br />
                    <b>•</b> Currently I work as a{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      QA
                    </Box>{' '}
                    &{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      FullStack Engineer
                    </Box>{' '}
                    at{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      FLUX
                    </Box>{' '}
                    Malaysia. I cover most of the production development of the
                    website. From{' '}
                    <Box as={'span'} fontWeight={'bold'} color={HighlightColor}>
                      managing
                    </Box>{' '}
                    the QA team to developing new features and optimizing the
                    performance of the website.
                  </Trans>
                </Text>
              </FadeInView>
            </Stack>
            <TechnicalSkills />
            <FeaturedProjects />
          </VStack>
        </VStack>
      </FadeInView>
    </Stack>
  )
}

export default EngineeringSKills
