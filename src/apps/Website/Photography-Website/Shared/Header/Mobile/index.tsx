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
  IoPersonOutline,
  IoFileTrayFullOutline,
  IoCodeSlash,
} from 'react-icons/io5'
import MenuContainerMobile from './DropDownMenuMobile'
import { IconType } from 'react-icons'
import HeaderForm from './Form'
import IconBurgerMobile from '../../../../../../shared/icons/IconBurgerMobile'
import IconBurger from '../../../../../../shared/icons/IconBurger'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'
import { FC } from 'react'

type MenuItemLink = {
  label: string
  icon?: IconType
  to: string
}

const HeaderMobile: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue(colors.primary4, colors.white)
  const year = new Date().getFullYear()

  const isMenuItemLink = (item: any): item is MenuItemLink => {
    return (item as MenuItemLink).to !== undefined
  }
  const menuItems: (MenuItemLink | React.ReactElement)[] = [
    { label: t`Home`, icon: IoHomeOutline, to: '/' },
    { label: t`Resume`, icon: IoBriefcaseOutline, to: '/resume' },
    <MenuContainerMobile />,
    { label: t`About Me`, icon: IoCodeSlash, to: '/about' },
    { label: t`Contacts`, icon: IoFileTrayFullOutline, to: '/contact' },
    { label: t`My Account`, icon: IoPersonOutline, to: '/signin' },
  ]

  return (
    <Box>
      <Box mr={'20px'}>
        <Button
          onClick={onOpen}
          variant={'unstyled'}
          fontSize={'15px'}
          mt={{ base: '30%', md: '43%', lg: '25%' }}
        >
          <Hide below={'md'}>
            <IconBurger size={'30px'} />
          </Hide>
          <Show below={'md'}>
            <Box
              as={IconBurgerMobile}
              size={'20px'}
              _hover={{ color: colors.links }}
            />
          </Show>
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={useColorModeValue(colors.white, colors.primary4)}
        >
          <DrawerCloseButton
            size={'20px'}
            color={useColorModeValue(colors.primary4, colors.white)}
            mt={'20px'}
            mr={'20px'}
            _hover={{ color: colors.links }}
          />
          <DrawerHeader
            color={useColorModeValue(colors.primary4, colors.white)}
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
                      <Link to={item.to}>
                        <Button
                          variant={'link'}
                          border={'none'}
                          _hover={{ color: colors.links }}
                          color={color}
                          fontWeight={'light'}
                          fontSize={'18px'}
                          letterSpacing={'1px'}
                          textTransform={'capitalize'}
                          ml={'7.5%'}
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
                <Trans>All rights reserved</Trans>
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile
