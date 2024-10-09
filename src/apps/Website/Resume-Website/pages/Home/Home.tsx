import React from 'react'
import Footer from '../../../../../shared/components/PageWrapper/Footer/Footer'
import Welcome from './Welcome/WelcomePart'
import ChooseToLearn from './TechnicalExpertise./TechnicalExpertise'
import ReasonsToChoose from './ReasonsToCount/ReasonsToChoose'
import TestimonialContent from './ClientsThoughts/TestimonialContent'
import HostFAQ from './FrequentQuestions'
import { VStack } from '@chakra-ui/react'
import Header from '../../../../../shared/components/PageWrapper/Header'

const Home: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <VStack spacing={'0px'} w={'full'}>
        <Welcome />
        <ChooseToLearn />
        <ReasonsToChoose />
        <TestimonialContent />
      </VStack>
      <HostFAQ />
      <Footer />
    </>
  )
}

export default Home
