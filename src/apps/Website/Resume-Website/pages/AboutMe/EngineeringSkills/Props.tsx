import { Box, Text } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';

type Props = {
  title: string;
  detail: string | JSX.Element;
};

export const itemsTechSkills: Props[] = [
  {
    title: t`Languages`,
    detail: 'Java, Python, JavaScript, C++, C, HTML, CSS',
  },
  {
    title: t`Frameworks`,
    detail: 'Spring Boot, React, Node.js, Express.js, Django',
  },
  {
    title: t`Tools`,
    detail: 'Git, Docker, Jenkins, Jira, JUnit, Mockito, Postman, Swagger',
  },
  {
    title: t`Databases`,
    detail: 'PostgreSQL, MongoDB, MySQL',
  },
];

export const itemsFeatureProjects: Props[] = [
  {
    title: t`E-commerce Platform`,
    detail: (
      <Text>
        <Trans>
          Led the development of a scalable e-commerce platform serving 100K+
          monthly users.
          <br />
          <br />
          <b>Tech:</b> React, Node.js, MongoDB
        </Trans>
      </Text>
    ),
  },
  {
    title: t`AI-Powered Analytics Dashboard`,
    detail: (
      <Text>
        <Trans>
          Developed a real-time analytics dashboard with machine learning
          capabilities.
          <br />
          <br />
          <b>Tech:</b> Python, TensorFlow, Vue.js
        </Trans>
      </Text>
    ),
  },
];
