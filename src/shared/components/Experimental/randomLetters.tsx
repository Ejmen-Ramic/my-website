import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'

const WelcomeMessage = () => {
  const [welcomeText, setWelcomeText] = useState<string>('Welcome')
  const [fontWeights, setFontWeights] = useState<number[]>([])
  const [fontFamilies, setFontFamilies] = useState<string[]>([])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    let counter = 0

    const fontWeightsList: number[] = [400, 600, 700, 800, 900]
    const fontFamiliesList: string[] = [
      'Helvetica',
      'Georgia',
      'Courier',
      'Arial',
      'SimSun',
    ]

    const updateWelcomeText = () => {
      if (counter < welcomeText.length) {
        const newFontWeights = [...fontWeights]
        const newFontFamilies = [...fontFamilies]

        newFontWeights[counter] =
          fontWeightsList[Math.floor(Math.random() * fontWeightsList.length)]
        newFontFamilies[counter] =
          fontFamiliesList[Math.floor(Math.random() * fontFamiliesList.length)]

        setFontWeights(newFontWeights)
        setFontFamilies(newFontFamilies)

        counter++
      }
    }

    interval = setInterval(() => {
      updateWelcomeText()
      if (counter === welcomeText.length) clearInterval(interval!)
    }, 500)

    return () => {
      clearInterval(interval!)
    }
  }, [])

  return (
    <Heading size="2xl">
      {welcomeText.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            fontFamily: fontFamilies[index],
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Heading>
  )
}

export default WelcomeMessage
