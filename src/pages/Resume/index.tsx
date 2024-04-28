import React from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer/Footer'
import { Center, Stack, HStack, VStack, Button, Text, Heading } from '@chakra-ui/react'
import { BsFillPrinterFill, BsGithub } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import ResumeLeftSide from './LeftSide/ResumeLeftSide'
import ResumeRightSide from './RightSide'

const Resume: React.FC<{}> = () => {
  return (
    <Stack w={'full'}>
      <Header />
      <Center w={'full'}>
        <VStack maxW={'800px'} w={'full'} my={{ base: '30px', lg: '50px' }}>
          <Stack w={'full'}>
            <HStack w={'full'} h={'70px'} justify={'space-between'}>
              <Button variant={'ghost'} color={'#98bed5'}>
                <GrLanguage style={{ marginRight: '10px' }} />
                View in Bosnian
              </Button>
              <HStack>
                <Button variant={'ghost'} color={'#98bed5'}>
                  <BsGithub style={{ marginRight: '10px' }} />
                  Source code
                </Button>
                <Button variant={'ghost'} color={'#98bed5'}>
                  <BsFillPrinterFill />
                </Button>
              </HStack>
            </HStack>
            <Stack w={'full'} h={'1000px'} borderWidth={'1px'} borderColor={'black'} bgColor={'white'} spacing={'0px'}>
              <VStack bgColor={'#0b3948'} w={'full'} px={'25px'} py={'24px'} alignItems={'start'}>
                <Heading color={'#ECEFF4'} fontWeight={700} fontSize={'25px'} textTransform={'uppercase'}>
                  Ejmen Ramic
                </Heading>
                <Text color={'white'} fontWeight={600} fontSize={'12px'}>
                  Programming Enthusiast. Software & Quality Assurance Engineer.
                </Text>
              </VStack>
              {/* Main Section */}
              <Stack direction={{ base: 'column', lg: 'row' }} w={'full'} h={'full'} spacing={'0px'}>
                {/* Left Side */}
                <ResumeLeftSide />

                {/* Right Side */}
                <ResumeRightSide />
              </Stack>
            </Stack>
          </Stack>{' '}
        </VStack>
      </Center>
      <Footer />
    </Stack>
  )
}

export default Resume
