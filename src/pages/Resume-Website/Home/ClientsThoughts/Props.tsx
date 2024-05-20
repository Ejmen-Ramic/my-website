type TestimonialProps = {
  title: string // Making title optional
  description: string
  image: string
  name: string
  jobTitle: string
}

const items: TestimonialProps[] = [
  {
    title: 'Efficient Collaborating',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    image: './Website/Resume/Home/amer-bukvic.png',
    name: 'Datuk Amer Bukvic',
    jobTitle: 'Director at Islamic Development Bank (IsDB)',
  },
  {
    title: 'Intuitive Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    image: './Website/Resume/Home/halit.jpg',
    name: 'Halit Kayar',
    jobTitle: 'Chief Technology Officer at Sense Sdn. Bhd.',
  },
  {
    title: 'Mindblowing Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    image: './Website/Resume/Home/thumbnail2.jpg',
    name: 'James Bond',
    jobTitle: 'Secret Coder',
  },
]

export default items
