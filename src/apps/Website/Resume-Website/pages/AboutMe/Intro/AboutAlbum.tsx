import React, { FC } from 'react';
import { Box, Flex, VStack, Image, HStack } from '@chakra-ui/react';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

const zoomInStyles = {
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(0.98)',
    zIndex: 1,
  },
  zIndex: 0,
};

const AboutAlbum: FC = () => {
  return (
    <HStack w={'full'}>
      <Flex
        w={'full'}
        maxH={{ lg: '1200x' }}
        direction={{ base: 'column', md: 'row' }}
        gap={{ md: '40px', lg: '0px' }}
      >
        <VStack
          w={'full'}
          justify={'space-between'}
          spacing={{ base: '50px', md: '0px' }}
        >
          <FadeInView delay={0.1}>
            <Image
              src={'./Website/Resume/AboutMe/about-me-1.jpg'}
              alt={'About Img 1'}
              sx={zoomInStyles}
              borderRadius={'10px'}
            />
          </FadeInView>{' '}
          <FadeInView delay={0.1}>
            <Image
              src={'./Website/Resume/AboutMe/about-me-2.jpg'}
              alt={'About Img 2'}
              sx={zoomInStyles}
              borderRadius={'10px'}
            />
          </FadeInView>
        </VStack>
        <Box
          w={'full'}
          mt={{ base: '50px', md: '0px' }}
          ml={{ base: '0px', lg: '50px' }}
          position={'relative'}
        >
          <FadeInView delay={0.1}>
            <Image
              src={'./Website/Resume/AboutMe/about-me-3.jpg'}
              alt={'About Img 3'}
              sx={zoomInStyles}
              borderRadius={'10px'}
            />
          </FadeInView>
        </Box>
      </Flex>
    </HStack>
  );
};

export default AboutAlbum;
