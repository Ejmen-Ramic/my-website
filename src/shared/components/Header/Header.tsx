import { Box, Button, Flex, Heading, HStack, Show, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import HeaderMobile from './HeaderMobile'
import { Link } from 'react-router-dom'
import ColorMode from '../Color-Mode/ColorMode'
import AccountButton from '../../../pages/Account/Button/AccountButton'
import DropDownMenu from './Button Hover/DropDownMenu'

const Header = () => {
  // const { i18n, t } = useTranslation(["common"])
  // const lang = localStorage.getItem("i18nextLng") || []

  // if (lang.length > 2) {
  //   i18n.changeLanguage("en")
  // }
  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   i18n.changeLanguage(e.target.value)
  // }

  const [homeHovered, setHomeHovered] = useState(false)
  const [portfolioHovered, setPortfolioHovered] = useState(false)
  const [hobbiesHovered, setHobbiesHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  return (
    <Flex
      h={{ base: '58px', md: '67px', lg: '120px' }}
      w={'full'}
      bg={useColorModeValue('gray.100', '#2b333d')}
      justifyContent={'space-between'}
      top={0}
      // style={blurStyle}
    >
      <HStack w={'full'}>
        <Link to={'/'}>
          <Heading
            ml={{ base: '20px', md: '40px' }}
            color={useColorModeValue('#2b333d', 'white')}
            fontSize={{ base: '20px', md: '35px' }}
            fontFamily={'inherit'}
            fontWeight={'400'}
            textTransform={'uppercase'}
            _hover={{
              color: 'white',
              transition: 'color 0.2s ease-in-out',
            }}
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
                color={useColorModeValue('#2b333d', 'white')}
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
          <Link to={'/portfolio'}>
            <Box
              h={'100%'}
              borderColor={portfolioHovered ? '#02bece' : '#2b333d'}
              borderTopWidth={portfolioHovered ? '8px' : '0px'}
              borderTopColor='#02bece'
              transition='all 0.1s ease-in-out'
              onMouseEnter={() => setPortfolioHovered(true)}
              onMouseLeave={() => setPortfolioHovered(false)}
              overflow='hidden'
              justifyItems={'center'}
              boxSizing='border-box'
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{ color: '#02bece' }}
                color={useColorModeValue('#2b333d', 'white')}
                fontWeight={'light'}
                fontSize={'18px'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                Portfolio
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
                color={useColorModeValue('#2b333d', 'white')}
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
                color={useColorModeValue('#2b333d', 'white')}
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
          <AccountButton />
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
