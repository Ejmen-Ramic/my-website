import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';

export type Props = {
  year: string | JSX.Element;
  location: string | JSX.Element;
  experience: string | JSX.Element;
  description: ReactNode;
};

export const itemProps: Props[] = [
  {
    year: <Trans>April, 2022 - January, 2023</Trans>,
    location: <Trans>Male, Maldives</Trans>,
    experience: (
      <Trans>
        Web Coordinator at International Maldives Travel Market (IMTM)
      </Trans>
    ),
    description: (
      <Text>
        <Trans>
          • Maintain the company's website, design, and create new content
          <br /> • Handling customers and providing the best packages and
          locations based on the requirements set out by them in the Maldives
          <br /> • Creating invoices for the customers
          <br /> • Successfully connected luxury hotels in Bosnia & Herzegovina
          with IMTM to create affordable tourist packages for Maldivians to
          experience the Balkan region especially during the winter season
        </Trans>
      </Text>
    ),
  },
  {
    year: <Trans>February, 2023 - Present</Trans>,
    location: <Trans>Kuala Lumpur, Malaysia</Trans>,
    experience: <Trans>Software and QA Engineer at FLUX</Trans>,
    description: (
      <Text>
        <Trans>
          • Creating and maintaining automated test scripts
          <br />• Front and Backend development of the website
          <br />• Database design, modeling, data import and migration
        </Trans>
      </Text>
    ),
  },
];
