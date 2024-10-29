import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FAQItem } from '.';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';
const FAQItemBox: FC<FAQItem> = ({ title, description }) => {
  const ColorModeValueFAQ = useColorModeValue(colors.black, colors.white);
  return (
    <AccordionItem
    // w={'full'} overflow={'none'} border={'0px'}
    >
      {() => (
        <>
          <AccordionItemTrigger
          // display={'flex'}
          // padding={'12px'}
          // border={`1px solid ${ColorModeValueFAQ}`}
          // borderRadius={'4px'}
          // marginBottom={'16px'}
          // height={'48px'}
          // w={'full'}
          >
            <Box as={'span'} flex={'1'} textAlign={'left'} w={'full'}>
              {title}
            </Box>
            {/* <AccordionIcon /> */}
          </AccordionItemTrigger>

          <AccordionItemContent
          // w={'full'} overflow={'unset'}
          >
            {description}
          </AccordionItemContent>
        </>
      )}
    </AccordionItem>
  );
};

export default FAQItemBox;
