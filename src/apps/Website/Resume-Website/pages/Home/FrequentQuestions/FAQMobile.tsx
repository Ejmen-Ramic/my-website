import { Accordion } from '@chakra-ui/react'
import { FC } from 'react'
import FAQItemBox from './FAQItemBox'
import { FAQItem } from '.'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'

type Props = {
  items: FAQItem[]
}

const FAQMobile: FC<Props> = ({ items }) => {
  return (
    <Accordion w={'full'} allowToggle>
      {items.map(({ title, description }, t) => (
        <FadeInView delay={0.1}>
          <FAQItemBox key={`mobile_item_${t}`} title={title} description={description} />
        </FadeInView>
      ))}
    </Accordion>
  )
}

export default FAQMobile
