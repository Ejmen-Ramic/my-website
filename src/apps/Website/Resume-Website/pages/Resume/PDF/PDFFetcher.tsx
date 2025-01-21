import {
  Button,
  useColorModeValue,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { BsFillPrinterFill } from 'react-icons/bs';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Trans } from '@lingui/macro';

type SupportedLanguages = 'en' | 'bs';
type PDFPaths = {
  [key in SupportedLanguages]: string;
};

const PDFFEtcher = () => {
  const toast = useToast();

  const pdfPaths: PDFPaths = {
    en: '/Website/Resume/PDF/ejmen-ramic-resume-en.pdf',
    bs: '/Website/Resume/PDF/ejmen-ramic-resume-bs.pdf',
  };

  const handleDownload = (selectedLang: SupportedLanguages) => {
    const pdfPath = pdfPaths[selectedLang];

    fetch(pdfPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = `ejmen-ramic-resume-${selectedLang}.pdf`;
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink);
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
        toast({
          title: 'Error fetching PDF',
          description:
            'There was an error downloading the PDF. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={'ghost'}
        color={useColorModeValue('blue.800', 'blue.300')}
        rightIcon={<ChevronDownIcon />}
        data-testid={'pdfFetcher'}
      >
        <BsFillPrinterFill />
      </MenuButton>
      <MenuList minW={'200px'}>
        <MenuItem onClick={() => handleDownload('en')}>
          <Trans>English Version</Trans>
        </MenuItem>
        <MenuItem onClick={() => handleDownload('bs')}>
          <Trans>Bosnian Version</Trans>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PDFFEtcher;
