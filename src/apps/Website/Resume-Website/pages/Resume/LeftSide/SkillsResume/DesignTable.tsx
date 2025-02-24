import {
  ChakraProps,
  useBreakpointValue,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { FC, ReactNode } from 'react'
import { FaCircle } from 'react-icons/fa6'
import { colors } from '../../../../../../../shared/components/Hooks/color'

type Header = {
  name?: ReactNode
  style?: ChakraProps
}

const skillLevel = [
  'Novice',
  'Beginner',
  'Intermediate',
  'Proficient',
  'Advanced',
] as const

type Item = {
  name: string
  level: (typeof skillLevel)[number][]
}

const getItems = () => {
  const items: Item[] = [
    {
      name: ' Adobe Lightroom',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'Adobe Photoshop',
      level: ['Novice', 'Beginner', 'Intermediate'],
    },
    {
      name: 'Adobe Premier',
      level: ['Novice', 'Beginner'],
    },
    {
      name: 'Figma',
      level: ['Novice', 'Beginner'],
    },
  ]
  return items
}

const DesignTable: FC = () => {
  const nameColor = useColorModeValue(colors.black, colors.iceGray)
  const skillColor = useColorModeValue(colors.navy, colors.primary[100])
  const noSkillColor = useColorModeValue(colors.slate[200], colors.slate[250])
  const columnWidth = useBreakpointValue({ base: '0px', md: '0px' })
  const headers = useBreakpointValue({
    base: [
      {
        name: (
          <Text
            textTransform={'capitalize'}
            color={useColorModeValue(colors.navy, colors.primary[100])}
          >
            <Trans>Graphics Design</Trans>
          </Text>
        ),
      },
    ],
  }) as Header[]

  const items = getItems()

  return (
    <Table border={'none'}>
      <Thead>
        <Tr>
          {headers?.map(({ name }, i) => (
            <Th
              key={i}
              w={{ base: '200px', md: '120px' }}
              py={'10px'}
              px={0}
              fontSize={'14px'}
              textAlign={'start'}
              border={0}
            >
              {name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody gap={'24px'} alignItems={'start'}>
        {items.map(({ name, level }: Item, i) => (
          <Tr key={i} border={0}>
            <Td
              fontSize={'12px'}
              fontWeight={600}
              color={nameColor}
              border={0}
              p={'0px'}
            >
              {name}
            </Td>
            {skillLevel.map((skill, j) => {
              const isCheck = level.includes(skill)
              return (
                <Td
                  key={j}
                  w={columnWidth}
                  p={'0px'}
                  border={0}
                  textAlign={'start'}
                  alignItems={'start'}
                  justifyContent={'start'}
                  style={{ lineHeight: 0 }}
                >
                  {isCheck ? (
                    <FaCircle
                      color={skillColor}
                      size={'13px'}
                      style={{ margin: '0px', display: 'inline-block' }}
                    />
                  ) : (
                    <FaCircle
                      color={noSkillColor}
                      size={'13px'}
                      style={{ margin: '0px', display: 'inline-block' }}
                    />
                  )}
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DesignTable
