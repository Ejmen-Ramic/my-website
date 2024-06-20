import React from 'react'
import { Box, Button, GridItem, Heading, HStack, Icon, Image, SimpleGrid, Text, Stack } from '@chakra-ui/react'
import { BsFillInfoCircleFill, BsSpeedometer } from 'react-icons/bs'
import { IoThumbsUp } from 'react-icons/io5'
import { GiStairsGoal } from 'react-icons/gi'
import { FaHandshakeSimple } from 'react-icons/fa6'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Link } from 'react-router-dom'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'

const lightModeColor = colors.white
const darkModeColor = '#171923'

type ReasonItem = {
  icon: React.ReactElement
  number: string
  title: string
  description: string
}

const ReasonsToChoose = () => {
  const reasons: ReasonItem[] = [
    {
      icon: <Icon as={BsSpeedometer} boxSize={9} color={darkModeColor} />,
      number: '01',
      title: t`Fast development`,
      description: t`When it comes to coding swiftly, I aim for efficiency without sacrificing quality.`,
    },
    {
      icon: <Icon as={IoThumbsUp} boxSize={9} color={darkModeColor} />,
      number: '02',
      title: t`Guaranteed Quality`,
      description: t`My coding style goes beyond just speed. I prioritize writing clean, readable code that ensures responsiveness across all devices.`,
    },
    {
      icon: <Icon as={GiStairsGoal} boxSize={9} color={darkModeColor} />,
      number: '03',
      title: t`Highly Experienced`,
      description: t`I've developed my skills through sheer dedication and hard work, investing countless hours into coding and collaborating closely with the product team.`,
    },
    {
      icon: <Icon as={FaHandshakeSimple} boxSize={9} color={darkModeColor} />,
      number: '04',
      title: t`Team Collaboration`,
      description: t`I thrive in collaborative environments, where I can learn, grow, and exchange experiences with others. I firmly believe that with teamwork, any project can be accomplished.`,
    },
  ]

  return (
    <FadeInView>
      <Stack
        w={'full'}
        minH={{ base: '900px', md: '450px', lg: '500px' }}
        maxW={{ base: 'full', md: '90%', lg: '1600px' }}
        spacing={0}
        mx={'auto'}
        mt={{ base: '15px', lg: '0px' }}
        py={{ lg: '120px' }}
        mb={{ md: '120px', lg: '0px' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Stack
          w={'full'}
          h={'auto'}
          minH={'full'}
          minW={{ lg: '700px' }}
          p={{ base: '20px', md: '40px', lg: '0px' }}
          px={{ lg: '50px' }}
          justifyItems={'center'}
          position={'relative'}
          textAlign={'start'}
          zIndex={1}
        >
          <Image
            width={'full'}
            height={'full'}
            src={'./Website/Resume/Home/code.jpg'}
            alt={'Background'}
            objectFit={'cover'}
            borderLeftRadius={{ lg: '20px' }}
            borderTopRadius={{ md: '20px', lg: '0px' }}
            borderTopLeftRadius={{ lg: '20px' }}
            boxShadow={{ md: 'md' }}
            filter={{ base: 'brightness(0.1)', lg: 'brightness(0.1)' }}
            position={'absolute'}
            top={0}
            left={0}
            zIndex={0}
          />
          <Box position={'relative'} py={{ base: '20px', lg: '80px' }} zIndex={1}>
            <FadeInView delay={0.1}>
              <Heading color={colors.white}>
                <Trans>
                  Reasons to{' '}
                  <Box as={'span'} color={'red'}>
                    Count
                  </Box>{' '}
                  on Me
                </Trans>
              </Heading>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Text mt={'20px'} color={colors.white}>
                <Trans>
                  Beyond delivering clean, readable code, I bring a passion for problem-solving and a commitment to
                  continuous learning. My experience collaborating with diverse teams has equipped me with strong
                  communication and interpersonal skills, fostering an environment of creativity and innovation.
                  Additionally, I have a proven track record of meeting tight deadlines while maintaining a high
                  standard of quality. With a proactive mindset and a drive to excel, I am poised to make significant
                  contributions to any project or team.
                </Trans>
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link to={'/about'}>
                <Button mt={'20px'} leftIcon={<Icon as={BsFillInfoCircleFill} boxSize={4} />}>
                  <Trans>Need More Information</Trans>
                </Button>
              </Link>
            </FadeInView>
          </Box>
        </Stack>
        <GridItem>
          <Stack w={'full'} h={{ base: 'full', md: '500px' }}>
            <SimpleGrid columns={[1, 1, 2]} borderRadius={'20%'} minH={'500px'}>
              {reasons.map((reason, index) => (
                <Box
                  zIndex={1}
                  key={index}
                  height={{ base: 'auto', md: 'auto', lg: 'auto' }}
                  px={'20px'}
                  py={'20px'}
                  pr={'40px'}
                  bg={lightModeColor}
                  borderWidth={'1px'}
                  borderColor={'#E4E4E4'}
                  borderLeft={{ lg: 0 }}
                  borderStartEndRadius={{ lg: index === 1 || index === 1 ? '20px' : '0px' }}
                  borderEndStartRadius={{ md: index === 2 || index === 2 ? '20px' : '0px', lg: '0px' }}
                  borderEndEndRadius={{
                    md: index === 3 || index === 3 ? '20px' : '0px',
                    lg: index === 3 || index === 3 ? '20px' : '0px',
                  }}
                  boxShadow={{ md: 'md' }}
                >
                  <HStack justify={'space-between'}>
                    <FadeInView delay={0.1}>
                      <Box
                        w={'50px'}
                        h={'50px'}
                        borderRadius={'50px'}
                        bgColor={'#F5F5F5'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                      >
                        {reason.icon}
                      </Box>
                    </FadeInView>
                    <FadeInView delay={0.5} direction={'right'}>
                      <Box
                        w={'30px'}
                        h={'30px'}
                        borderRadius={'20px'}
                        color={'#CDC8C8'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        fontSize={'40px'}
                        fontWeight={'extrabold'}
                      >
                        {reason.number}
                      </Box>
                    </FadeInView>
                  </HStack>
                  <FadeInView delay={0.2}>
                    <Heading mt={'20px'} fontSize={'l'} fontWeight={'extrabold'} color={colors.black}>
                      {reason.title}
                    </Heading>
                  </FadeInView>
                  <FadeInView delay={0.3}>
                    <Text color={colors.black} mt={'20px'}>
                      {reason.description}
                    </Text>
                  </FadeInView>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </GridItem>
      </Stack>
    </FadeInView>
  )
}

export default ReasonsToChoose
