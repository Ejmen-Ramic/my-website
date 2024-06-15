import { Stack, useColorModeValue } from '@chakra-ui/react'
import Footer from '../../../../../../shared/components/Footer/FooterPhotography'
import Header from '../../../../../../shared/components/Header/HeaderPhotography'
import ImageGallery from './ImageGallery'

const BosniaAlbum = () => {
  return (
    <Stack w={'full'} bg={useColorModeValue('#ede9e3', '#2b333d')}>
      <Header />
      <ImageGallery />
      <Footer />
    </Stack>
  )
}

export default BosniaAlbum
