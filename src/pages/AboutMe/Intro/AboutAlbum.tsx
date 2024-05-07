import React, { FC } from 'react'
import { Box, Flex, VStack, Image, HStack } from '@chakra-ui/react'
import FadeInView from '../../../shared/components/Hooks/FadeInView'

const zoomInStyles = {
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(0.98)',
    zIndex: 1,
  },
  zIndex: 0,
}

const AboutAlbum: FC = () => {
  return (
    <HStack w={'full'}>
      <Flex w={'full'} maxH={{ lg: '1200x' }} direction={{ base: 'column', lg: 'row' }}>
        <VStack w={'full'} justify={'space-between'} spacing={{ base: '50px', lg: '0px' }}>
          <FadeInView delay={0.1}>
            <Image src={'./Website/AboutMe/aboutintro1.jpg'} alt={'About Img 1'} sx={zoomInStyles} />
          </FadeInView>{' '}
          <FadeInView delay={0.1}>
            <Image src={'./Website/AboutMe/aboutintro2.jpg'} alt={'About Img 2'} sx={zoomInStyles} />
          </FadeInView>
        </VStack>
        <Box w={'full'} mt={{ base: '50px', lg: '0px' }} ml={{ base: '0px', lg: '50px' }} position={'relative'}>
          <FadeInView delay={0.1}>
            <Image src={'./Website/AboutMe/about-me-3.jpg'} alt={'About Img 3'} sx={zoomInStyles} />
          </FadeInView>
        </Box>
      </Flex>
    </HStack>
  )
}

export default AboutAlbum
