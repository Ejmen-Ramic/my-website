import { Button, useColorModeValue } from '@chakra-ui/react'
import { BsFillPrinterFill } from 'react-icons/bs'

const PDFFEtcher = () => {
  const onButtonClick = () => {
    fetch('../../../../../../public/Website/pdf-example.pdf')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.blob()
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'pdf-example.pdf'
        document.body.appendChild(alink)
        alink.click()
        document.body.removeChild(alink)
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error)
      })
  }
  return (
    <Button variant={'ghost'} onClick={onButtonClick} color={useColorModeValue('#0B3948', '#98bed5')}>
      <BsFillPrinterFill />
    </Button>
  )
}
export default PDFFEtcher
