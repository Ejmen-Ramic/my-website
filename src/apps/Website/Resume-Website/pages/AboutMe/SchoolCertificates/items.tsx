import { t } from '@lingui/macro'

export type stepsItems = {
  id: number
  title: string
  description: string
  image: string
  sideTitle?: string
  sideDescription?: string
}

export const steps: stepsItems[] = [
  {
    id: 1,
    title: t`Deans List`,
    description: t`Semester 1, 2019/2020`,
    image: './Website/Resume/AboutMe/deans-list-1.jpg',
    sideTitle: t`Ejmen Test`,
    sideDescription: t`Semester 1, 2019/2020`,
  },
  {
    id: 2,
    title: t`Deans List`,
    description: t`Semester 1, 2020/2021`,
    image: './Website/Resume/AboutMe/deans-list-2.jpg',
    sideTitle: t`Deans List`,
    sideDescription: t`Semester 1, 2020/2021`,
  },

  {
    id: 3,
    title: t`Bachelor's Degree`,
    description: t`Information and Communication Technology`,
    image: './Website/Resume/AboutMe/deans-list-2.jpg',
    sideTitle: t`Bachelor's Degree`,
    sideDescription: t`Information and Communication Technology`,
  },
]
