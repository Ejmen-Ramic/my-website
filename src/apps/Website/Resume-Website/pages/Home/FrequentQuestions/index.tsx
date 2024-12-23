import { FC, ReactNode } from 'react'
import FAQDesktop from './FAQDesktop'
import FAQMobile from './FAQMobile'
import {
  Heading,
  VStack,
  Text,
  useBreakpointValue,
  Box,
  Stack,
} from '@chakra-ui/react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Trans } from '@lingui/macro'

export type FAQItem = {
  title: ReactNode
  description: ReactNode
}

const items: FAQItem[] = [
  {
    title: <Trans>1. Tell me about yourself.</Trans>,
    description: (
      <Box>
        <Trans>
          I am a <b>software developer</b> with a passion for creating
          <b>intuitive</b> and
          <b>efficient user experiences</b>. I have been working with
          <b>latest languages, frameworks and testing tools</b> for the past few
          years, and I love how these tools enable me to build <b>scalable</b>
          and <b>maintainable</b> applications.
          <br />
          <br /> Outside of work, I enjoy hiking and exploring new places, which
          helps me stay creative and refreshed.
        </Trans>
      </Box>
    ),
  },
  {
    title: <Trans>2. What are your greatest strengths and weaknesses?</Trans>,
    description: (
      <Box>
        <Trans>
          One of my greatest strengths is my ability to <b>learn quickly</b> and
          <b>adapt</b>
          to new technologies. For instance, I picked up Chakra UI on my own and
          have been able to <b>integrate it seamlessly</b> into my projects.
          <br />
          <br /> On the flip side, a weakness of mine is that I can be a bit of
          a <b>perfectionist</b>. Sometimes I spend too much time tweaking small
          details. I am working on balancing my attention to detail with
          efficiency.
        </Trans>
      </Box>
    ),
  },
  {
    title: <Trans>3. Where do you see yourself in five years?</Trans>,
    description: (
      <Box>
        <Trans>
          In five years, I see myself taking on more
          <b>leadership responsibilities</b>, possibly <b>leading</b> a
          development team. I would like to continue honing my
          <b>technical skills</b> while also <b>mentoring</b> junior developers.
          <br />
          <br /> I am also interested in <b>exploring</b> more about system
          architecture and design, <b>contributing</b> to larger strategic
          decisions.
        </Trans>
      </Box>
    ),
  },
  {
    title: (
      <Trans>
        4. Describe a challenging situation at work and how you handled it?
      </Trans>
    ),
    description: (
      <Box>
        <Trans>
          In one of my projects, we had a major issue, right before a product
          launch where our application was not scaling properly under load.{' '}
          <b>I led</b> a small team to identify the bottlenecks.{' '}
          <b>We optimized</b> our database queries and <b>introduced</b> caching
          mechanisms, which significantly <b>improved</b> performance. It was a
          stressful situation, but it taught me a lot about <b>teamwork</b> and{' '}
          <b>problem-solving</b> under pressure.
        </Trans>
      </Box>
    ),
  },
  {
    title: (
      <Trans>
        5. Give me an example of a time when you worked as part of a team.
      </Trans>
    ),
    description: (
      <Box>
        <Trans>
          I worked on a project where we had to develop a{' '}
          <b>complex admin dashboard</b> for the company. I was responsible for
          the frontend using
          <b>React</b> and <b>Chakra UI</b> and wrote tests using the{' '}
          <b>Playwright</b> testing tool, while my teammates handled the
          backend. We had regular sync-ups to ensure our components integrated{' '}
          <b>smoothly</b>. This collaboration not only helped us{' '}
          <b>meet our deadlines</b> but also <b>improved</b> the overall quality
          of the product.
        </Trans>
      </Box>
    ),
  },
  {
    title: (
      <Trans>
        6. Tell me about a time when you had to learn something new quickly.
      </Trans>
    ),
    description: (
      <Box>
        <Trans>
          When we decided to switch to <b>TypeScript</b> at one of the companies
          I worked for, I had to get up to speed quickly as I was one of the{' '}
          <b>key developers</b> on the team. I took an online course, read the
          documentation, and started <b>refactoring</b> small parts of our
          codebase. Within a <b>few weeks</b>, I was comfortable enough to lead
          the transition for our entire frontend team.
        </Trans>
      </Box>
    ),
  },
  {
    title: (
      <Trans>
        7. How do you prioritize your tasks when you have multiple deadlines?
      </Trans>
    ),
    description: (
      <Box>
        <Trans>
          I use a combination of prioritization techniques like the{' '}
          <b>Eisenhower Matrix</b> to categorize tasks by urgency and
          importance. I also break down larger tasks into smaller, manageable
          chunks and use tools like
          <b>Trello</b> or <b>Notion</b> to keep track of progress. This helps
          me <b>stay organized</b> and ensures that I focus on the most critical
          tasks first.
        </Trans>
      </Box>
    ),
  },
  {
    title: (
      <Trans>
        8. A time when you optimized an application for better performance.
      </Trans>
    ),
    description: (
      <Box>
        <Trans>
          We had a data-heavy application that was experiencing slow load times.
          I <b>optimized</b> the code by implementing lazy loading for
          components and using <b>React.memo</b> to prevent unnecessary
          re-renders. On the backend, I optimized our database queries and
          introduced <b>indexing</b>. These changes
          <b>improved</b> the application's <b>performance</b> significantly,
          reducing load times by about <b>40%</b>.
        </Trans>
      </Box>
    ),
  },
  {
    title: <Trans>9. Can you walk me through a project you worked on?</Trans>,
    description: (
      <Box>
        <Trans>
          I worked on an e-commerce platform where we used <b>React</b>,{' '}
          <b>TypeScript</b>, and <b>Chakra UI</b> for the frontend,{' '}
          <b>Next.js</b> for the backend, <b>MongoDB</b> and
          <b>Prisma</b> for the database, and <b>Playwright</b> for writing
          tests. I implemented features like user <b>authentication</b>,{' '}
          <b>product listings</b>, and a<b>checkout page</b>. Using TypeScript,
          I ensured type safety and reduced bugs. We also used Chakra UI to
          create a cohesive and responsive design, which made the site very
          user-friendly.
          <br />
          <br /> Additionally, I <b>collaborated</b> closely with backend
          developers to integrate the frontend with the server-side logic{' '}
          <b>seamlessly</b>, resulting in a smooth and efficient user
          experience. The project was a great <b>success</b>, improving user
          engagement and <b>increasing sales</b> for the platform.
        </Trans>
      </Box>
    ),
  },
  {
    title: <Trans>10. What do you like to do on your free time?</Trans>,
    description: (
      <Box>
        <Trans>
          I love <b>hiking</b>, <b>exploring</b> new places and{' '}
          <b>photographing</b> landscapes, which helps me stay <b>creative</b>{' '}
          and refreshed. I also enjoy working on side projects that involve{' '}
          <b>engineering</b>.
        </Trans>
      </Box>
    ),
  },
]

const FAQ: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <FadeInView>
      <Box
        my={{ base: '60px', lg: '120px' }}
        mx={'auto'}
        maxW={{ base: 'full', lg: '1300px' }}
        w={'full'}
      >
        <VStack w={'full'} spacing={'30px'} textAlign={'center'} px={'16px'}>
          <Stack spacing={'20px'} px={{ base: '10px', md: '40px', lg: '0px' }}>
            <Heading>
              <Trans>Frequently Asked Questions</Trans>
            </Heading>
            <Text>
              <Trans>
                The following list of frequently asked questions by employers
                that may also assist you in getting your questions answered:
              </Trans>
            </Text>
          </Stack>
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
  )
}

export default FAQ
