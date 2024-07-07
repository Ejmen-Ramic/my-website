import React from 'react'
import { Stack, SimpleGrid, Text, useColorModeValue, Image, Box } from '@chakra-ui/react'
import { itemProps } from './Props'
import { Link } from 'react-router-dom'
import HeaderPhotography from '../../Shared/Header/Desktop'
import FadeInView from '../../../../../shared/components/Hooks/FadeInView'
import FooterPhotography from '../../Shared/FooterPhotography'
import { colors } from '../../../../../shared/components/Hooks/color'

const PhotographyHome: React.FC = () => {
  return (
    <Stack w={'full'} bgColor={useColorModeValue('#ede9e3', '#2b333d')}>
      <HeaderPhotography />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: '15px', lg: '20px' }}
        mb={{ base: '15', lg: '100px' }}
        zIndex={1}
      >
        {itemProps.map(({ image, location, link }, i) => (
          <FadeInView key={i}>
            <Box position={'relative'} height={'450px'}>
              <Link to={link}>
                <Image
                  src={image}
                  alt={location}
                  objectFit={'cover'}
                  w={'full'}
                  h={'full'}
                  transition={'all 0.8s ease'}
                  _hover={{
                    opacity: 0.7,
                  }}
                  bg={colors.black}
                  backgroundSize={'cover'}
                  textAlign={'start'}
                  alignItems={'start'}
                  alignContent={'start'}
                />
                <Box
                  position={'absolute'}
                  top={'0'}
                  left={'0'}
                  w={'full'}
                  h={'full'}
                  bg={'#000000'}
                  opacity={{ base: 0.2, lg: '0' }}
                  transition={'opacity 0.7s ease'}
                  _hover={{ opacity: 0.5 }}
                />
                <FadeInView delay={0.4} direction={'left'}>
                  <Text
                    position={'absolute'}
                    top={'64%'}
                    left={'12%'}
                    letterSpacing={'2px'}
                    fontSize={'26px'}
                    fontWeight={400}
                    color={colors.white}
                    textAlign={'start'}
                    textTransform={'uppercase'}
                  >
                    {location}
                  </Text>
                </FadeInView>
              </Link>
            </Box>
          </FadeInView>
        ))}
      </SimpleGrid>
      <FooterPhotography />
    </Stack>
  )
}

export default PhotographyHome
