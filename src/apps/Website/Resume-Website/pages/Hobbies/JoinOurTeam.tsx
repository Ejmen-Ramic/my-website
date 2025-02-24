import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { colors } from '../../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
]

const JoinOurTeam: FC = () => {
  return (
    <FadeInView>
      <Box position={'relative'} my={'100px'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              zIndex={100}
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              Senior web designers{' '}
              <Text
                as={'span'}
                bgGradient={'linear(to-r, red.400,pink.400)'}
                bgClip={'text'}
              >
                &
              </Text>{' '}
              Full-Stack Developers
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={'heading'}
                fontSize={{ base: '4xl', md: '6xl' }}
              >
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={colors.gray[800]}
                color={colors.white}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={colors.gray[50]}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={4}>
              <Heading
                color={colors.gray[800]}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                Join our team
                <Text
                  as={'span'}
                  bgGradient={'linear(to-r, red.400,pink.400)'}
                  bgClip={'text'}
                >
                  !
                </Text>
              </Heading>
              <Text
                color={colors.gray[500]}
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder={'Firstname'}
                  bg={colors.gray[100]}
                  border={0}
                  color={colors.gray[500]}
                  _placeholder={{
                    color: colors.gray[500],
                  }}
                />
                <Input
                  placeholder={'firstname@lastname.io'}
                  bg={colors.gray[100]}
                  border={0}
                  color={colors.gray[500]}
                  _placeholder={{
                    color: colors.gray[500],
                  }}
                />
                <Input
                  placeholder={'+1 (___) __-___-___'}
                  bg={colors.gray[100]}
                  border={0}
                  color={colors.gray[500]}
                  _placeholder={{
                    color: colors.gray[500],
                  }}
                />
                <Button
                  fontFamily={'heading'}
                  bg={colors.gray[200]}
                  color={colors.gray[800]}
                >
                  Upload CV
                </Button>
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient={'linear(to-r, red.400,pink.400)'}
                color={colors.white}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}
              >
                Submit
              </Button>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
    </FadeInView>
  )
}

export const Blur = (props: IconProps) => {
  const width = useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })
  const zIndex = useBreakpointValue({ base: -1, md: -1, lg: 0 })
  return (
    <Icon
      width={width}
      zIndex={zIndex}
      height={'560px'}
      viewBox={'0 0 528 560'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <circle cx={71} cy={61} r={111} fill={'#F56565'} />
      <circle cx={244} cy={106} r={139} fill={'#ED64A6'} />
      <circle cy={291} r={139} fill={'#ED64A6'} />
      <circle cx={80.5} cy={189.5} r={101.5} fill={'#ED8936'} />
      <circle cx={196.5} cy={317.5} r={101.5} fill={'#ECC94B'} />
      <circle cx={70.5} cy={458.5} r={101.5} fill={'#48BB78'} />
      <circle cx={426.5} cy={-0.5} r={101.5} fill={'#4299E1'} />
    </Icon>
  )
}

export default JoinOurTeam
