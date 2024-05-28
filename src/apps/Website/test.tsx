import { HStack, Text } from '@chakra-ui/react'
import LanguageSwitcher from '../shared/components/LanguageSwitcher/LanguageSwitcher'
import { Trans } from '@lingui/macro'

const test = () => {
  return (
    <HStack spacing={'100px'}>
      <LanguageSwitcher />
      <Text>
        <Trans>How are you?</Trans>
      </Text>
    </HStack>
  )
}

export default test
