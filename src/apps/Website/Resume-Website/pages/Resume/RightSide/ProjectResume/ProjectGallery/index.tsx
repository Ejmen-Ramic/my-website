import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Text,
  HStack,
  useColorModeValue,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { GrGallery } from 'react-icons/gr';
import { useSwipeable } from 'react-swipeable';
import { colors } from '../../../../../../../../shared/components/Hooks/color';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    details: string;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openGallery = () => {
    setCurrentImageIndex(0);
    onOpen();
  };

  const nextImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  }, [currentImageIndex, images.length]);

  const prevImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    }
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
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
  }, [isOpen, nextImage, prevImage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const ColorDetails = useColorModeValue(colors.black, colors.white);
  const ToolTipColor = useColorModeValue(colors.white, colors.black);
  const GalleryIconColor = useColorModeValue('#02bece', '#ed2496');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Box>
      <Tooltip
        bg={useColorModeValue('#0B3948', '#98bed5')}
        borderRadius={'5px'}
        label={<Text color={ToolTipColor}>Gallery</Text>}
      >
        <Button
          leftIcon={<GrGallery fontSize={'17px'} />}
          onClick={openGallery}
          variant={'ghost'}
          p={0}
          color={useColorModeValue('#0b3948', 'teal.400')}
          _hover={{
            bg: 'transparent',
            color: GalleryIconColor,
            transform: 'scale(1.1)',
          }}
          transition={'all 0.2s'}
        />
      </Tooltip>
      {currentImageIndex !== null && (
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay opacity={'0.4'} />
          <ModalContent {...swipeHandlers}>
            <ModalBody
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position={'relative'}
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
                _hover={{ '> button': { opacity: 1 } }}
              >
                <IconButton
                  icon={<ArrowBackIcon />}
                  onClick={prevImage}
                  opacity={0}
                  transition={'opacity 0.3s'}
                  aria-label={'Previous Image'}
                />
              </Box>
              <Image
                src={images[currentImageIndex].src}
                alt={`Image ${currentImageIndex + 1}`}
                maxH={'95vh'}
                maxW={'100vw'}
                px={'120px'}
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
                _hover={{ '> button': { opacity: 1 } }}
              >
                <IconButton
                  icon={<ArrowForwardIcon />}
                  onClick={nextImage}
                  opacity={0}
                  transition={'opacity 0.3s'}
                  aria-label={'Next Image'}
                />
              </Box>
              <IconButton
                icon={<CloseIcon />}
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
              />
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
                    icon={<ArrowBackIcon />}
                    onClick={prevImage}
                    aria-label={'Previous Image'}
                    mx={2}
                  />
                  <IconButton
                    icon={<ArrowForwardIcon />}
                    onClick={nextImage}
                    aria-label={'Next Image'}
                    mx={2}
                  />
                </HStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ImageGallery;
