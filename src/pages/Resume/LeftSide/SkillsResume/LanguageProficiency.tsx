import { Heading, HStack, Text, VStack } from '@chakra-ui/react'

type LanguageProps = {
  language: string
  level: string
}

const languages: LanguageProps[] = [
  {
    language: 'Bosnian',
    level: 'Native',
  },
  {
    language: 'English',
    level: 'C1 (IELTS Band 8.0)',
  },
  {
    language: 'German',
    level: 'Intermediate',
  },
]

const LanguageProficiency = () => {
  return (
    <VStack w={'full'} alignItems={'start'} spacing={'3px'}>
      <Heading textTransform={'capitalize'} fontSize={'14px'} color={'#98BED5'}>
        Languages
      </Heading>
      {languages.map(({ language, level }) => (
        <HStack key={language} w={'full'} justify={'space-between'}>
          <Heading fontSize={'12px'} fontWeight={600} color={'#ECEFF4'}>
            {language}
          </Heading>
          <Text fontSize={'12px'} color={'#ECEFF4'} letterSpacing={'0.5px'} pr={'2px'}>
            {level}
          </Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default LanguageProficiency
