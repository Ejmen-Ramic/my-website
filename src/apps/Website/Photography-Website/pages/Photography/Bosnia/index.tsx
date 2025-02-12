import { Stack, useColorModeValue } from '@chakra-ui/react'
import Footer from '../../../Shared/FooterPhotography'
import Header from '../../../Shared/Header/Desktop'
import ImageGallery from './ImageGallery'
import { colors } from '../../../../../../shared/components/Hooks/color'

const BosniaAlbum = () => {
  return (
    <Stack w={'full'} bg={useColorModeValue(colors.primary1, colors.primary4)}>
      <Header />
      <ImageGallery />
      <Footer />
    </Stack>
  )
}

export default BosniaAlbum
