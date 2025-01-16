import {
  Box,
  Button,
  HStack,
  Heading,
  Tooltip,
  VStack,
  Text,
} from '@chakra-ui/react'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Link } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'
import ParticlesBackground from './Particles'

const Welcome = () => {
  return (
    <Box
      position={'relative'}
      minHeight={'100vh'}
      display={'flex'}
      bgColor={'#051721'}
      w={'full'}
    >
      {/* Container For the Image Text */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        width={'100%'}
        height={'100%'}
        zIndex={1}
        backgroundImage={
          'linear-gradient(to top, rgba(5,23,33,2) 0%, rgba(5,23,33,0) 100%)'
        }
      >
        <Box
          // src={'./Website/Resume/Home/hero.jpg'}
          // alt={'Background'}
          objectFit={'cover'}
          position={'absolute'}
          top={0}
          left={0}
          zIndex={0}
          w={'100%'}
          h={'full'}
          maxH={'100%'}
          filter={{ base: 'brightness(0.3)', lg: 'brightness(0.6)' }}
        >
          <ParticlesBackground />
        </Box>
      </Box>

      {/* Welcome Text */}
      <VStack
        spacing={'30px'}
        alignItems={'start'}
        mt={{ base: '150px', md: '200px' }}
        ml={{ base: '0px', lg: '100px' }}
        px={{ base: '40px', md: '70px', lg: '0px' }}
        zIndex={3}
      >
        <FadeInView direction={'left'} delay={0.1}>
          <Text
            color={colors.white}
            fontSize={{ base: '', md: '20px', lg: '2em' }}
            fontWeight={'800'}
            lineHeight={'1em'}
            textTransform={'uppercase'}
          >
            <Trans>Developer</Trans>
          </Text>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.2}>
          <Heading
            color={colors.white}
            fontSize={{ base: '2em', md: '2em', lg: '4em' }}
            fontWeight={'700'}
            lineHeight={'1em'}
            textTransform={'uppercase'}
          >
            <Trans>
              Explore{' '}
              <Box as={'span'} color={'red'}>
                my
              </Box>
              <br />
              limitless possibilities
            </Trans>
          </Heading>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.3}>
          <Text
            color={colors.white}
            fontSize={{ md: '1.0em', lg: '1.1em' }}
            fontWeight={'400'}
            maxWidth={'700px'}
          >
            <Trans>
              Hi. My name is Ejmen. I'm a software engineer from Bosnia and
              Herzegovina, and this is my web resume. Here, you can see my
              capabilities and skills as a software engineer and as a
              photographer. Feel free to explore my website and my photo
              gallery.
            </Trans>
          </Text>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.4}>
          <Link to={'/resume'}>
            <Button
              textTransform={'uppercase'}
              borderRadius={'0px'}
              color={'#051721'}
              bgColor={colors.white}
              display={'inline-block'}
              fontSize={'1em'}
              padding={'10px 30px'}
              fontWeight={'500'}
              marginTop={'10px'}
              letterSpacing={'2px'}
              _hover={{ letterSpacing: '7px' }}
              transition={'0.2s'}
              data-testid={'resume-text'}
            >
              <Trans>Resume</Trans>
            </Button>
          </Link>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.5}>
          <HStack>
            <Tooltip label={'GitHub'}>
              <a href={'https://github.com/Ejmen-Ramic/'}>
                <Box
                  p={0}
                  pt={'10px'}
                  _hover={{ pt: 0, pb: '10px' }}
                  transition={'0.2s'}
                >
                  <Button>
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </a>
            </Tooltip>
            <Tooltip label={'LinkedIn'}>
              <a
                href={
                  'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my'
                }
              >
                <Box
                  p={0}
                  pt={'10px'}
                  _hover={{ pt: 0, pb: '10px' }}
                  transition={'0.2s'}
                >
                  <Button colorScheme={'linkedin'}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Button>
                </Box>
              </a>
            </Tooltip>
            <Tooltip label={'Instagram'}>
              <a href={'https://www.instagram.com/ejmenramic/'}>
                <Box
                  p={0}
                  pt={'10px'}
                  _hover={{ pt: 0, pb: '10px' }}
                  transition={'0.2s'}
                >
                  <Button colorScheme={'purple'}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Button>
                </Box>
              </a>
            </Tooltip>
          </HStack>
        </FadeInView>
      </VStack>
    </Box>
  )
}

export default Welcome
