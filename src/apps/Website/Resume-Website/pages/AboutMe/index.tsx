import { VStack } from '@chakra-ui/react'
import AboutIntro from './Intro/AboutIntro'
import SchoolCertificates from './SchoolCertificates'
import OurProgress from './OurProgress/OurProgress'
import Milestones from './Milestone'
import Page from '../../../../../shared/components/PageWrapper'

const AboutPage = () => {
  return (
    <Page>
      <VStack
        spacing={{ base: '100px', md: '100px', lg: '150px' }}
        px={{ base: '35px', lg: '0px' }}
      >
        <AboutIntro />
        {/* <SchoolCertificates /> */}
        {/* <OurProgress /> */}
        {/* <TestimonialEjmen /> */}
        <Milestones />
        {/* <AboutCarousel /> */}
      </VStack>
    </Page>
  )
}

export default AboutPage
