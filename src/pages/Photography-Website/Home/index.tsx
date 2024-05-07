import { Stack, SimpleGrid, Text, Flex } from '@chakra-ui/react'
import Footer from '../../../shared/components/Footer/Footer'
import Header from '../../../shared/components/Header'
import { itemProps } from './Props'
import { Link } from 'react-router-dom'

const PhotographyHome = () => {
  return (
    <Stack w={'full'} bgColor={'#ede9e3'}>
      <Header />
      <SimpleGrid columns={2} spacing={5}>
        {itemProps.map(({ image, location, link }, i) => (
          <Stack
            as={Link}
            key={i}
            height={'450px'}
            _hover={{
              opacity: 0.4,
              transitionTimingFunction: 'ease-in-out',
              color: 'white',
            }}
            bg={'gray.200'} // Set a fallback background color
            backgroundImage={`url(${image})`} // Set background image
            backgroundSize='cover'
            transition={'0.5s'}
            justify={'center'}
            textAlign={'left'}
          >
            {link}
            <Flex
              letterSpacing={'2px'}
              fontSize={'26px'}
              fontWeight={400}
              color={'white'}
              px={'80px'}
              pt={'75px'}
              direction={'column'}
              alignItems={'flex-start'}
            >
              <Text textTransform={'uppercase'}>{location}</Text>
            </Flex>
          </Stack>
        ))}
      </SimpleGrid>

      <Footer />
    </Stack>
  )
}

export default PhotographyHome
