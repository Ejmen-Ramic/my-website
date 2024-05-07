import React from 'react'
import { Box, Button, GridItem, Heading, HStack, Icon, Image, SimpleGrid, Text, Stack } from '@chakra-ui/react'
import { BsFillInfoCircleFill, BsSpeedometer } from 'react-icons/bs'
import { IoThumbsUp } from 'react-icons/io5'
import { GiStairsGoal } from 'react-icons/gi'
import { TbCertificate } from 'react-icons/tb'
import FadeInView from '../../../../shared/components/Hooks/FadeInView'

const lightModeColor = 'white'
const darkModeColor = '#171923'

type ReasonItem = {
  icon: React.ReactElement
  number: string
  title: string
  description: string
}

const ReasonsToChoose = () => {
  // Array of reasons
  const reasons: ReasonItem[] = [
    {
      icon: <Icon as={BsSpeedometer} boxSize={9} color={darkModeColor} />,
      number: '01',
      title: 'Fast development',
      description:
        "You won't find better value in the marketplace. If you find a lower price, send us the offer, and we'll beat it.",
    },
    {
      icon: <Icon as={IoThumbsUp} boxSize={9} color={darkModeColor} />,
      number: '02',
      title: 'Guaranteed Quality',
      description:
        'Our training courses are 100% guaranteed to run on dates provided, whether they are classroom, virtual, or In-house.',
    },
    {
      icon: <Icon as={GiStairsGoal} boxSize={9} color={darkModeColor} />,
      number: '03',
      title: 'Highly Experienced',
      description:
        'Our support staff and Instructors have years of experience in meeting the specific needs of our clients and delivering exceptional quality.',
    },
    {
      icon: <Icon as={TbCertificate} boxSize={9} color={darkModeColor} />,
      number: '04',
      title: 'Award-Winning Training Material',
      description:
        'Our training program is supported by our well-researched and high-quality course material that will assist the learners in gaining full knowledge into their desired subject matter.',
    },
  ]

  return (
    <FadeInView>
      <Stack
        spacing={0}
        mx={'auto'}
        minH={{ base: '900px', md: '450px', lg: '500px' }}
        maxW={{ base: '100%', md: '90%', lg: '1600px' }}
        direction={{ base: 'column', lg: 'row' }}
        w={'full'}
        mt={{ base: '15px', lg: '0px' }}
        py={{ lg: '120px' }}
        mb={{ md: '120px', lg: '0px' }}
      >
        <Stack
          h={'500px'}
          justifyItems={'center'}
          textAlign={'start'}
          p={{ base: '20px', md: '40px', lg: '70px' }}
          zIndex={1}
          position={'relative'}
          pt={{ lg: '20px' }}
          backgroundImage='linear-gradient(to top, rgba(5,23,33,2) 0%, rgba(5,23,33,0) 100%)'
          w={'full'}
          minW={{ lg: '700px' }}
        >
          <Image
            src={'./Website/Home/code.jpg'}
            alt={'Background'}
            objectFit={'cover'}
            position={'absolute'}
            top={0}
            left={0}
            zIndex={0}
            width={'100%'}
            height={'100%'}
            filter={{ base: 'brightness(0.1)', lg: 'brightness(0.1)' }} // Bottom fading effect
          />
          <Box position={'relative'} pt={{ lg: '40px' }} zIndex={1}>
            <FadeInView delay={0.1}>
              <Heading mt={{ base: '25px' }} color={'white'}>
                Reasons to{' '}
                <Box as={'span'} color={'red'}>
                  Count
                </Box>{' '}
                on Me
              </Heading>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Text mt={'20px'} color={'white'}>
                Our coding school boasts a team of highly skilled and experienced instructors who are passionate about
                teaching coding. They possess deep knowledge in various programming languages and technologies, ensuring
                that our students receive expert guidance and mentorship throughout their learning journey. Our
                instructors are dedicated to fostering a supportive and engaging environment, enabling customers to
                learn effectively and gain valuable coding skills.
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Button mt={'20px'} leftIcon={<Icon as={BsFillInfoCircleFill} boxSize={4} />}>
                Need More Information
              </Button>
            </FadeInView>
          </Box>
        </Stack>
        <GridItem>
          <Box w={'100%'} h={{ base: 'full', md: '500px' }}>
            <SimpleGrid columns={[1, 1, 2]}>
              {reasons.map((reason, index) => (
                <Box
                  zIndex={1}
                  key={index}
                  height={'250px'}
                  px={'20px'}
                  py={'20px'}
                  pr={'40px'}
                  bg={lightModeColor}
                  borderWidth={'1px'}
                  borderColor={'#E4E4E4'}
                  borderLeft={{ lg: 0 }}
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
                    <Heading mt={'20px'} fontSize={'l'} fontWeight={'extrabold'} color={'black'}>
                      {reason.title}
                    </Heading>
                  </FadeInView>
                  <FadeInView delay={0.3}>
                    <Text color={'black'} mt={'20px'}>
                      {reason.description}
                    </Text>
                  </FadeInView>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </GridItem>
      </Stack>
    </FadeInView>
  )
}

export default ReasonsToChoose
