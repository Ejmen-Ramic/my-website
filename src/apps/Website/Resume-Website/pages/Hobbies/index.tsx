import Page from "../../../../../shared/components/PageWrapper"
import MakeMoney from "./MakeMoney/MakeMoney"
import WorkersTestimonial from "./WorkersReview/WorkersTestimonial"
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam"
import { FC } from "react"

const HobbiesPage:FC = () => {
  return (
    <Page>
      <MakeMoney />
      <WorkersTestimonial />
      <JoinOurTeam />
    </Page>
  )
}

export default HobbiesPage
