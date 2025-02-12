import { ReactNode } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../../shared/components/Hooks/color'

export type Props = {
  year: string
  location: string | JSX.Element
  experience: string | JSX.Element
  description: ReactNode
}

export const itemProps: Props[] = [
  {
    year: '2018 - 2022',
    location: <Trans>Kuala Lumpur, Malaysia</Trans>,
    experience: (
      <Trans>Bachelor's in Information and Communication Technology</Trans>
    ),
    description: (
      <Text>
        <Trans>
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Cumulative Grade Point's Average(CGPA): 3.44/4.0
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          The Dean's List for academic excellence in{' '}
          <Box as={'span'} color={colors.primary[100]} fontWeight={'bold'}>
            Semester2, 2019/2020{' '}
          </Box>{' '}
          Session
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          The Dean's List for academic excellence in{' '}
          <Box as={'span'} color={colors.primary[100]} fontWeight={'bold'}>
            Semester2, 2020/2021{' '}
          </Box>
          Session
          <br />
          <Box as={'span'} pr={'9px'}>
            •
          </Box>
          Final Year Project (FYP) promising projects 2021 (System Development
          Category)
        </Trans>
      </Text>
    ),
  },
]
