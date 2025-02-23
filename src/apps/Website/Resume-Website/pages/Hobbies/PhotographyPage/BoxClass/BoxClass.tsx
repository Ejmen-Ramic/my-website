import React, { FC, useEffect, useState } from 'react'
import {
  Button,
  Stack,
  useColorModeValue,
  Text,
  Box,
  Image,
  Flex,
  Avatar,
  Heading,
  Skeleton,
} from '@chakra-ui/react'
import items from './Props'
import FadeInView from '../../../../../../../shared/components/Hooks/FadeInView'
import { colors } from '../../../../../../../shared/components/Hooks/color'

interface BoxClassProps {
  languageimage: string
  alt: string
  image: string
  name: string
  jobtitle: string
  rating: string
  skills: string
  followers: string
}

const BoxClass: FC = () => {
  const boxColorValue = useColorModeValue(colors.white, colors.gray[800])
  const buttonProfileColor = useColorModeValue('#151f21', colors.gray[500])
  const buttonFollowColor = useColorModeValue(
    colors.green[400],
    colors.blue[800]
  )

  const zoomInStyles = {
    transition: 'transform 0.001s',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  }

  const [renderedItems, setRenderedItems] = useState<BoxClassProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < items.length) {
        setRenderedItems((prevItems) => [...prevItems, items[currentIndex]])
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsLoading(false)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <FadeInView>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        py={{ base: '11%', md: '5%' }}
        px={'5%'}
        flexWrap={'wrap'}
        rowGap={'50px'}
        columnGap={'50px'}
        justifyContent={'center'}
        alignItems={'center'}
        w={'full'}
      >
        {renderedItems.map(
          (
            {
              languageimage,
              alt,
              image,
              name,
              jobtitle,
              rating,
              skills,
              followers,
            },
            i
          ) => (
            <Box
              maxW={'350px'}
              w={'full'}
              bg={boxColorValue}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
              _hover={zoomInStyles}
              key={i}
            >
              <Image
                h={'170px'}
                w={'full'}
                src={languageimage}
                objectFit={'cover'}
                alt={alt}
              />
              <Flex justify={'center'} mt={-12}>
                <Avatar
                  size={'xl'}
                  src={image}
                  css={{
                    border: '2px solid white',
                  }}
                />
              </Flex>

              <Stack p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading
                    fontSize={'2xl'}
                    fontWeight={500}
                    fontFamily={'body'}
                  >
                    {name}
                  </Heading>
                  <Text color={colors.gray[500]}>{jobtitle}</Text>
                </Stack>
                <Stack spacing={'50px'}>
                  <Stack direction={'column'} justify={'center'} spacing={6}>
                    <Stack direction={'row'} justify={'center'}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{followers}</Text>
                        <Text fontSize={'sm'} color={colors.gray[500]}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{rating}</Text>
                        <Text fontSize={'sm'} color={colors.gray[500]}>
                          Rating
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack alignItems={'center'}>
                      <Text fontSize={'sm'} color={colors.gray[500]}>
                        Skills
                      </Text>
                      <Text fontWeight={600}>{skills}</Text>
                    </Stack>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={4}>
                    <Button
                      w={'full'}
                      bg={buttonProfileColor}
                      color={colors.white}
                      rounded={'md'}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      View Profile
                    </Button>
                    <Button
                      w={'full'}
                      bg={buttonFollowColor}
                      color={colors.white}
                      rounded={'md'}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Follow
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          )
        )}
        {/* Render skeletons while loading */}
        {isLoading &&
          Array.from({ length: items.length - renderedItems.length }).map(
            (_, i) => (
              <Skeleton
                key={i}
                height={'370px'}
                width={'350px'}
                borderRadius={'md'}
              />
            )
          )}
      </Stack>
    </FadeInView>
  )
}

export default BoxClass
