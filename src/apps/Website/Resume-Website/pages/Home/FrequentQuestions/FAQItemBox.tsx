import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import { FAQItem } from '.'
import { colors } from '../../../../../../shared/components/Hooks/color'

const FAQItemBox: FC<FAQItem> = ({ title, description }) => {
  const ColorModeValueFAQ = useColorModeValue(colors.black, colors.white)
  return (
    <AccordionItem w={'full'} overflow={'none'} border={'0px'}>
      {() => (
        <>
          <AccordionButton
            display={'flex'}
            p={'12px'}
            border={`1px solid ${ColorModeValueFAQ}`}
            borderRadius={'4px'}
            mb={'16px'}
            h={{base:'62px', lg:'48px'}}
            w={'full'}
          >
            <Box as={'span'} flex={'1'} textAlign={'left'} w={'full'}>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel w={'full'} overflow={'unset'}>
            {description}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

export default FAQItemBox
