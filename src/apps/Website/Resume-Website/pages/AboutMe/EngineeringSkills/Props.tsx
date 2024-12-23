import { Box, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import {
  FaCode,
  FaCubes,
  FaDatabase,
  FaPaintBrush,
  FaTools,
} from 'react-icons/fa'
import { SiChakraui, SiFramework } from 'react-icons/si'
import { RiAdminFill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'

type Props = {
  title: string | JSX.Element
  icon?: React.ReactNode
  detail?: string | JSX.Element | ((color: string) => JSX.Element)
  popoverHeader?: string
  popoverBody?: string | JSX.Element | ((color: string) => JSX.Element)
}

export const itemsTechSkills: Props[] = [
  {
    title: <Trans>Languages</Trans>,
    icon: <FaCode />,
    detail: 'TypeScript, JavaScript, CSS',
    popoverHeader: 'TypeScript, JavaScript, CSS',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> TypeScript: </b>
          </Box>
          Enhances JavaScript with static typing, ensuring better
          maintainability and catching bugs early during development. Commonly
          used with React and Next.js for creating scalable web apps.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> JavaScript: </b>
          </Box>
          Core language for implementing interactivity, handling user events,
          and integrating APIs in web apps.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> CSS: </b>
          </Box>
          Used to style components and ensure responsive, visually appealing
          user interfaces.
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Libraries</Trans>,
    icon: <FaCubes />,
    detail: 'Chakra UI, ShadCN UI, Tailwind, Framer Motion',
    popoverHeader: 'Chakra UI, ShadCN UI, Tailwind, Framer Motion',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Chakra UI: </b>
          </Box>
          Provides pre-built, accessible UI components and theming capabilities
          for rapid development. Used to create consistent and polished designs.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> ShadCN UI: </b>
          </Box>
          A customizable design system built with Tailwind CSS, ideal for modern
          web app interfaces.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Tailwind CSS: </b>
          </Box>
          Utility-first CSS framework for building responsive layouts and
          customizing UI components with minimal effort.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Framer Motion: </b>
          </Box>
          Adds smooth animations and transitions to web applications, improving
          user experience and interactivity.
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Frameworks</Trans>,
    icon: <SiFramework />,
    detail: 'React, Node.js, WordPress, Next.js',
    popoverHeader: 'React, Node.js, WordPress, Next.js',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> React: </b>
          </Box>
          Builds interactive, component-based UIs efficiently with reusable
          logic. Core to creating dynamic web applications.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Node.js: </b>
          </Box>
          Handles server-side logic, RESTful APIs, and real-time functionalities
          in web applications.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> WordPress: </b>
          </Box>
          Useful for creating CMS-driven web apps with custom themes and
          plugins.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Next.js: </b>
          </Box>
          Extends React with server-side rendering (SSR), static site generation
          (SSG), and API routes for performance and SEO optimization.
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Tools</Trans>,
    icon: <FaTools />,
    detail: 'Git, Jest, Cypress, Playwright, Jira, Trello, Notion, Slack',
    popoverHeader:
      'Git, Jest, Cypress, Playwright, Jira, Trello, Notion, Slack',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Git: </b>
          </Box>{' '}
          Version control for managing codebase changes and collaboration among
          teams.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Jest: </b>
          </Box>
          Framework for unit testing, ensuring the reliability of code logic.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Cypress: </b>{' '}
          </Box>
          End-to-end testing for user flows and UI interactions.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Playwright: </b>
          </Box>{' '}
          Automated testing across browsers for consistent app behavior.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Jira: </b>
          </Box>{' '}
          Tracks project tasks, bugs, and progress in development workflows.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Trello: </b>
          </Box>
          Manages development tasks and organizes sprints visually.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Notion: </b>
          </Box>{' '}
          Documents and collaborates on web app development processes.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Slack: </b>
          </Box>{' '}
          Facilitates team communication and integrations with development
          tools.
          <br />
          <br />
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Databases</Trans>,
    icon: <FaDatabase />,
    detail: 'MongoDB, MySQL, Prisma',
    popoverHeader: 'MongoDB, MySQL, Prisma',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> MongoDB: </b>
          </Box>{' '}
          NoSQL database for flexible, schema-less storage of application data,
          ideal for real-time apps.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> MySQL: </b>
          </Box>{' '}
          Relational database used for structured data and complex queries in
          web applications.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Prisma: </b>
          </Box>{' '}
          Simplifies database access and management with an ORM tailored for
          modern TypeScript-based applications.
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Graphic Design</Trans>,
    icon: <FaPaintBrush />,
    detail: 'Adobe Photoshop, Premiere, Lightroom, Figma',
    popoverHeader: 'Adobe Photoshop, Premiere, Lightroom, Figma',
    popoverBody: (color: string) => (
      <Text>
        <Trans>
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Adobe Photoshop: </b>
          </Box>
          Creates custom assets, icons, and graphics for web interfaces.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Adobe Premiere: </b>
          </Box>{' '}
          Edits promotional videos or UI demonstration clips for apps.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Adobe Lightroom: </b>
          </Box>{' '}
          Enhances photos for web content or marketing visuals.
          <br />
          <br />
          <b>•</b>
          <Box as={'span'} fontWeight={'bold'} color={color}>
            <b> Figma: </b>
          </Box>{' '}
          Designs wireframe, prototypes, and collaborative UI/UX workflows for
          web apps.
        </Trans>
      </Text>
    ),
  },
]

// Items for Feature Projects
export const itemsFeatureProjects: Props[] = [
  {
    title: <Trans>Migration to Chakra UI</Trans>,
    icon: <SiChakraui />,
    detail: (color: string) => (
      <Text>
        <Trans>
          Migrated a complex web application from JavaScript and CSS to
          Typescript and Chakra UI. Not only did we achieve a more modern and
          user-friendly interface, but we also improved the overall performance
          of the application by building custom shared components that reused
          across multiple pages.
          <br />
          <br />
          <Box as={'span'} fontWeight={'bold'} color={color}>
            Tech:
          </Box>{' '}
          React, TypeScript, Chakra UI
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Admin Dashboard Development</Trans>,
    icon: <RiAdminFill />,
    detail: (color: string) => (
      <Text>
        <Trans>
          My team and I worked on a project where we had to develop a complex
          admin dashboard for the company. I was responsible for the development
          of tools that are used by finance, operations marketing team.
          <br />
          <br />
          <Box as={'span'} fontWeight={'bold'} color={color}>
            Tech:
          </Box>{' '}
          React, TypeScript, Chakra UI, Next.js, Prisma, MongoDB,
        </Trans>
      </Text>
    ),
  },
  {
    title: <Trans>Migration to ShadCn UI</Trans>,
    icon: <SiTailwindcss />,
    detail: (color: string) => (
      <Text>
        <Trans>
          We wanted more speed and simplicity in our application, so we migrated
          it from Chakra UI to ShadCn UI. The result was a faster and more
          responsive application with a clean and modern design. Not only did we
          drastically reduced the size of our repository but also have
          simplified and sped up our development workflow by building our own
          library with ShadCn UI.
          <br />
          <br />
          <Box as={'span'} fontWeight={'bold'} color={color}>
            Tech:
          </Box>{' '}
          ShadCn UI, Tailwind, React, Typescript
          <br />
          <br />
        </Trans>
      </Text>
    ),
  },
]
