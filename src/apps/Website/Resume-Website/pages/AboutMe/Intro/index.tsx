import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import AboutAlbum from './AboutAlbum'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Trans } from '@lingui/macro'

const AboutIntro: FC = () => {
  return (
    <FadeInView>
      <VStack
        w={'full'}
        px={{ base: '35px', lg: '150px' }}
        spacing={'100px'}
        mt={{ base: '50px', md: '100px', lg: '150px' }}
        data-testid={'about-intro-component'}
      >
        <Flex w={'full'} direction={{ base: 'column', lg: 'row' }}>
          <Stack
            w={'full'}
            spacing={'30px'}
            maxW={'600px'}
            alignItems={'start'}
          >
            <FadeInView delay={0.5} direction={'left'}>
              <Box bgColor={'red'} height={'2px'} width={'90px'} />
            </FadeInView>
            <FadeInView delay={0.3}>
              <Heading
                fontSize={{ base: '40px', md: '54px' }}
                fontWeight={300}
                letterSpacing={'1px'}
              >
                <Trans>So, you want to know how</Trans>{' '}
                <Box color={'red'} as={'span'} fontWeight={'bold'}>
                  <Trans>I</Trans>
                </Box>{' '}
                <Trans>started coding, huh?</Trans>
              </Heading>
            </FadeInView>
          </Stack>
          <Stack
            w={'full'}
            p={{ lg: '40px' }}
            spacing={'30px'}
            mt={{ base: '50px', lg: '0px' }}
            fontSize={{ base: '20px', lg: '22px' }}
          >
            <FadeInView delay={0.4}>
              <Text>
                <Trans>
                  As a young adult, growing up in a beautiful city of Bosnia and
                  Herzegovina, I always admired the great developers who managed
                  to make something new from an empty page whether its a
                  computer software or a basic web page. Bosnia, at the time was
                  not well developed so I had to pursue my studies in Malaysia
                  as a software engineer. Further down the road I have found my
                  interest in software engineering. Whether its difficult or
                  not, my passion grew. I have met many people who shared the
                  same interest as me and together we improved not just in
                  coding but also problem solving. This website is a showcase of
                  my journey and projects that I have undertaken so far.
                </Trans>
              </Text>
            </FadeInView>
          </Stack>
        </Flex>
        <AboutAlbum />
      </VStack>
    </FadeInView>
  )
}

export default AboutIntro
