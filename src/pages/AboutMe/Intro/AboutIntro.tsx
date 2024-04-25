import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import AboutAlbum from './AboutAlbum'
import FadeInView from '../../../shared/components/Hooks/FadeInView'

const AboutIntro: FC = () => {
  return (
    <FadeInView>
      <VStack spacing={'100px'} px={{ lg: '150px' }} mt={{ base: '50', md: '100px', lg: '150px' }} w={'full'}>
        <Flex w={'full'} direction={{ base: 'column', lg: 'row' }}>
          <Stack w={'full'} spacing={'30px'} maxW={'600px'} alignItems={'start'}>
            <FadeInView delay={0.5} direction={'left'}>
              <Box bgColor={'red'} height={'2px'} width={'90px'}></Box>
            </FadeInView>
            <FadeInView delay={0.3}>
              <Heading fontSize={{ base: '40px', md: '54px' }} fontWeight={300} letterSpacing={'1px'}>
                So, you want to know how{' '}
                <Box color={'red'} as={'span'} fontWeight={'bold'}>
                  I
                </Box>{' '}
                started coding, huh?
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
                As a young adult, growing up in a beautiful city of Bosnia and Herzegovina, I always admired the great
                developers who managed to make something new from an empty page wether its a computer software of a
                basic web page. Bosnia at the time was not well developed so I had to pursue my studies in Malaysia as a
                software engineer. Further down the road I have found my interest in Full Stack engineering. Wether its
                difficult or not my passion grew. Iv'e met many people who shared the same interest as me and together
                we improved not just in coding but also problem solving. This website is a showcase of my journey and
                projects that I have undertaken so far.
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
