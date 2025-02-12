import {
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../../shared/components/Hooks/color'

type LanguageProps = {
  language: string | JSX.Element
  level: string | JSX.Element
}

const languages: LanguageProps[] = [
  {
    language: <Trans>Bosnian</Trans>,
    level: <Trans>Native</Trans>,
  },
  {
    language: <Trans>English</Trans>,
    level: <Trans>Fluent</Trans>,
  },
  {
    language: <Trans>German</Trans>,
    level: <Trans>Intermediate</Trans>,
  },
  {
    language: <Trans>Russian</Trans>,
    level: <Trans>Intermediate</Trans>,
  },
]

const LanguageProficiency = () => {
  const nameColor = useColorModeValue('#000000', colors.iceGray)
  const skillColor = useColorModeValue('#0b3948', colors.iceGray)

  return (
    <VStack w={'full'} alignItems={'start'} spacing={'3px'}>
      <Heading
        textTransform={'capitalize'}
        fontSize={'14px'}
        color={useColorModeValue('#0B3948', '#98BED5')}
      >
        <Trans>Languages</Trans>
      </Heading>
      {languages.map(({ language, level }, i) => (
        <HStack key={i} w={'full'} justify={'space-between'}>
          <Heading fontSize={'12px'} fontWeight={600} color={nameColor}>
            {language}
          </Heading>
          <Text
            fontSize={'12px'}
            color={skillColor}
            letterSpacing={'0.5px'}
            pr={'2px'}
          >
            {level}
          </Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default LanguageProficiency
