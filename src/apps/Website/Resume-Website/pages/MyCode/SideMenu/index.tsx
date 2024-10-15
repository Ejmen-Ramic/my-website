import { VStack, Text, Icon, HStack, Box } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { menuItems } from './Props';
import { useLocation } from 'react-router-dom';
import { FC, useState } from 'react';
import { TabList, Tab } from '@chakra-ui/react';

const SideMenu: FC = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <VStack w={'full'} p={'20px'} alignItems={'start'} justify={'flex-start'}>
      <TabList flexDirection={'column'}>
        {menuItems.map(({ icon, title, link }, index) => (
          <Tab
            w={'full'}
            justifyContent={'start'}
            key={title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            isDisabled={location.pathname === link}
          >
            <HStack as={'button'} w={'full'}>
              <Box
                h={'30px'}
                w={'30px'}
                borderWidth={'1px'}
                borderRadius={'3px'}
                borderColor={'black'}
                _selected={{
                  bg: '#02bece',
                }}
                bg={hoveredIndex === index ? '#02bece' : 'transparent'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background-color 0.3s ease'}
              >
                {icon && <Icon as={icon} />}
              </Box>
              <Text
                transition={'font-weight 0.3s'}
                _selected={{
                  fontWeight: 'bold',
                }}
                fontWeight={hoveredIndex === index ? 'bold' : 'none'}
              >
                <Trans>{title}</Trans>
              </Text>
            </HStack>
          </Tab>
        ))}
      </TabList>
    </VStack>
  );
};

export default SideMenu;
