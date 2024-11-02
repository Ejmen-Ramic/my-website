// PDFFetcher.tsx
import { Button, useColorModeValue } from '@chakra-ui/react'
import { FaDownload } from 'react-icons/fa'
import { pdf } from '@react-pdf/renderer'
import PDFResume from './PDFResume'
import { Trans } from '@lingui/macro'

const PDFFetcher = () => {
  const handleDownload = async () => {
    try {
      const blob = await pdf(<PDFResume />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Ejmen-Ramic-Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <Button
      variant={'ghost'}
      color={useColorModeValue('#0B3948', '#98bed5')}
      onClick={handleDownload}
    >
      <FaDownload style={{ marginRight: '10px' }} />
      <Trans>Download PDF</Trans>
    </Button>
  )
}

export default PDFFetcher
