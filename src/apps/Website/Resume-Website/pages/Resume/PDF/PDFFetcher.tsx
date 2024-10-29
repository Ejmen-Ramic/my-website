import { Button, useToast } from '@chakra-ui/react';
import { BsFillPrinterFill } from 'react-icons/bs';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';
const PDFFEtcher = () => {
  const toast = useToast();

  const onButtonClick = () => {
    fetch('/Website/pdf-example.pdf')
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
        alink.download = 'pdf-example.pdf';
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
