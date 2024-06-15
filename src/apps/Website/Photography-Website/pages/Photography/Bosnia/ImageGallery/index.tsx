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
      <SimpleGrid columns={[1, 2, 3]} spacing={'40px'}>
        {images.map((src, index) => (
          <FadeInView delay={0.1} key={index}>
            <Box onClick={() => openImage(index)} cursor='pointer'>
              <Image src={src} alt={`Image ${index + 1}`} />
            </Box>
          </FadeInView>
        ))}
      </SimpleGrid>

      {currentImageIndex !== null && (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
          <ModalOverlay />
          <ModalContent {...swipeHandlers}>
            <ModalBody display='flex' alignItems='center' justifyContent='center'>
              <IconButton
                icon={<ArrowBackIcon />}
                onClick={prevImage}
                position={'absolute'}
                left={10}
                top={{ base: '75%', md: '50%' }}
                transform={'translateY(-50%)'}
                zIndex={1}
                aria-label={'Previous Image'}
              />
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                maxH={'95vh'}
                maxW={'100vw'}
              />
              <IconButton
                icon={<ArrowForwardIcon />}
                onClick={nextImage}
                position={'absolute'}
                right={10}
                top={{ base: '75%', md: '50%' }}
                transform={'translateY(-50%)'}
                zIndex={1}
                aria-label={'Next Image'}
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                position={'absolute'}
                top={10}
                right={10}
                zIndex={1}
                aria-label='Close'
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  )
}

export default ImageGallery
