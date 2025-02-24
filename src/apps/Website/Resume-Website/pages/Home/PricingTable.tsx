import { ReactNode } from 'react'
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { colors } from '../../../../../shared/components/Hooks/color'

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow={'base'}
      borderWidth={'1px'}
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue(colors.gray[200], colors.gray[500])}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  )
}

const ThreeTierPricing = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign={'center'}>
        <Heading as={'h1'} fontSize={'4xl'}>
          Plans that fit your need
        </Heading>
        <Text fontSize={'lg'} color={colors.gray[500]}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign={'center'}
        justify={'center'}
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight={'500'} fontSize={'2xl'}>
              Hobby
            </Text>
            <HStack justifyContent={'center'}>
              <Text fontSize={'3xl'} fontWeight={'600'}>
                $
              </Text>
              <Text fontSize={'5xl'} fontWeight={'900'}>
                79
              </Text>
              <Text fontSize={'3xl'} color={colors.gray[500]}>
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue(colors.gray[50], colors.gray[700])}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign={'start'} px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w={'80%'} pt={7}>
              <Button w={'full'} colorScheme={'red'} variant={'outline'}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position={'relative'}>
            <Box
              position={'absolute'}
              top={'-16px'}
              left={'50%'}
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform={'uppercase'}
                bg={useColorModeValue(colors.red[300], colors.red[700])}
                px={3}
                py={1}
                color={useColorModeValue(colors.gray[900], colors.gray[300])}
                fontSize={'sm'}
                fontWeight={'600'}
                rounded={'xl'}
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight={'500'} fontSize={'2xl'}>
                Growth
              </Text>
              <HStack justifyContent={'center'}>
                <Text fontSize={'3xl'} fontWeight={'600'}>
                  $
                </Text>
                <Text fontSize={'5xl'} fontWeight={'900'}>
                  149
                </Text>
                <Text fontSize={'3xl'} color={colors.gray[500]}>
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue(colors.gray[50], colors.gray[700])}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign={'start'} px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w={'80%'} pt={7}>
                <Button w={'full'} colorScheme={'red'}>
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight={'500'} fontSize={'2xl'}>
              Scale
            </Text>
            <HStack justifyContent={'center'}>
              <Text fontSize={'3xl'} fontWeight={'600'}>
                $
              </Text>
              <Text fontSize={'5xl'} fontWeight={'900'}>
                349
              </Text>
              <Text fontSize={'3xl'} color={colors.gray[500]}>
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue(colors.gray[50], colors.gray[700])}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign={'start'} px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={colors.green[500]} />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w={'80%'} pt={7}>
              <Button w={'full'} colorScheme={'red'} variant={'outline'}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}

export default ThreeTierPricing
