import Page from '../../../../../shared/components/PageWrapper';
import Welcome from './Welcome/WelcomePart';
import ChooseToLearn from './TechnicalExpertise./TechnicalExpertise';
import ReasonsToChoose from './ReasonsToCount/ReasonsToChoose';
import TestimonialContent from './Endorsment/TestimonialContent';
import HostFAQ from './FrequentQuestions';
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
const HomePage: FC = () => {
  return (
    <Page>
      <VStack spacing={'0px'} w={'full'}>
        <Welcome />
        <ChooseToLearn />
        <ReasonsToChoose />
        <TestimonialContent />
      </VStack>
      <HostFAQ />
    </Page>
  );
};

export default HomePage;
