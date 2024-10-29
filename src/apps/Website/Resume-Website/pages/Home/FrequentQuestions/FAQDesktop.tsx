import { FC } from 'react';
import { FAQItem } from '.';
import { HStack, Accordion, AccordionRoot } from '@chakra-ui/react';
import FAQItemBox from './FAQItemBox';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

type Props = {
  items: FAQItem[];
};

const divide = (items: FAQItem[]) => {
  const middleIndex = Math.floor(items.length / 2);
  const list1 = items.slice(0, middleIndex);
  const list2 = items.slice(middleIndex);

  return [list1, list2];
};

const FAQDesktop: FC<Props> = ({ items }) => {
  const divided = divide(items);

  return (
    <HStack w={'full'} alignItems={'start'} gap={'32px'}>
      {divided.map((items, i) => {
        return (
          <AccordionRoot key={`desktop_${i}`} w={'full'} allowMultiple>
            {items.map(({ title, description }, j) => (
              <FadeInView delay={0.1}>
                <FAQItemBox
                  key={`desktop_${i}_item_${j}`}
                  title={title}
                  description={description}
                />
              </FadeInView>
            ))}
          </AccordionRoot>
        );
      })}
    </HStack>
  );
};

export default FAQDesktop;
