import React, { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Image,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Text,
  HStack,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons'
import { useSwipeable } from 'react-swipeable'
import { images } from './Props'
import FadeInView from '../../../../../../../shared/components/Hooks/FadeInView'

const ImageGallery: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openImage = (index: number) => {
    setCurrentImageIndex(index)
    onOpen()
  }

  const nextImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length)
    }
  }, [currentImageIndex])

  const prevImage = useCallback(() => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
    }
  }, [currentImageIndex])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
        if (event.key === 'ArrowRight') {
          nextImage()
        } else if (event.key === 'ArrowLeft') {
          prevImage()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, nextImage, prevImage])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <Box px={{ base: '20px', md: '50px', lg: '100px' }} mb={{ base: '50px', md: '100px' }} mt={'25px'}>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={'40px'}>
        {images.map(({ src, details }, index) => (
          <FadeInView delay={0.1} key={index}>
            <Box position={'relative'} onClick={() => openImage(index)} cursor='pointer'>
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
                color={'white'}
                textAlign={'center'}
                p={4}
              >
                <Text>{details}</Text>
              </Box>
            </Box>
          </FadeInView>
        ))}
      </SimpleGrid>

      {currentImageIndex !== null && (
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay opacity='0.4' />
          <ModalContent {...swipeHandlers}>
            <ModalBody
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
                _hover={{ '> button': { opacity: 1 } }}
              >
                <IconButton
                  icon={<ArrowBackIcon />}
                  onClick={prevImage}
                  opacity={0}
                  transition='opacity 0.3s'
                  aria-label={'Previous Image'}
                />
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
                _hover={{ transform: 'scale(1.2)', transition: 'transform 0.3s ease' }}
              />
              <Box
                display={['block', 'block', 'block', 'none']}
                p={4}
                mt={{ base: 4, md: '50px' }}
                textAlign={'center'}
                color={'white'}
              >
                <Text fontSize={'lg'} color={'black'}>
                  {images[currentImageIndex].details}
                </Text>
                <HStack mt={'20%'} display={'flex'} justifyContent={'space-between'}>
                  <IconButton icon={<ArrowBackIcon />} onClick={prevImage} aria-label={'Previous Image'} mx={2} />
                  <IconButton icon={<ArrowForwardIcon />} onClick={nextImage} aria-label={'Next Image'} mx={2} />
                </HStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  )
}

export default ImageGallery
