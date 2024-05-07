import { FC, ReactNode } from 'react'
import FAQDesktop from './FAQDesktop'
import FAQMobile from './FAQMobile'
import { Heading, VStack, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import FadeInView from '../../../../shared/components/Hooks/FadeInView'

export type FAQItem = {
  title: ReactNode
  description: ReactNode
}

const items: FAQItem[] = [
  {
    title: '1. What is Coding?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '2. What are the basic components of codes?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '3. How will this Programming Training benefit your career?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '4. Will this training help me to get a better job?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '5. Can you customize training material according to our company?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '6. I am unable to find the course that i am looking for.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '7. What are the types of Coding languages?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '8. What is the use of learning to code?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '9. What will I learn from this Python Programming Training Course?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: '10. Can you customize training material according to our company?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const FAQ: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <FadeInView>
      <Box my={{ base: '60px', lg: '120px' }}>
        <VStack w={'full'} spacing={'30px'} textAlign={'center'}>
          <Box px={{ base: '10px', md: '0px' }}>
            <Heading>Frequently Asked Questions </Heading>
          </Box>
          <Text>
            The following list of frequently asked questions by employers that may also assist you in getting your
            questions answered:
          </Text>
        </VStack>
        <VStack mt={'50px'} px={{ base: '20px', md: '50px', lg: '300px' }}>
          {isMobile ? <FAQMobile items={items} /> : <FAQDesktop items={items} />}
        </VStack>
      </Box>
    </FadeInView>
  )
}

export default FAQ
