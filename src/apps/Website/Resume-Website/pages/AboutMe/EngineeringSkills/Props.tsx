import { Stack, Text } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import {
  FaCode,
  FaCubes,
  FaDatabase,
  FaPaintBrush,
  FaTools,
} from 'react-icons/fa';
import { SiChakraui, SiFramework } from 'react-icons/si';
import { RiAdminFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';

type Props = {
  title: string;
  icon?: React.ReactNode;
  detail: string | JSX.Element;
};

export const itemsTechSkills: Props[] = [
  {
    title: t`Languages`,
    icon: <FaCode />,
    detail: 'TypeScript, JavaScript, CSS',
  },
  {
    title: t`Libraries`,
    icon: <FaCubes />,
    detail: 'Chakra UI, ShadCN UI, Tailwind, Framer Motion',
  },
  {
    title: t`Frameworks`,
    icon: <SiFramework />,
    detail: 'React, Node.js, WordPress, Next.js',
  },
  {
    title: t`Tools`,
    icon: <FaTools />,
    detail: 'Git, Jest, Cypress, Playwright, Jira, Trello, Notion, Slack',
  },
  {
    title: t`Databases`,
    icon: <FaDatabase />,
    detail: 'MongoDB, MySQL, Prisma',
  },
  {
    title: t`Graphic Design`,
    icon: <FaPaintBrush />,
    detail: 'Adobe Photoshop, Premiere, Lightroom, Figma',
  },
];

export const itemsFeatureProjects: Props[] = [
  {
    title: t`Migration to Chakra UI`,
    icon: <SiChakraui />,
    detail: (
      <Text>
        <Trans>
          Migrated a complex web application from JavaScript and CSS to
          Typescript and Chakra UI. Not only did we achieve a more modern and
          user-friendly interface, but we also improved the overall performance
          of the application by building custom shared components that reused
          across multiple pages.
          <br />
          <br />
          <b>Tech:</b> React, TypeScript, Chakra UI
        </Trans>
      </Text>
    ),
  },
  {
    title: t`Admin Dashboard Development`,
    icon: <RiAdminFill />,
    detail: (
      <Text>
        <Trans>
          My team and I worked on a project where we had to develop a complex
          admin dashboard for the company. I was responsible for the development
          of tools that are used by finance, operations marketing team.
          <br />
          <br />
          <b>Tech:</b> React, TypeScript, Chakra UI, Next.js, Prisma, MongoDB,
        </Trans>
      </Text>
    ),
  },
  {
    title: t`Migration to ShadCn UI`,
    icon: <SiTailwindcss />,
    detail: (
      <Stack>
        <Text>
          <Trans>
            We wanted more speed and simplicity in our application, so we
            migrated it from Chakra UI to ShadCn UI. The result was a faster and
            more responsive application with a clean and modern design. Not only
            did we drastically reduced the size of our repository but also have
            simplified and sped up our development workflow by building our own
            library with ShadCn UI.
            <br />
            <br />
            <b>Tech:</b> ShadCn UI, Tailwind, React, Typescript
            <br />
            <br />
          </Trans>
        </Text>
      </Stack>
    ),
  },
];
