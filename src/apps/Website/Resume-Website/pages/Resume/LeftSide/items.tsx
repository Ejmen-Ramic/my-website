import { Trans } from '@lingui/macro';
import { IconType } from 'react-icons';
import {
  IoCameraOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';

export type ContactResume = {
  icon: IconType;
  socialMedia: string | JSX.Element;
  link?: string;
};

export const resumeItems: ContactResume[] = [
  {
    icon: IoLocationOutline,
    socialMedia: <Trans>Malaysia, Kuala Lumpur</Trans>,
    link: 'https://www.google.com/maps/place/Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.1385027,101.6045875,12z/data=!3m1!4b1!4m6!3m5!1s0x31cc362abd08e7d3:0x232e1ff540d86c99!8m2!3d3.1319197!4d101.6840589!16zL20vMDQ5ZDE?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: IoLogoGithub,
    socialMedia: 'Ejmen-Ramic',
    link: 'https://resume.com/Ejmen-Ramic/',
  },
  {
    icon: IoLogoLinkedin,
    socialMedia: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my',
  },
  {
    icon: IoHomeOutline,
    socialMedia: <Trans>My Website</Trans>,
    //TODO: Add link here when its pushed to production
    link: '',
  },
  {
    icon: IoCameraOutline,
    socialMedia: <Trans>Photography by Ejmen Ramic</Trans>,
    //TODO: Add link here when its pushed to production
    // link: '/photography',
  },
];
