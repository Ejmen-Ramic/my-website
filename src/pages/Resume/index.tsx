import React from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer/Footer'
import { Center, Stack, HStack, VStack, Button, Text, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import { BsFillPrinterFill, BsGithub } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import ResumeLeftSide from './LeftSide/ResumeLeftSide'
import ResumeRightSide from './RightSide'

const Resume: React.FC<{}> = () => {
  return (
    <Stack w={'full'} spacing={'0px'}>
      <Header />
      <Center w={'full'}>
        <VStack maxW={'800px'} w={'full'} my={{ md: '5px', lg: '50px' }} mb={{ lg: '100px' }} spacing={'0px'}>
          <HStack w={'full'} h={'70px'} justify={'space-between'}>
            <Button variant={'ghost'} color={useColorModeValue('#0B3948', '#98bed5')}>
              <GrLanguage style={{ marginRight: '10px' }} />
              View in Bosnian
            </Button>
            <HStack>
              <Link href={'https://github.com/Ejmen-Ramic/my-website/tree/master/src/pages/Resume'}>
                <Button variant={'ghost'} color={useColorModeValue('#0B3948', '#98bed5')}>
                  <BsGithub style={{ marginRight: '10px' }} />
                  Source code
                </Button>
              </Link>

              <Button variant={'ghost'} color={useColorModeValue('#0B3948', '#98bed5')}>
                <BsFillPrinterFill />
              </Button>
            </HStack>
          </HStack>
          <Stack
            w={'full'}
            spacing={'0px'}
            px={{ md: '20px', lg: '0px' }}
            mb={{ md: '30px', lg: '0px' }}
            boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.3)'}
          >
            {/* Header */}
            <VStack bgColor={'#0b3948'} w={'full'} px={'25px'} py={'24px'} alignItems={'start'}>
              <Heading
                color={useColorModeValue('#FFFFFF', '#ECEFF4')}
                fontWeight={700}
                fontSize={'25px'}
                textTransform={'uppercase'}
              >
                Ejmen Ramic
              </Heading>
              <Text color={useColorModeValue('#FFFFFF', '#ECEFF4')} fontWeight={600} fontSize={'12px'}>
                Programming Enthusiast. Software & Quality Assurance Engineer.
              </Text>
            </VStack>

            {/* Main Section */}
            <Stack w={'full'} h={'auto'} spacing={'0px'}>
              <Stack direction={{ base: 'column', md: 'row' }} w={'full'} h={'auto'} spacing={'0px'}>
                {/* Left Side */}
                <ResumeLeftSide />

                {/* Right Side */}
                <ResumeRightSide />
              </Stack>
            </Stack>
          </Stack>
        </VStack>
      </Center>
      <Footer />
    </Stack>
  )
}

export default Resume
