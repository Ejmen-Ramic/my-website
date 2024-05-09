import { Box, Button, Flex, Heading, HStack, Show, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './ButtonHover/DropDownMenu'
import ColorMode from '../../Color-Mode/ColorMode'
import HeaderMobile from './HeaderMobilePhoto '
import ColorModePhoto from './ColorModePhoto'
import AccountButtonPhoto from './AccountButtonPhoto'
import EjmenSignature from './EjmenSignature'

const Header = () => {
  const [homeHovered, setHomeHovered] = useState(false)
  const [resumeHovered, setResumeHovered] = useState(false)
  const [hobbiesHovered, setHobbiesHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  return (
    <Flex
      h={{ base: '58px', md: '67px', lg: '100px' }}
      w={'full'}
      bg={useColorModeValue('#ede9e3', '#2b333d')}
      justifyContent={'space-between'}
      top={0}
      // style={blurStyle}
    >
      <HStack w={'full'}>
        <Link to={'/'}>
          <Heading
            ml={{ base: '20px', md: '140px' }}
            color={useColorModeValue('#2b333d', 'white')}
            fontSize={{ base: '20px', md: '28px' }}
            fontFamily={'inherit'}
            fontWeight={'400'}
            textTransform={'uppercase'}
            _hover={{
              color: 'white',
              transition: 'color 0.2s ease-in-out',
            }}
            cursor={'pointer'}
          ></Heading>
          <EjmenSignature
            w={'160px'}
            h={'300px'}
            ml={'50px'}
            _hover={{ color: useColorModeValue('gray.400', 'gray.600') }}
            transition={'0.6s'}
          />
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
                color={useColorModeValue('#2b333d', '#817e7e')}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                home
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
                color={useColorModeValue('#2b333d', '#817e7e')}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                Resume
              </Button>
            </Box>
          </Link>
          <Box
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
            <DropDownMenu />
          </Box>
          {/* <Menu>
            <MenuButton
              as={Button}
              value={localStorage.getItem("i18nextLng") ?? "en"}
              onChange={(e) => handleLanguageChange(e)}
              rightIcon={<ChevronDownIcon />}
            >
              Language
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>Bosnian</MenuItem>
            </MenuList>
          </Menu> */}
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
                color={useColorModeValue('#2b333d', '#817e7e')}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                About Me
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
                color={useColorModeValue('#2b333d', '#817e7e')}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                Contacts
              </Button>
            </Box>
          </Link>
          <AccountButtonPhoto />
          <ColorModePhoto />
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
