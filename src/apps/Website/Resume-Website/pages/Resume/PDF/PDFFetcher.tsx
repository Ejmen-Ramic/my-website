import { Button, useColorModeValue, useToast } from '@chakra-ui/react';
import { BsFillPrinterFill } from 'react-icons/bs';
import { useLingui } from '@lingui/react';

// Define supported languages type
type SupportedLanguages = 'en' | 'bs';

// Define PDF paths type
type PDFPaths = {
  [key in SupportedLanguages]: string;
};

const PDFFEtcher = () => {
  const toast = useToast();
  const { i18n } = useLingui();

  const pdfPaths: PDFPaths = {
    en: '/Website/Resume/PDF/ejmen-ramic-resume-en.pdf',
    bs: '/Website/Resume/PDF/ejmen-ramic-resume-bs.pdf',
  };

  const onButtonClick = () => {
    const currentLang = i18n.locale as SupportedLanguages;
    const pdfPath = pdfPaths[currentLang] || pdfPaths.en;

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
        alink.download = `ejmen-ramic-resume-${currentLang}.pdf`;
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
    <Button
      variant='ghost'
      onClick={onButtonClick}
      color={useColorModeValue('blue.800', 'blue.300')}
    >
      <BsFillPrinterFill />
    </Button>
  );
};

export default PDFFEtcher;
