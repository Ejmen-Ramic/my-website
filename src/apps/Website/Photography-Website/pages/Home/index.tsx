import { Stack, SimpleGrid, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import { itemProps } from './Props'
import { Link } from 'react-router-dom'
import HeaderPhotography from '../../../../../shared/components/Header/HeaderPhotography'
import FadeInView from '../../../../../shared/components/Hooks/FadeInView'
import FooterPhotography from '../../../../../shared/components/Footer/FooterPhotography'

const PhotographyHome = () => {
  return (
    <Stack w={'full'} bgColor={useColorModeValue('#ede9e3', '#2b333d')}>
      <HeaderPhotography />
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: '0px', lg: '20px' }} mb={'100px'} zIndex={1}>
        {itemProps.map(({ image, location, link }, i) => (
          <FadeInView>
            <Stack
              as={Link}
              key={i}
              height={'450px'}
              _hover={{
                bgColor: '#00000000',
                opacity: 0.3,
                transitionTimingFunction: 'ease-in-out',
              }}
              bg={'black'}
              backgroundImage={`url(${image})`}
              backgroundSize={'cover'}
              transition={'0.5s'}
              justify={'center'}
              textAlign={'left'}
              zIndex={1}
            >
              {link}
              <FadeInView delay={0.4} direction={'left'}>
                <Flex
                  letterSpacing={'2px'}
                  fontSize={'26px'}
                  fontWeight={400}
                  color={'white'}
                  px={'80px'}
                  pt={'75px'}
                  direction={'column'}
                  alignItems={'flex-start'}
                  zIndex={100}
                >
                  <Text textTransform={'uppercase'} _hover={{ color: 'white' }}>
                    {location}
                  </Text>
                </Flex>
              </FadeInView>
            </Stack>
          </FadeInView>
        ))}
      </SimpleGrid>
      <FooterPhotography />
    </Stack>
  )
}

export default PhotographyHome
