import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'
import { BiChevronDown } from 'react-icons/bi'
import { IoCameraOutline } from 'react-icons/io5'
import { colors } from '../../../Hooks/color'

const MenuContainerMobile = () => {
  return (
    <Flex h={'full'}>
      <DropDownMenuMobile />
    </Flex>
  )
}

interface MenuLinkProps {
  name: string
  path: string
  onClose: () => void
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <chakra.a href={path} onClick={() => onClose()}>
      <MenuItem
        fontSize={'16px'}
        letterSpacing={'1px'}
        _hover={{
          color: colors.links,
          bg: useColorModeValue(colors.gray[100], colors.gray[900]),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </chakra.a>
  )
}
const dropdownLinks = [
  {
    name: t`Photography (dev)`,
    path: '/photography',
  },
  // {
  //   name: "Become a Tutor",
  //   path: "/hobbies",
  // },
]

const DropDownMenuMobile = () => {
  const color = useColorModeValue(colors.primary4, colors.white)

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
          >
            <Flex alignItems={'center'}>
              <IoCameraOutline size={33} style={{ marginRight: '12px' }} />
              <Text>
                <Trans>Hobbies</Trans>
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
                path={link.path}
                onClose={onClose}
              />
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default MenuContainerMobile
