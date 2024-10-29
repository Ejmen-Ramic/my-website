import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Image,
  SimpleGrid,
  useDisclosure,
  DialogContent,
  DialogBody,
  IconButton,
  Text,
  HStack,
  DialogRoot,
  DialogBackdrop,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { useSwipeable } from 'react-swipeable';
import { images } from './Props';
import FadeInView from '../../../../../../../shared/components/Hooks/FadeInView';
import { colors } from '../../../../../../../shared/components/Hooks/color';
import { useColorModeValue } from '../../../../../../../components/ui/color-mode';

const ImageGallery: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  const nextImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  }, [currentImageIndex]);

  const prevImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    }
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (open) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, nextImage, prevImage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const ColorDetails = useColorModeValue(colors.black, colors.white);

  return (
    <Box
      px={{ base: '20px', md: '50px', lg: '100px' }}
      mb={{ base: '50px', md: '100px' }}
      mt={'25px'}
    >
      <SimpleGrid columns={[1, 2, 2, 3]} gap={'40px'}>
        {images.map(({ src, details }, index) => (
          <FadeInView delay={0.1} key={index}>
            <Box
              position={'relative'}
              onClick={() => openImage(index)}
              cursor='pointer'
            >
              <Image src={src} alt={`Image ${index + 1}`} />
              <Box
                position={'absolute'}
                top={0}
                left={0}
                w={'full'}
                h={'full'}
                bg={'rgba(0, 0, 0, 0.5)'}
                opacity={0}
                transition={'opacity 0.3s'}
                _hover={{ opacity: [0, 1] }}
                display={['none', 'none', 'flex']}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
                p={4}
              >
                <Text color={colors.white}>{details}</Text>
              </Box>
            </Box>
          </FadeInView>
        ))}
      </SimpleGrid>

      {currentImageIndex !== null && (
        <DialogRoot isOpen={open} onClose={onClose} size={'full'} opacity='0.4'>
          ={' '}
          <DialogContent {...swipeHandlers}>
            <DialogBody
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position='relative'
              flexDirection={'column'}
            >
              <Box
                pl={{ lg: '10px' }}
                pr={{ lg: '190px' }}
                position={'absolute'}
                left={'40px'}
                top={0}
                bottom={0}
                display={['none', 'none', 'none', 'flex']}
                alignItems={'center'}
                justifyContent={'center'}
                _hover={{ opacity: 1 }}
              >
                <IconButton
                  onClick={prevImage}
                  opacity={0}
                  transition='opacity 0.3s'
                  aria-label={'Previous Image'}
                >
                  <ArrowBackIcon />
                </IconButton>
              </Box>
              <Image
                src={images[currentImageIndex].src}
                alt={`Image ${currentImageIndex + 1}`}
                maxH={'95vh'}
                maxW={'100vw'}
              />
              <Box
                pl={{ lg: '190px' }}
                pr={{ lg: '10px' }}
                position={'absolute'}
                right={'40px'}
                top={0}
                bottom={0}
                display={['none', 'none', 'none', 'flex']}
                alignItems={'center'}
                justifyContent={'center'}
                _hover={{ opacity: 1 }}
              >
                <IconButton
                  onClick={nextImage}
                  opacity={0}
                  transition={'opacity 0.3s'}
                  aria-label={'Next Image'}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              <IconButton
                onClick={onClose}
                position={'absolute'}
                top={10}
                right={10}
                zIndex={1}
                aria-label={'Close'}
                bgColor={'transparent'}
                _hover={{
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                display={['block', 'block', 'block', 'none']}
                p={4}
                mt={{ base: 4, md: '50px' }}
                textAlign={'center'}
                color={colors.white}
              >
                <Text fontSize={'lg'} color={ColorDetails}>
                  {images[currentImageIndex].details}
                </Text>
                <HStack
                  mt={'20%'}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <IconButton
                    onClick={prevImage}
                    aria-label={'Previous Image'}
                    mx={2}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  <IconButton
                    onClick={nextImage}
                    aria-label={'Next Image'}
                    mx={2}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </HStack>
              </Box>
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      )}
    </Box>
  );
};

export default ImageGallery;
