import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, IconButton, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { colors } from '../Hooks/color';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position={'fixed'}
      bottom={'40px'}
      right={'40px'}
      opacity={showButton ? 1 : 0}
      visibility={showButton ? 'visible' : 'hidden'}
      transition={'opacity 0.3s, visibility 0.3s'}
      zIndex={100}
      data-testid={'scroll-to-top-button'}
    >
      <IconButton
        aria-label={'Scroll to Top'}
        icon={<Icon as={ArrowUpIcon} />}
        borderRadius={'50%'}
        width={'40px'}
        height={'40px'}
        bgColor={'#02bece'}
        color={colors.white}
        _hover={{ bgColor: colors.white, color: colors.black }}
        onClick={scrollToTop}
      />
    </Box>
  );
};

export default ScrollToTopButton;
