import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Show,
  useColorModeValue,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import HeaderMobile from './Mobile'
import { Link } from 'react-router-dom'
import LanguageMenu from './Desktop/LanguageMenu'
import { Trans } from '@lingui/macro'
import { colors } from '../../Hooks/color'
import ColorMode from '../../Color-Mode/ColorMode'

interface HeaderProps {
  isStickyHeader?: boolean
}
const Header: FC<HeaderProps> = ({ isStickyHeader }: HeaderProps = {}) => {
  const [homeHovered, setHomeHovered] = useState(false)
  const [resumeHovered, setResumeHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)
  const [languageHovered, setLanguageHovered] = useState(false)

  return (
    <Flex
      data-testid={'header'}
      h={{ base: '58px', md: '67px', lg: '120px' }}
      w={'full'}
      bg={useColorModeValue(colors.gray[100], colors.primary4)}
      justifyContent={'space-between'}
      top={isStickyHeader ? '0' : '-58px'}
    >
      <HStack w={'full'}>
        <Link to={'/'} data-testid={'signature-home-link'}>
          <Heading
            w={{ base: 'max-content', md: 'fit-content' }}
            ml={{ base: '20px', md: '40px' }}
            color={useColorModeValue(colors.primary4, colors.white)}
            _hover={{
              color: useColorModeValue(colors.gray[400], colors.gray[600]),
            }}
            fontSize={{ base: '20px', md: '30px', lg: '35px' }}
            fontFamily={'oswald'}
            fontWeight={'300'}
            letterSpacing={'8px'}
            textTransform={'uppercase'}
            transition={'0.6s'}
            cursor={'pointer'}
          >
            Ejmen Ramic
          </Heading>
        </Link>
      </HStack>
      <Show above={'lg'}>
        <HStack
          mr={'40px'}
          fontSize={'18px'}
          fontFamily={'revert-layer'}
          cursor={'pointer'}
          h={'100%'}
        >
          <Link to={'/'} data-testid={'home-link'}>
            <Box
              h={'100%'}
              borderColor={homeHovered ? colors.links : colors.primary4}
              borderTopWidth={homeHovered ? '8px' : '0px'}
              borderTopColor={colors.links}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: colors.links }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>Home</Trans>
              </Button>
            </Box>
          </Link>
          <Link to={'/resume'} data-testid={'resume-link'}>
            <Box
              h={'100%'}
              borderColor={resumeHovered ? colors.links : colors.primary4}
              borderTopWidth={resumeHovered ? '8px' : '0px'}
              borderTopColor={colors.links}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: colors.links }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>Resume</Trans>
              </Button>
            </Box>
          </Link>
          {/* <Box
            h={'100%'}
            borderColor={hobbiesHovered ? colors.links : colors.primary4}
            borderTopWidth={hobbiesHovered ? '4px' : '0px'}
            borderTopColor={colors.links}
            transition={'all 0.1s ease-in-out'}
            onMouseEnter={() => {
              setHobbiesHovered(true)
            }}
            onMouseLeave={() => {
              setHobbiesHovered(false)
            }}
            overflow={'hidden'}
            justifyItems={'center'}
            boxSizing={'border-box'}
          >
            <DropDownHobbies />
          </Box> */}
          <Link to={'/about'} data-testid={'about-link'}>
            <Box
              h={'100%'}
              borderColor={aboutHovered ? colors.links : colors.primary4}
              borderTopWidth={aboutHovered ? '8px' : '0px'}
              borderTopColor={colors.links}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: colors.links }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>About Me</Trans>
              </Button>
            </Box>
          </Link>
          <Link to={'/contact'} data-testid={'contact-link'}>
            <Box
              h={'100%'}
              borderColor={contactHovered ? colors.links : colors.primary4}
              borderTopWidth={contactHovered ? '8px' : '0px'}
              borderTopColor={colors.links}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: colors.links }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>Contacts</Trans>
              </Button>
            </Box>
          </Link>
          <Box
            h={'100%'}
            borderColor={languageHovered ? colors.links : colors.primary4}
            borderTopWidth={languageHovered ? '4px' : '0px'}
            borderTopColor={colors.links}
            transition={'all 0.1s ease-in-out'}
            onMouseEnter={() => {
              setLanguageHovered(true)
            }}
            onMouseLeave={() => {
              setLanguageHovered(false)
            }}
            overflow={'hidden'}
            justifyItems={'center'}
            boxSizing={'border-box'}
          >
            <LanguageMenu />
          </Box>
          {/* <AccountButton /> */}
          <ColorMode />
        </HStack>
      </Show>
      <Show below={'lg'}>
        <Flex justifyContent={'flex-end'} w={'full'} mr={'15px'}>
          <ColorMode />
        </Flex>
      </Show>
      <Show below={'lg'}>
        <HeaderMobile />
      </Show>
    </Flex>
  )
}

export default Header
