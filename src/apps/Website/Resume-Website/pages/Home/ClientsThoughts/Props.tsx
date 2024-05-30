import { t } from '@lingui/macro'

type TestimonialProps = {
  title: string
  description: string
  image: string
  name: string
  jobTitle: string
}

const items: TestimonialProps[] = [
  {
    title: 'Efficient Collaborating',
    description: t`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.`,
    image: './Website/Resume/Home/amer-bukvic.png',
    name: 'Datuk Amer Bukvic',
    jobTitle: t`Director at Islamic Development Bank (IsDB)`,
  },
  {
    title: 'Intuitive Design',
    description: t`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.`,
    image: './Website/Resume/Home/halit.jpg',
    name: 'Halit Kayar',
    jobTitle: t`Chief Technology Officer at Sense Sdn. Bhd.`,
  },
  {
    title: 'Mindblowing Service',
    description: t`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.`,
    image: './Website/Resume/Home/thumbnail2.jpg',
    name: 'James Bond',
    jobTitle: t`Secret Coder`,
  },
]

export default items
