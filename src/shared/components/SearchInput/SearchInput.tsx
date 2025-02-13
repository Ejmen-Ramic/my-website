import { Flex } from '@chakra-ui/react'
import { colors } from '../Hooks/color'

const people = [
  {
    name: 'Dan Abramov',
    image: 'https://bit.ly/dan-abramov',
  },
  {
    name: 'Kent Dodds',
    image: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Segun Adebayo',
    image: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Prosper Otemuyiwa',
    image: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Ryan Florence',
    image: 'https://bit.ly/ryan-florence',
  },
]
const SearchInput = () => {
  return (
    <Flex
      boxSize={'full'}
      h={'100vh'}
      pos={'absolute'}
      bg={colors.gray[400]}
      _dark={{
        bg: colors.gray[600],
      }}
      p={30}
      justifyContent={'center'}
    >
      {/* <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
        <AutoCompleteList>
          {people.map((person, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={person.name}
              textTransform="capitalize"
              align="center"
            >
              <Avatar size="sm" name={person.name} src={person.image} />
              <Text ml="4">{person.name}</Text>
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete> */}
    </Flex>
  )
}

export default SearchInput
