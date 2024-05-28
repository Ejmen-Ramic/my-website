import { IconType } from 'react-icons'
import { IoCameraOutline, IoHomeOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export type ContactResume = {
  icon: IconType
  socialMedia: string
  link: string
}

export const resumeItems: ContactResume[] = [
  {
    icon: IoLocationOutline,
    socialMedia: 'Sarajevo, Bosnia and Herzegovina ',
    link: 'https://www.bing.com/maps?q=sarajevo&FORM=HDRSC6',
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
    socialMedia: 'My Website',
    //TODO: Add link here when its pushed to production
    link: '',
  },
  {
    icon: IoCameraOutline,
    socialMedia: 'Photography by Ejmen Ramic',
    //TODO: Add link here when its pushed to production
    link: '/photography',
  },
]
