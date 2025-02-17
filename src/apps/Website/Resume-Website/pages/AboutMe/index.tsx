import { VStack } from '@chakra-ui/react'
import AboutIntro from './Intro/AboutIntro'
// import SchoolCertificates from './SchoolCertificates'
// import OurProgress from './OurProgress/OurProgress'
import Milestones from './Milestone'
import Page from '../../../../../shared/components/PageWrapper'
import EngineeringSKills from './EngineeringSkills'
import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <Page>
      <VStack spacing={{ base: '100px', md: '100px', lg: '150px' }}>
        <AboutIntro />
        {/* <SchoolCertificates /> */}
        {/* <OurProgress /> */}
        {/* <TestimonialEjmen /> */}
        <EngineeringSKills />
        <Milestones />
        {/* <AboutCarousel /> */}
      </VStack>
    </Page>
  )
}

export default AboutPage
