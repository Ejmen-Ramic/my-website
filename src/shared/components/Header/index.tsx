import { Box, Button, Flex, Heading, HStack, Show, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import HeaderMobile from './Mobile'
import { Link } from 'react-router-dom'
import ColorMode from '../Color-Mode/ColorMode'
import AccountButton from '../../../apps/Website/Resume-Website/pages/Account/Button/AccountButton'
import DropDownHobbies from './Desktop/DropDownHobbies'
import LanguageMenu from './Desktop/LanguageMenu'
import { Trans } from '@lingui/macro'
import { colors } from '../Hooks/color'

const Header = () => {
  const [homeHovered, setHomeHovered] = useState(false)
  const [resumeHovered, setResumeHovered] = useState(false)
  const [hobbiesHovered, setHobbiesHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)
  const [languageHovered, setLanguageHovered] = useState(false)

  return (
    <Flex
      h={{ base: '58px', md: '67px', lg: '120px' }}
      w={'full'}
      bg={useColorModeValue('gray.100', '#2b333d')}
      justifyContent={'space-between'}
      top={0}
    >
      <HStack w={'full'}>
        <Link to={'/'}>
          <Heading
            w={{ base: 'max-content', md: 'fit-content' }}
            ml={{ base: '20px', md: '40px' }}
            color={useColorModeValue('#2b333d', colors.white)}
            _hover={{ color: useColorModeValue('gray.400', 'gray.600') }}
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
        <HStack mr={'40px'} fontSize={'18px'} fontFamily={'revert-layer'} cursor={'pointer'} h={'100%'}>
          <Link to={'/'}>
            <Box
              h={'100%'}
              borderColor={homeHovered ? '#02bece' : '#2b333d'}
              borderTopWidth={homeHovered ? '8px' : '0px'}
              borderTopColor='#02bece'
              transition='all 0.1s ease-in-out'
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              overflow='hidden'
              justifyItems={'center'}
              boxSizing='border-box'
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: '#02bece' }}
                color={useColorModeValue('#2b333d', colors.white)}
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
          <Link to={'/resume'}>
            <Box
              h={'100%'}
              borderColor={resumeHovered ? '#02bece' : '#2b333d'}
              borderTopWidth={resumeHovered ? '8px' : '0px'}
              borderTopColor='#02bece'
              transition='all 0.1s ease-in-out'
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
              overflow='hidden'
              justifyItems={'center'}
              boxSizing='border-box'
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: '#02bece' }}
                color={useColorModeValue('#2b333d', colors.white)}
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
            borderColor={hobbiesHovered ? '#02bece' : '#2b333d'}
            borderTopWidth={hobbiesHovered ? '4px' : '0px'}
            borderTopColor='#02bece'
            transition='all 0.1s ease-in-out'
            onMouseEnter={() => {
              setHobbiesHovered(true)
            }}
            onMouseLeave={() => {
              setHobbiesHovered(false)
            }}
            overflow='hidden'
            justifyItems={'center'}
            boxSizing='border-box'
          >
            <DropDownHobbies />
          </Box> */}
          <Link to={'/about'}>
            <Box
              h={'100%'}
              borderColor={aboutHovered ? '#02bece' : '#2b333d'}
              borderTopWidth={aboutHovered ? '8px' : '0px'}
              borderTopColor='#02bece'
              transition='all 0.1s ease-in-out'
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
              overflow='hidden'
              justifyItems={'center'}
              boxSizing='border-box'
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: '#02bece' }}
                color={useColorModeValue('#2b333d', colors.white)}
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
          <Link to={'/contact'}>
            <Box
              h={'100%'}
              borderColor={contactHovered ? '#02bece' : '#2b333d'}
              borderTopWidth={contactHovered ? '8px' : '0px'}
              borderTopColor='#02bece'
              transition='all 0.1s ease-in-out'
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              overflow='hidden'
              justifyItems={'center'}
              boxSizing='border-box'
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: '#02bece' }}
                color={useColorModeValue('#2b333d', colors.white)}
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
            borderColor={languageHovered ? '#02bece' : '#2b333d'}
            borderTopWidth={languageHovered ? '4px' : '0px'}
            borderTopColor='#02bece'
            transition='all 0.1s ease-in-out'
            onMouseEnter={() => {
              setLanguageHovered(true)
            }}
            onMouseLeave={() => {
              setLanguageHovered(false)
            }}
            overflow='hidden'
            justifyItems={'center'}
            boxSizing='border-box'
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
