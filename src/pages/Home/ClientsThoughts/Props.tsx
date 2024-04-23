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
    image: './Website/Home/thumbnail2.jpg',
    name: 'Datuk Amer Bukvic',
    jobTitle: 'Director at Islamic Development Bank (IsDB)',
  },
  {
    title: 'Intuitive Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    image: './Website/Home/thumbnail2.jpg',
    name: 'Halit Kayar',
    jobTitle: 'Chief Technology Officer',
  },
  {
    title: 'Mindblowing Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    image: './Website/Home/thumbnail2.jpg',
    name: 'James Bond',
    jobTitle: 'Secret Coder',
  },
]

export default items
