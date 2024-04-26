import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import FadeInView from '../Hooks/FadeInView'

const Logo = (props: any) => {
  return (
    <FadeInView delay={0.1}>
      <Text
        fontSize={'24px'}
        textTransform={'uppercase'}
        fontFamily={'inherit'}
        fontWeight={'400'}
        color={useColorModeValue('#2b333d', 'white')}
      >
        Ejmen Ramic
      </Text>
    </FadeInView>
  )
}

const SocialButton = ({
  children,
  label,
  href,
  hoverColor,
}: {
  children: ReactNode
  label: string
  href: string
  color: string
  hoverColor: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        color: hoverColor,
      }}
    >
      <FadeInView delay={0.1}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </FadeInView>
      <FadeInView delay={0.1}>{children}</FadeInView>
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      bg={useColorModeValue('gray.100', '#2b333d')}
      color={useColorModeValue('gray.700', 'gray.200')}
      w={'100%'}
      bottom={'0'}
      left={'0'}
      right={'0'}
    >
      <Container as={Stack} py={10} maxW={'6xl'} align='center'>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 2fr' }} spacing={20}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <FadeInView delay={0.1}>
              <Text
                fontSize={'13px'}
                fontFamily={'revert-layer'}
                fontWeight={'400'}
                color={useColorModeValue('#2b333d', 'white')}
              >
                Welcome to my website! I am a software engineer and photographer based in Bosnia and Herzegovina. Feel
                free to view my resume and work. <br /> <br />
                Powered by {''}
                <Link href='https://react.dev/' isExternal>
                  <Box as='span' color='#02bece'>
                    React
                  </Box>
                </Link>
                <Box as={'span'} color={useColorModeValue('#2b333d', 'white')}>
                  {''} • {''}
                </Box>
                <Link href='https://www.typescriptlang.org/' isExternal>
                  <Box as='span' color='#02bece'>
                    Typescript
                  </Box>
                </Link>
                <Box as={'span'} color={useColorModeValue('#2b333d', 'white')}>
                  {''} • {''}
                </Box>
                <Link href='https://chakra-ui.com/' isExternal>
                  <Box as='span' color='#02bece'>
                    Chakra UI
                  </Box>
                </Link>
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Text fontSize={'sm'}>Copyright ©{year} EjmenRamic. All rights reserved</Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Stack direction={'row'} spacing={6}>
                <SocialButton
                  label={'GitHub'}
                  href={'https://github.com/Ejmen-Ramic/'}
                  color={'#333333'}
                  hoverColor={'gray'}
                >
                  <FaGithub />
                </SocialButton>

                <SocialButton
                  label={'Twitter'}
                  href={'https://twitter.com/EjmenRamic'}
                  color={'#00aced'}
                  hoverColor={'cyan'}
                >
                  <FaTwitter />
                </SocialButton>

                <SocialButton
                  label={'LinkedIn'}
                  href={'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my'}
                  color={'#0077b5'}
                  hoverColor={'#0A66C2'}
                >
                  <FaLinkedin />
                </SocialButton>
                <SocialButton
                  label={'Instagram'}
                  href={'https://www.instagram.com/ejmenramic/'}
                  color={'#0077b5'}
                  hoverColor={'#C13584'}
                >
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </FadeInView>
          </Stack>
          <Stack align={'flex-start'} mt={{ base: '5px' }} mb={{ base: '5%', md: '0%' }} fontFamily={'inherit'}>
            <FadeInView delay={0.1}>
              <Text
                mb={{ md: '20px' }}
                fontSize={'17px'}
                color={useColorModeValue('gray.700', 'white')}
                fontFamily={'inherit'}
                fontWeight={'400'}
              >
                Navigate
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/'}
                color={useColorModeValue('#02bece', '#02bece')}
                _hover={{ color: useColorModeValue('#2b333d', 'white') }}
                fontSize={'16px'}
              >
                Home
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/'}
                color={useColorModeValue('#02bece', '#02bece')}
                _hover={{ color: useColorModeValue('#2b333d', 'white') }}
                fontSize={'16px'}
              >
                Resume
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant='link'
                  border={'none'}
                  color={useColorModeValue('#02bece', '#02bece')}
                  _hover={{ color: useColorModeValue('#2b333d', 'white') }}
                  _expanded={{ color: useColorModeValue('#2b333d', 'white') }}
                  fontWeight={400}
                  fontSize={'16px'}
                  textTransform={'capitalize'}
                >
                  Hobbies
                </MenuButton>
                <MenuList borderRadius={'3px'}>
                  <MenuItem
                    _hover={{
                      color: '#02bece',
                      bg: useColorModeValue('gray.100', 'gray.900'),
                    }}
                  >
                    Photography
                  </MenuItem>
                  {/* <MenuItem
                  _hover={{
                    color: "#02bece",
                    bg: useColorModeValue("gray.100", "gray.900"),
                  }}
                >
                  Become a Tutor
                </MenuItem> */}
                </MenuList>
              </Menu>{' '}
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/'}
                color={useColorModeValue('#02bece', '#02bece')}
                _hover={{ color: useColorModeValue('#2b333d', 'white') }}
                fontSize={'16px'}
              >
                About Me
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/'}
                color={useColorModeValue('#02bece', '#02bece')}
                _hover={{ color: useColorModeValue('#2b333d', 'white') }}
                fontSize={'16px'}
              >
                Contacts
              </Link>
            </FadeInView>
          </Stack>
          <Stack align={'flex-start'}>
            <FadeInView delay={0.1}>
              <ListHeader>Stay up to date</ListHeader>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label='Subscribe'
                  icon={<BiMailSend />}
                />
              </Stack>
            </FadeInView>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
