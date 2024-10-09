import React from 'react'
import OurProgress from './OurProgress/OurProgress'
import Milestones from './Milestone'
import Footer from '../../../../../shared/components/PageWrapper/Footer/Footer'
import AboutIntro from './Intro/AboutIntro'
import { VStack } from '@chakra-ui/react'
import SchoolCertificates from './SchoolCertificates'
import Header from '../../../../../shared/components/PageWrapper/Header'

const About: React.FC = () => {
 
  return (
    <>
      <Header />
      <VStack spacing={{ base: '100px', md: '100px', lg: '150px' }} px={{ base: '35px', lg: '0px' }}>
        <AboutIntro />
        <SchoolCertificates />
        <OurProgress />
        {/* <TestimonialEjmen /> */}
        <Milestones />
        {/* <AboutCarousel /> */}
      </VStack>
      <Footer />
    </>
  )
}

export default About
