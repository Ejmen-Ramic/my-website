import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
  useDisclosure,
  useColorModeValue,
  Show,
  Hide,
} from '@chakra-ui/react'
import IconBurger from '../../icons/IconBurger'
import IconBurgerMobile from '../../icons/IconBurgerMobile'
import { Link } from 'react-router-dom'
import { IoBriefcaseOutline, IoHomeOutline, IoPersonOutline, IoFileTrayFullOutline, IoCodeSlash } from 'react-icons/io5'
import MenuContainerMobile from './Button Hover/DropDownMenuMobile'
import { IconType } from 'react-icons'

const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue('#2b333d', 'white')

  // Define the menu items array with explicit type annotations
  const menuItems: (MenuItemLink | React.ReactElement)[] = [
    { label: 'Home', icon: IoHomeOutline, to: '/' },
    { label: 'Portfolio', icon: IoBriefcaseOutline, to: '/portfolio' },
    <MenuContainerMobile />,
    { label: 'About Me', icon: IoCodeSlash, to: '/about' },
    { label: 'Contacts', icon: IoFileTrayFullOutline, to: '/contact' },
    { label: 'My Account', icon: IoPersonOutline, to: '/signin' },
  ]

  return (
    <Box>
      <Box mr={'20px'}>
        <Button onClick={onOpen} variant={'unstyled'} fontSize={'15px'} mt={{ base: '30%', md: '25%' }}>
          <Hide below={'md'}>
            <IconBurger size={'30px'} />
          </Hide>
          <Show below={'md'}>
            <IconBurgerMobile size={'20px'} />
          </Show>
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={useColorModeValue('white', '#2b333d')}>
          <DrawerCloseButton size={'20px'} color={useColorModeValue('#2b333d', 'white')} mt={'17px'} mr={'20px'} />
          <DrawerHeader
            color={useColorModeValue('#2b333d', 'white')}
            fontSize={'25px'}
            fontFamily={''}
            letterSpacing={'2px'}
          >
            Main Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {menuItems.map((item, index) => (
                <Box key={index} transition={'all 0.1s ease-in-out'}>
                  {isMenuItemLink(item) ? (
                    <Link to={item.to}>
                      <Button
                        variant={'link'}
                        border={'none'}
                        _hover={{ color: '#02bece' }}
                        color={color}
                        fontWeight={'light'}
                        fontSize={'18px'}
                        letterSpacing={'1px'}
                        textTransform={'capitalize'}
                        ml={'7.5%'}
                      >
                        {item.icon && <item.icon size={30} style={{ marginRight: '12px' }} />}
                        {item.label}
                      </Button>
                    </Link>
                  ) : (
                    item
                  )}
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile

// Type for menu item with link
interface MenuItemLink {
  label: string
  icon?: IconType
  to: string
}

// Function to check if an item is a MenuItemLink
const isMenuItemLink = (item: any): item is MenuItemLink => {
  return (item as MenuItemLink).to !== undefined
}