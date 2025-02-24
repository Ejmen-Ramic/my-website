import Page from '../../../../../shared/components/PageWrapper'
import Welcome from './Welcome'
import ChooseToLearn from './TechnicalExpertise'
import FAQ from './FrequentQuestions'
import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import Endorsement from './Endorsement'
import ReasonsToChoose from './ReasonsToChoose'
const HomePage: FC = () => {
  return (
    <Page>
      <VStack spacing={'0px'} w={'full'}>
        <Welcome />
        <ChooseToLearn />
        <ReasonsToChoose />
        {/* <TestimonialContent /> */}
        <Endorsement />
      </VStack>
      <FAQ />
    </Page>
  )
}

export default HomePage
