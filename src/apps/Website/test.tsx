import { HStack, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import LanguageSwitcher from '../../shared/components/LanguageSwitcher/LanguageSwitcher'

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
