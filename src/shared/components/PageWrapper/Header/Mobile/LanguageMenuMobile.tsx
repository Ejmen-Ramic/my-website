import React from 'react'
import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'
import { IoLanguageOutline } from 'react-icons/io5'
import { Trans } from '@lingui/macro'
import { dynamicActivate } from '../../../LanguageSwitcher/dynamicActivate'
import { colors } from '../../../Hooks/color'

const LanguageDropDown: React.FC = () => {
  return (
    <Flex h={'full'}>
      <LanguageMenuMobile />
    </Flex>
  )
}

interface MenuLinkProps {
  name: string | JSX.Element
  locale: string
  onClose: () => void
  changeLanguage: (locale: string) => void
}

const MenuLink: React.FC<MenuLinkProps> = ({
  name,
  locale,
  onClose,
  changeLanguage,
}) => {
  return (
    <MenuItem
      fontSize={'16px'}
      letterSpacing={'1px'}
      _hover={{
        color: colors.links,
        bg: useColorModeValue(colors.gray[100], colors.gray[900]),
      }}
      onClick={() => {
        changeLanguage(locale)
        onClose()
      }}
      data-testid={`mobile-language-option-${locale}`}
    >
      <Text>{name}</Text>
    </MenuItem>
  )
}

const dropdownLinks = [
  {
    name: <Trans>English</Trans>,
    locale: 'en',
  },
  {
    name: <Trans>Bosnian</Trans>,
    locale: 'ba',
  },
]

const LanguageMenuMobile: React.FC = () => {
  const color = useColorModeValue(colors.primary4, colors.white)

  const changeLanguage = async (locale: string) => {
    await dynamicActivate(locale)
    localStorage.setItem('locale', locale)
  }

  return (
    <Menu autoSelect={false} isLazy>
      {({ isOpen, onClose }) => (
        <>
          <MenuButton
            _hover={{ color: colors.links }}
            fontWeight={'light'}
            color={color}
            fontSize={'18px'}
            fontFamily={'revert-layer'}
            letterSpacing={'1px'}
            ml={'7%'}
            mb={'5px'}
            data-testid={'language-switcher-mobile'}
          >
            <Flex alignItems={'center'}>
              <IoLanguageOutline size={33} style={{ marginRight: '12px' }} />
              <Text>
                <Trans>Languages</Trans>
              </Text>
              <Icon
                as={BiChevronDown}
                h={'100%'}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
              />
            </Flex>
          </MenuButton>
          <MenuList fontSize={''}>
            {dropdownLinks.map((link, index) => (
              <MenuLink
                key={index}
                name={link.name}
                locale={link.locale}
                onClose={onClose}
                changeLanguage={changeLanguage}
              />
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default LanguageDropDown
