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
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiMailSend } from 'react-icons/bi'
import FadeInView from '../../../../shared/components/Hooks/FadeInView'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../../shared/components/Hooks/color'

const Logo = (props: any) => {
  return (
    <FadeInView delay={0.1}>
      <Text
        fontSize={'24px'}
        textTransform={'uppercase'}
        fontFamily={'inherit'}
        fontWeight={'400'}
        color={useColorModeValue(colors.primary4, colors.white)}
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

const FooterPhotography = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      bg={useColorModeValue('#d1cec7', colors.primary4)}
      color={useColorModeValue(colors.gray[700], colors.gray[200])}
      w={'100%'}
      bottom={'0'}
      left={'0'}
      right={'0'}
    >
      <Container
        as={Stack}
        py={10}
        px={{ base: '20px', md: '40px', lg: '0px' }}
        maxW={'6xl'}
        align={'center'}
      >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 2fr' }}
          spacing={20}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue(colors.gray[700], colors.white)} />
            </Box>
            <FadeInView delay={0.1}>
              <Text
                fontSize={'13px'}
                fontFamily={'revert-layer'}
                fontWeight={'400'}
                color={useColorModeValue(colors.primary4, colors.white)}
              >
                <Trans>
                  Welcome to my website! I am a software engineer and
                  photographer based in Bosnia and Herzegovina. Feel free to
                  view my resume and work. <br /> <br />
                  Powered by
                </Trans>{' '}
                <Link href={'https://react.dev/'} isExternal>
                  <Box as={'span'} color={colors.links}>
                    React
                  </Box>
                </Link>
                <Box
                  as={'span'}
                  color={useColorModeValue(colors.primary4, colors.white)}
                >
                  {''} • {''}
                </Box>
                <Link href={'https://www.typescriptlang.org/'} isExternal>
                  <Box as={'span'} color={colors.links}>
                    Typescript
                  </Box>
                </Link>
                <Box
                  as={'span'}
                  color={useColorModeValue(colors.primary4, colors.white)}
                >
                  {''} • {''}
                </Box>
                <Link href={'https://chakra-ui.com/'} isExternal>
                  <Box as={'span'} color={colors.links}>
                    Chakra UI
                  </Box>
                </Link>
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Text fontSize={'sm'}>
                <Trans>Copyright</Trans> ©{year} EjmenRamic.{' '}
                <Trans>All rights reserved</Trans>
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Stack direction={'row'} spacing={6}>
                <SocialButton
                  label={'GitHub'}
                  href={'https://github.com/Ejmen-Ramic/'}
                  color={colors.primary[300]}
                  hoverColor={'gray'}
                >
                  <FaGithub />
                </SocialButton>

                <SocialButton
                  label={'X'}
                  href={'https://x.com/EjmenRamic'}
                  color={'#00aced'}
                  hoverColor={'#657786'}
                >
                  <FaXTwitter />
                </SocialButton>

                <SocialButton
                  label={'LinkedIn'}
                  href={
                    'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my'
                  }
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
          <Stack
            align={'flex-start'}
            mt={{ base: '5px' }}
            mb={{ base: '5%', md: '0%' }}
            fontFamily={'inherit'}
          >
            <FadeInView delay={0.1}>
              <Text
                mb={{ md: '20px' }}
                fontSize={'17px'}
                color={useColorModeValue(colors.gray[700], colors.white)}
                fontFamily={'inherit'}
                fontWeight={'400'}
              >
                <Trans>Navigate</Trans>
              </Text>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/'}
                color={useColorModeValue(colors.links, colors.links)}
                _hover={{
                  color: useColorModeValue(colors.primary4, colors.white),
                }}
                fontSize={'16px'}
              >
                <Trans>Home</Trans>
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/resume'}
                color={useColorModeValue(colors.links, colors.links)}
                _hover={{
                  color: useColorModeValue(colors.primary4, colors.white),
                }}
                fontSize={'16px'}
              >
                <Trans>Resume</Trans>
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant={'link'}
                  border={'none'}
                  color={useColorModeValue(colors.links, colors.links)}
                  _hover={{
                    color: useColorModeValue(colors.primary4, colors.white),
                  }}
                  _expanded={{
                    color: useColorModeValue(colors.primary4, colors.white),
                  }}
                  fontWeight={400}
                  fontSize={'16px'}
                  textTransform={'capitalize'}
                >
                  <Trans>Hobbies</Trans>
                </MenuButton>
                <MenuList borderRadius={'3px'}>
                  <MenuItem
                    _hover={{
                      color: colors.links,
                      bg: useColorModeValue(colors.gray[100], colors.gray[900]),
                    }}
                  >
                    <Link href={'/'}>
                      <Trans>Developer</Trans>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/about'}
                color={useColorModeValue(colors.links, colors.links)}
                _hover={{
                  color: useColorModeValue(colors.primary4, colors.white),
                }}
                fontSize={'16px'}
              >
                <Trans>About Me</Trans>
              </Link>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Link
                href={'/contact'}
                color={useColorModeValue(colors.links, colors.links)}
                _hover={{
                  color: useColorModeValue(colors.primary4, colors.white),
                }}
                fontSize={'16px'}
              >
                <Trans>Contacts</Trans>
              </Link>
            </FadeInView>
          </Stack>
          <Stack align={'flex-start'}>
            <FadeInView delay={0.1}>
              <ListHeader>
                <Trans>Stay up to date</Trans>
              </ListHeader>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Stack direction={'row'}>
                <Input
                  placeholder={t`Your email address`}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue(colors.white, colors.gray[800])}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label={'Subscribe'}
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

export default FooterPhotography
