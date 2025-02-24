import { IconType } from 'react-icons'
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiChakraui,
  SiNextdotjs,
  SiWordpress,
  SiPlaywright,
  SiMongodb,
  // SiAdobephotoshop,
  // SiAdobelightroom,
  // SiFigma,
} from 'react-icons/si'

export type CTLProps = {
  icon: IconType
  name: string
  link: string
}

const items: CTLProps[] = [
  {
    icon: SiTypescript,
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    icon: SiChakraui,
    name: 'Chakra UI',
    link: 'https://chakra-ui.com/',
  },
  {
    icon: SiPlaywright,
    name: 'Playwright',
    link: 'https://playwright.dev/',
  },
  {
    icon: SiJavascript,
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    icon: SiReact,
    name: 'React',
    link: 'https://react.dev/',
  },
  {
    icon: SiMongodb,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-my_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204527&adgroup=1222657400083678&msclkid=9924bbe426d114e01328ddc48afa519f',
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind',
    link: 'https://tailwindcss.com/',
  },

  {
    icon: SiWordpress,
    name: 'Wordpress',
    link: 'https://wordpress.org/',
  },
  // {
  //   icon: SiAdobephotoshop,
  //   name: "Adobe Photoshop",
  //   link: "",
  // },
  // {
  //   icon: SiAdobelightroom,
  //   name: "Adobe Lightroom",
  //   link: "",
  // },
  // {
  //   icon: SiFigma,
  //   name: "Figma",
  //   link: "",
  // },
]

//react-icons/si

export default items
