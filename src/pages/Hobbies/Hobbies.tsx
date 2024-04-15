import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import MakeMoney from "./MakeMoney/MakeMoney"
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam"
import WorkersTestimonial from "./WorkersReview/WorkersTestimonial"

const Hobbies: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <MakeMoney />
      <WorkersTestimonial />
      <JoinOurTeam />
      <Footer />
    </>
  )
}

export default Hobbies
