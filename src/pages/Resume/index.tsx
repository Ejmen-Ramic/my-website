import React from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer/Footer'

import { Center, Stack, VStack } from '@chakra-ui/react'

import MainBody from './MainBody'

const Resume: React.FC<{}> = () => {
  return (
    <Stack w={'full'}>
      <Header />
      <Center w={'full'}>
        <VStack maxW={'800px'} w={'full'} my={{ base: '30px', lg: '50px' }}>
          <MainBody />
        </VStack>
      </Center>
      <Footer />
    </Stack>
  )
}

export default Resume
