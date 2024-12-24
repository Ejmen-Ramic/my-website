import { Trans } from '@lingui/macro'

type TestimonialProps = {
  title: string | JSX.Element
  halfDescription: string | JSX.Element
  description: string | JSX.Element
  image: string
  name: string
  jobTitle: string | JSX.Element
}

export const items: TestimonialProps[] = [
  {
    title: <Trans>Seamless Problem-Solver</Trans>,
    halfDescription: (
      <Trans>
        Ejmen's ability to identify, analyze, and resolve issues efficiently is
        remarkable. Whether it's backend optimization or...
      </Trans>
    ),
    description: (
      <Trans>
        Working with Ejmen has been a game-changer. His ability to identify,
        analyze, and resolve issues efficiently is remarkable. Whether it's
        backend optimization or creating user-friendly interfaces, his
        contributions consistently elevate the project.
      </Trans>
    ),
    image: './Website/Resume/Home/aladin.jpg',
    name: 'Aladin Bouzerd',
    jobTitle: <Trans>Senior Full Stack Developer at Flux Malaysia</Trans>,
  },
  {
    title: <Trans>Innovative Architect</Trans>,
    halfDescription: (
      <Trans>
        Ejmen brings a rare mix of technical expertise and innovative thinking.
        His approach to software engineering...
      </Trans>
    ),
    description: (
      <Trans>
        Ejmen brings a rare mix of technical expertise and innovative thinking.
        His approach to software engineering reflects a deep understanding of
        modern development practices, paired with a unique ability to simplify
        complex problems. He's a true asset to any team.
      </Trans>
    ),
    image: './Website/Resume/Home/halit.jpg',
    name: 'Halit Kayar',
    jobTitle: <Trans>Chief Technology Officer at Sense Malaysia</Trans>,
  },
  {
    title: <Trans>Trustworthy Expert</Trans>,
    halfDescription: (
      <Trans>
        Ejmen is a diligent and gifted coder, but what stuck out to me is his
        integrity. I've seen him operate in several...
      </Trans>
    ),
    description: (
      <Trans>
        Ejmen is a diligent and gifted coder, but what stuck out to me is his
        integrity. I've seen him operate in several contexts. In each case, he
        demonstrated incredible character and professionalism. Especially if
        you're not in the IT field yourself and not sure how things work, having
        someone who you can trust to do things right--and do right by you--is
        invaluable. I recommend him without reservation.
      </Trans>
    ),
    image: './Website/Resume/Home/omar-yunus.jpeg',
    name: 'Omar Yunus',
    jobTitle: <Trans>Co-founder of AfterFund USA</Trans>,
  },
]

export default items
