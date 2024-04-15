import React from "react"
import OurProgress from "./OurProgress/OurProgress"
import TestimonialEjmen from "./Testimonial/TestimonialEjmen"
import TestimonialMaimul from "./Testimonial/TestimonialMaimul"
import Milestones from "./Milestone/Milestone"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AboutIntro from "./Intro/AboutIntro"
import { VStack } from "@chakra-ui/react"

const About: React.FC = () => {
  return (
    <>
      <Header />
      <VStack
        spacing={{ base: "100px", md: "100px", lg: "150px" }}
        px={{ base: "35px", lg: "0px" }}
      >
        <AboutIntro />
        <OurProgress />
        <TestimonialEjmen />
        <TestimonialMaimul />
        <Milestones />
        {/* <AboutCarousel /> */}
      </VStack>
      <Footer />
    </>
  )
}

export default About
