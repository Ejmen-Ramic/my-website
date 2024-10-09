import React from 'react'
import Footer from '../../../../../shared/components/PageWrapper/Footer/Footer'

import MakeMoney from './MakeMoney/MakeMoney'
import JoinOurTeam from './JoinOurTeam/JoinOurTeam'
import WorkersTestimonial from './WorkersReview/WorkersTestimonial'
import Header from '../../../../../shared/components/PageWrapper/Header'

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
