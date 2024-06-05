import { Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'

type LanguageProps = {
  language: string
  level: string
}

const languages: LanguageProps[] = [
  {
    language: t`Bosnian`,
    level: t`Native`,
  },
  {
    language: t`English`,
    level: t`Fluent`,
  },
  {
    language: t`German`,
    level: t`Intermediate`,
  },
]

const LanguageProficiency = () => {
  const nameColor = useColorModeValue('#000000', '#ECEFF4')
  const skillColor = useColorModeValue('#0b3948', '#ECEFF4')

  return (
    <VStack w={'full'} alignItems={'start'} spacing={'3px'}>
      <Heading textTransform={'capitalize'} fontSize={'14px'} color={useColorModeValue('#0B3948', '#98BED5')}>
        <Trans>Languages</Trans>
      </Heading>
      {languages.map(({ language, level }, i) => (
        <HStack key={i} w={'full'} justify={'space-between'}>
          <Heading fontSize={'12px'} fontWeight={600} color={nameColor}>
            {language}
          </Heading>
          <Text fontSize={'12px'} color={skillColor} letterSpacing={'0.5px'} pr={'2px'}>
            {level}
          </Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default LanguageProficiency
