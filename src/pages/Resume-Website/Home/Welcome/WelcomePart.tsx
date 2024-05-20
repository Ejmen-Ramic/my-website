import { Box, Button, HStack, Heading, Tooltip, VStack, Image, Text } from '@chakra-ui/react'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FadeInView from '../../../../shared/components/Hooks/FadeInView'
import { Link } from 'react-router-dom'

const Welcome = () => {
  // const { t } = useTranslation(["home"])

  return (
    <Box position={'relative'} minHeight={'100vh'} display={'flex'} bgColor={'#051721'} w={'full'}>
      {/* Container For the Image Text */}

      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        zIndex={1}
        backgroundImage='linear-gradient(to top, rgba(5,23,33,2) 0%, rgba(5,23,33,0) 100%)'
      >
        <Image
          src={'./Website/Resume/Home/hero.jpg'}
          alt={'Background'}
          objectFit={'cover'}
          position={'absolute'}
          top={0}
          left={0}
          zIndex={0}
          width={'100%'}
          height={'100%'}
          filter={{ base: 'brightness(0.3)', lg: 'brightness(0.6)' }} // Bottom fading effect
        />
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
            color={'white'}
            fontSize={{ base: '', md: '2em', lg: '2em' }}
            fontWeight={'800'}
            lineHeight={'1em'}
            textTransform={'uppercase'}
          >
            neversettle
          </Text>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.2}>
          <Heading
            color={'white'}
            fontSize={{ base: '2em', md: '2em', lg: '4em' }}
            fontWeight={'700'}
            lineHeight={'1em'}
            textTransform={'uppercase'}
          >
            Explore{' '}
            <Box as={'span'} color={'red'}>
              my
            </Box>
            <br />
            limitless possibilities
          </Heading>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.3}>
          <Text color={'white'} fontSize={{ md: '1.0em', lg: '1.1em' }} fontWeight={'400'} maxWidth={'700px'}>
            Hi. My name is Ejmen. I'm a Full Stack engineer from Bosnia and Herzegovina and this is my web resume. Here
            you can see my capabilities and skills as a software engineer and a photographer. Feel free to explore my
            website and my photo gallery.
          </Text>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.4}>
          <Link to={'/resume'}>
            <Button
              textTransform={'uppercase'}
              borderRadius={'0px'}
              color={'#051721'}
              bgColor={'white'}
              display={'inline-block'}
              fontSize={'1em'}
              padding={'10px 30px'}
              fontWeight={'500'}
              marginTop={'10px'}
              letterSpacing={'2px'}
              _hover={{ letterSpacing: '7px' }}
              transition={'0.2s'}
            >
              Resume
            </Button>
          </Link>
        </FadeInView>
        <FadeInView direction={'left'} delay={0.5}>
          <HStack>
            <Tooltip label='GitHub'>
              <a href='https://github.com/Ejmen-Ramic/'>
                <Button _hover={{ transform: 'translateY(-10px)' }} transition={'0.2s'}>
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </a>
            </Tooltip>
            <Tooltip label='LinkedIn'>
              <a href='https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my'>
                <Button _hover={{ transform: 'translateY(-10px)' }} transition={'0.2s'} colorScheme={'linkedin'}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </a>
            </Tooltip>
            <Tooltip label='Instagram'>
              <a href='https://www.instagram.com/ejmenramic/'>
                <Button _hover={{ transform: 'translateY(-10px)' }} transition={'0.2s'} colorScheme={'purple'}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Button>
              </a>
            </Tooltip>
          </HStack>
        </FadeInView>
      </VStack>
    </Box>
  )
}

export default Welcome
