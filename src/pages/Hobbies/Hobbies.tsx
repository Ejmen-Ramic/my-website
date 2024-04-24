import React from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer/Footer'

import MakeMoney from './MakeMoney/MakeMoney'
import JoinOurTeam from './JoinOurTeam/JoinOurTeam'
import WorkersTestimonial from './WorkersReview/WorkersTestimonial'

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
