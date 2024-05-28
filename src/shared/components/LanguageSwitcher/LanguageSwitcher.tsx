import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { dynamicActivate } from './dynamicActivate'

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = async (locale: string) => {
    await dynamicActivate(locale)
    localStorage.setItem('locale', locale)
  }

  return (
    <HStack>
      {['en', 'ba'].map((locale, index) => (
        <Button key={index} variant={'outline'} onClick={() => changeLanguage(locale)}>
          {locale}
        </Button>
      ))}
    </HStack>
  )
}

export default LanguageSwitcher
