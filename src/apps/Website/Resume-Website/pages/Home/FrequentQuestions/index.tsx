import { FC, ReactNode } from 'react';
import FAQDesktop from './FAQDesktop';
import FAQMobile from './FAQMobile';
import {
  Heading,
  VStack,
  Text,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { t, Trans } from '@lingui/macro';

export type FAQItem = {
  title: ReactNode;
  description: ReactNode;
};

const items: FAQItem[] = [
  {
    title: t`1. Tell me about yourself.`,
    description: t`I'm a software developer with a passion for creating intuitive and efficient user experiences. I've been working with latest languages, frameworks and testing tools for the past few years, and I love how these tools enable me to build scalable and maintainable applications. Outside of work, I enjoy hiking and exploring new places, which helps me stay creative and refreshed.`,
  },
  {
    title: t`2. What are your greatest strengths and weaknesses?`,
    description: (
      <Box>
        <Trans>
          One of my greatest strengths is my ability to learn quickly and adapt
          to new technologies. For instance, I picked up Chakra UI on my own and
          have been able to integrate it seamlessly into my projects.
          <br />
          <br /> On the flip side, a weakness of mine is that I can be a bit of
          a perfectionist. Sometimes I spend too much time tweaking small
          details. I'm working on balancing my attention to detail with
          efficiency.
        </Trans>
      </Box>
    ),
  },
  {
    title: t`3. Where do you see yourself in five years?`,
    description: t`In five years, I see myself taking on more leadership responsibilities, possibly leading a development team. I'd like to continue honing my technical skills while also mentoring junior developers. I'm also interested in exploring more about system architecture and design, contributing to larger strategic decisions.`,
  },
  {
    title: t`4. Describe a challenging situation at work and how you handled it?`,
    description: t`In one of my projects, we had a major issue right before a product launch where our application wasn't scaling properly under load. I led a small team to identify the bottlenecks. We optimized our database queries and introduced caching mechanisms, which significantly improved performance. It was a stressful situation, but it taught me a lot about teamwork and problem-solving under pressure`,
  },
  {
    title: t`5. Give me an example of a time when you worked as part of a team.`,
    description: t`I worked on a project where we had to develop a complex admin dashboard for the company. I was responsible for the frontend using React and Chakra UI and wrote tests using the Playwright testing tool, while my teammates handled the backend. We had regular sync-ups to ensure our components integrated smoothly. This collaboration not only helped us meet our deadlines but also improved the overall quality of the product.`,
  },
  {
    title: t`6. Tell me about a time when you had to learn something new quickly.`,
    description: t`When we decided to switch to TypeScript at one of the companies I worked for, I had to get up to speed quickly as I was one of the key developers on the team. I took an online course, read the documentation, and started refactoring small parts of our codebase. Within a few weeks, I was comfortable enough to lead the transition for our entire frontend team.`,
  },
  {
    title: t`7. How do you prioritize your tasks when you have multiple deadlines?`,
    description: t`I use a combination of prioritization techniques like the Eisenhower Matrix to categorize tasks by urgency and importance. I also break down larger tasks into smaller, manageable chunks and use tools like Trello or Notion to keep track of progress. This helps me stay organized and ensures that I focus on the most critical tasks first.`,
  },
  {
    title: t`8. A time when you optimized an application for better performance.`,
    description: t`We had a data-heavy application that was experiencing slow load times. I optimized the code by implementing lazy loading for components and using React.memo to prevent unnecessary re-renders. On the backend, I optimized our database queries and introduced indexing. These changes improved the application's performance significantly, reducing load times by about 40%.`,
  },
  {
    title: t`9. Can you walk me through a project you worked on?`,
    description: (
      <Box>
        <Trans>
          I worked on an e-commerce platform where we used React, TypeScript,
          and Chakra UI for the frontend, Next.js for the backend, MongoDB and
          Prisma for the database, and Playwright for writing tests. I
          implemented features like user authentication, product listings, and a
          checkout page. Using TypeScript, I ensured type safety and reduced
          bugs. We also used Chakra UI to create a cohesive and responsive
          design, which made the site very user-friendly.
          <br />
          <br /> Additionally, I collaborated closely with backend developers to
          integrate the frontend with the server-side logic seamlessly,
          resulting in a smooth and efficient user experience. The project was a
          great success, improving user engagement and increasing sales for the
          platform.
        </Trans>
      </Box>
    ),
  },
  {
    title: t`10. Tell us about a time when you had to learn something new quickly.`,
    description: t`When we decided to switch from JavaScript and CSS to TypeScript and Chakra UI in my previous job, I had to get up to speed quickly as I was one of the key developers on the team. I took an online course, read the documentation, and started refactoring small parts of our codebase. Within a few weeks, I was comfortable enough to lead the transition for our entire frontend team.`,
  },
];

const FAQ: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <FadeInView>
      <Box
        my={{ base: '60px', lg: '120px' }}
        mx={'auto'}
        maxW={{ base: 'full', lg: '1300px' }}
        w={'full'}
      >
        <VStack w={'full'} spacing={'30px'} textAlign={'center'} px={'16px'}>
          <Box px={{ base: '10px', md: '0px' }}>
            <Heading>
              <Trans>Frequently Asked Questions</Trans>
            </Heading>
          </Box>
          <Text>
            <Trans>
              The following list of frequently asked questions by employers that
              may also assist you in getting your questions answered:
            </Trans>
          </Text>
        </VStack>
        <VStack mt={'50px'} px={{ base: '20px', md: '50px' }}>
          {isMobile ? (
            <FAQMobile items={items} />
          ) : (
            <FAQDesktop items={items} />
          )}
        </VStack>
      </Box>
    </FadeInView>
  );
};

export default FAQ;
