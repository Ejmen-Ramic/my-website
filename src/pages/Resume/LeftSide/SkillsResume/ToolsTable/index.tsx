import { ChakraProps, useBreakpointValue, Text, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { FaCircle } from 'react-icons/fa6'

type Header = {
  name?: ReactNode
  style?: ChakraProps
}

const skillLevel = ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'] as const

type Item = {
  name: string
  level: (typeof skillLevel)[number][]
}

const getItems = () => {
  const items: Item[] = [
    {
      name: 'GitHub',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'MongoDB',
      level: ['Novice', 'Beginner', 'Intermediate'],
    },
  ]
  return items
}

const ToolsTable: FC = () => {
  const columnWidth = useBreakpointValue({ base: '0px', md: '0px' })
  const headers = useBreakpointValue({
    base: [
      {
        name: (
          <Text textTransform={'capitalize'} color={'#98BED5'}>
            Tools
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
            <Td fontSize={'12px'} fontWeight={600} color={'#ECEFF4'} border={0} p={'0px'}>
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
                    <FaCircle color={'#98bed5'} size={'13px'} style={{ margin: '0px', display: 'inline-block' }} />
                  ) : (
                    <FaCircle color={'#303c40'} size={'13px'} style={{ margin: '0px', display: 'inline-block' }} />
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

export default ToolsTable
