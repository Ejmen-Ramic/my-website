import Footer from './Footer/Footer';
import Header from './Header';
import PageWrapper from '../Hooks/PageWrapper';
import { Box, StackProps } from '@chakra-ui/react';

interface PageWrapperProps extends StackProps {
  children: React.ReactNode;
  isFooterDisabled?: boolean;
  isHeaderDisabled?: boolean;
  isStickyHeader?: boolean;
}

const Page = ({
  children,
  isFooterDisabled = false,
  isHeaderDisabled = false,
  isStickyHeader = false,
}: PageWrapperProps) => {
  return (
    <PageWrapper
      display={'flex'}
      flexDirection={'column'}
      minH={'100vh'}
      position={'relative'}
    >
      {!isHeaderDisabled && (
        <Box
          position={isStickyHeader ? 'sticky' : 'relative'}
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          bg={'white'}
          boxShadow={isStickyHeader ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'}
        >
          <Header isStickyHeader={isStickyHeader} />
        </Box>
      )}
      <Box flex={'1'}>{children}</Box>
      {!isFooterDisabled && <Footer />}
    </PageWrapper>
  );
};

export default Page;
