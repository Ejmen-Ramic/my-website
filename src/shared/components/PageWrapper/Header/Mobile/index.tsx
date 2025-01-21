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
  Text,
  Flex,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  // IoPersonOutline,
  IoFileTrayFullOutline,
  IoCodeSlash,
} from 'react-icons/io5'
import { IconType } from 'react-icons'
import HeaderForm from './Form'
import LanguageDropDown from './LanguageMenuMobile'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../Hooks/color'
import HamburgerIcon from './HamburgerIcon'

type MenuItemLink = {
  label: string
  icon?: IconType
  to: string
}

const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue('#2b333d', colors.white)
  const year = new Date().getFullYear()

  const isMenuItemLink = (item: any): item is MenuItemLink => {
    return (item as MenuItemLink).to !== undefined
  }
  const menuItems: (MenuItemLink | React.ReactElement)[] = [
    { label: t`Home`, icon: IoHomeOutline, to: '/' },
    { label: t`Resume`, icon: IoBriefcaseOutline, to: '/resume' },
    // <MenuContainerMobile />,
    { label: t`About Me`, icon: IoCodeSlash, to: '/about' },
    { label: t`Contacts`, icon: IoFileTrayFullOutline, to: '/contact' },
    // { label: t`My Account`, icon: IoPersonOutline, to: '/signin' },
    <LanguageDropDown />,
  ]

  return (
    <Box data-testid={'header-mobile'}>
      <Box mr={'20px'}>
        <Button
          onClick={onOpen}
          variant={'unstyled'}
          fontSize={'15px'}
          mt={{ base: '25%', md: '37%', lg: '25%' }}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
          flexDirection={'column'}
          textAlign={'center'}
          data-testid={'burger-button'}
        >
          <Hide below={'md'}>
            <HamburgerIcon isOpen={isOpen} color={color} size={'30px'} />
          </Hide>
          <Show below={'md'}>
            <HamburgerIcon isOpen={isOpen} color={color} size={'20px'} />
          </Show>
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={useColorModeValue(colors.white, '#2b333d')}
          data-testid={'drawer'}
        >
          <DrawerCloseButton
            size={'20px'}
            color={useColorModeValue('#2b333d', colors.white)}
            mt={'20px'}
            mr={'20px'}
            _hover={{ color: '#02bece' }}
            data-testid={'drawer-close-button'}
          />
          <DrawerHeader
            color={useColorModeValue('#2b333d', colors.white)}
            fontSize={'25px'}
            letterSpacing={'2px'}
          >
            <Trans>Main Menu</Trans>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={'column'} h={'full'}>
              <Stack>
                {menuItems.map((item, index) => (
                  <Box key={index} transition={'all 0.1s ease-in-out'}>
                    {isMenuItemLink(item) ? (
                      <Link
                        to={item.to}
                        data-testid={`drawer-${item.to.toLowerCase()}-link`}
                      >
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
                          data-testid={`drawer-${item.label.toLowerCase()}-link`}
                        >
                          {item.icon && (
                            <item.icon
                              size={30}
                              style={{ marginRight: '12px' }}
                            />
                          )}
                          {item.label}
                        </Button>
                      </Link>
                    ) : (
                      item
                    )}
                  </Box>
                ))}
              </Stack>
              <HeaderForm />
              <Text bottom={'0'} fontSize={'sm'} mb={'40px'} mt={'40px'}>
                <Trans>Copyright</Trans> ©{year} EjmenRamic.{' '}
                <Trans>All rights reserved.</Trans>
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile
