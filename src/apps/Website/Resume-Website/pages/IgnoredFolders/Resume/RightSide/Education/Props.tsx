import { ReactNode } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'

export type Props = {
  year: string
  location: string
  experience: string
  description: ReactNode
}

export const itemProps: Props[] = [
  {
    year: '2018 - 2022',
    location: t`Kuala Lumpur, Malaysia`,
    experience: t`Bachelor's in Information and Communication Technology`,
    description: (
      <Text>
        <Trans>
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Cummulative Grade Point's Average(CGPA): 3.44/4.0
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          The Dean's List for academic excellence in{' '}
          <Box as={'span'} color={'#98bed5'} fontWeight={'bold'}>
            Semester2, 2019/2020{' '}
          </Box>{' '}
          Session
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          The Dean's List for academic excellence in{' '}
          <Box as={'span'} color={'#98bed5'} fontWeight={'bold'}>
            Semester2, 2020/2021{' '}
          </Box>
          Session
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Final Year Project (FYP) promising projects 2021 (System Development Category)
        </Trans>
      </Text>
    ),
  },
]
