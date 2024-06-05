import { t } from '@lingui/macro'

export type stepsItems = {
  title: string
  description: string
  image: string
}

export const steps: stepsItems[] = [
  {
    title: t`Deans List`,
    description: t`Semester 1, 2019/2020`,
    image: './Website/Resume/AboutMe/deans-list-1.jpg',
  },
  {
    title: t`Deans List`,
    description: t`Semester 1, 2020/2021`,
    image: './Website/Resume/AboutMe/deans-list-2.jpg',
  },

  {
    title: t`Bachelor's Diploma`,
    description: t`Information and Communication Technology`,
    image: '',
  },
  {
    title: 'First',
    description: 'Contact Info',
    image: '',
  },
]
