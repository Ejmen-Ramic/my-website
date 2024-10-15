import {
  Box,
  HStack,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
} from '@chakra-ui/react';
import Page from '../../../../../shared/components/PageWrapper';
import SideMenu from './SideMenu';
import Component from './MainContent/Component';
import HookComponent from './MainContent/HookComponent';

const MyCode = () => {
  return (
    <Page>
      <Tabs variant='unstyled' w={'full'}>
        <HStack w={'full'} spacing={4}>
          {/* Side Menu Box */}
          <Box w={'20%'} justifyItems={'flex-start'} alignSelf={'flex-start'}>
            <SideMenu />
          </Box>

          {/* Main Content Box */}
          <Box w={'60%'} p={4}>
            <TabPanels>
              <TabPanel>
                <Component />
              </TabPanel>
              <TabPanel>
                <HookComponent />
              </TabPanel>
            </TabPanels>
          </Box>

          {/* Third Box for additional content */}
          <Box
            w={'20%'}
            bg={'gray.100'}
            p={4}
            justifyItems={'flex-start'}
            alignSelf={'flex-start'}
          >
            {/* Additional content goes here */}
          </Box>
        </HStack>
      </Tabs>
    </Page>
  );
};

export default MyCode;
