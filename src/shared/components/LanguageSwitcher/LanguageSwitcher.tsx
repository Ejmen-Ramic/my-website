import React, { useEffect, useState } from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { multipleDetect, fromUrl, fromStorage, fromNavigator } from '@lingui/detect-locale'
import { dynamicActivate } from './dynamicActivate'

const LanguageSwitcher: React.FC = () => {
  const [detectedLocales, setDetectedLocales] = useState<string[]>([])

  useEffect(() => {
    const DEFAULT_FALLBACK = () => 'en'
    const result = multipleDetect(fromUrl('lang'), fromStorage('lang'), fromNavigator(), DEFAULT_FALLBACK)

    setDetectedLocales(result)
  }, [])

  const changeLanguage = async (locale: string) => {
    await dynamicActivate(locale)
  }

  return (
    <HStack>
      {detectedLocales.map((locale, index) => (
        <Button key={index} variant={'outline'} onClick={() => changeLanguage(locale)}>
          {locale}
        </Button>
      ))}
    </HStack>
  )
}

export default LanguageSwitcher
