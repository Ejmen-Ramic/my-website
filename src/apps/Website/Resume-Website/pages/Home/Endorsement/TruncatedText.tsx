import { useColorModeValue, Text, Stack, Button } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { FC, useState } from 'react'

interface TruncatedTextProps {
  fullText: string // Original text before Trans
  children: JSX.Element // Trans wrapped content
}
const TruncatedText: FC<TruncatedTextProps> = ({ fullText, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const buttonColor = useColorModeValue('blue.500', 'blue.300')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const words = fullText.split(' ')
  const shouldTruncate = words.length > 20
  const truncatedText = shouldTruncate
    ? words.slice(0, 20).join(' ') + '...'
    : fullText

  return (
    <Stack spacing={2}>
      <Text textAlign={'center'} color={textColor} fontSize={'sm'}>
        {isExpanded ? children : <Trans>{truncatedText}</Trans>}
      </Text>
      {shouldTruncate && (
        <Button
          size='sm'
          variant='link'
          color={buttonColor}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </Button>
      )}
    </Stack>
  )
}

export default TruncatedText
