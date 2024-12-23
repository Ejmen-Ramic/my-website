import { t } from '@lingui/macro';

type TestimonialProps = {
  title: string;
  description: string;
  image: string;
  name: string;
  jobTitle: string;
};

const items: TestimonialProps[] = [
  {
    title: 'Seamless Problem-Solver',
    description: t`Working with Ejmen has been a game-changer. His ability to identify, analyze, and resolve issues efficiently is remarkable. Whether it's backend optimization or creating user-friendly interfaces, his contributions consistently elevate the project.`,
    image: './Website/Resume/Home/aladin.jpg',
    name: 'Aladin Bouzerd',
    jobTitle: t`Senior Full Stack Developer at Flux Malaysia`,
  },
  {
    title: 'Innovative Architect',
    description: t`Ejmen brings a rare mix of technical expertise and innovative thinking. His approach to software engineering reflects a deep understanding of modern development practices, paired with a unique ability to simplify complex problems. He's a true asset to any team.`,
    image: './Website/Resume/Home/halit.jpg',
    name: 'Halit Kayar',
    jobTitle: t`Chief Technology Officer at Sense Malaysia`,
  },
  {
    title: 'Trustworthy Expert',
    description: t`Ejmen is a diligent and gifted coder, but what stuck out to me is his integrity. I've seen him operate in several contexts. In each case, he demonstrated incredible character and professionalism. Especially if you're not in the IT field yourself and not sure how things work, having someone who you can trust to do things right--and do right by you--is invaluable. I recommend him without reservation.`,
    image: './Website/Resume/Home/omar-yunus.jpeg',
    name: 'Omar Yunus',
    jobTitle: t`Co-founder of AfterFund USA`,
  },
];

export default items;
