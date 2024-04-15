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
} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi"

const MenuContainerMobile = () => {
  return (
    <Flex h={"full"}>
      <DropDownMenuMobile />
    </Flex>
  )
}

const dropdownLinks = [
  {
    name: "Photography",
    path: "/photography",
  },
  // {
  //   name: "Become a Tutor",
  //   path: "/hobbies",
  // },
]

const DropDownMenuMobile = () => {
  const color = useColorModeValue("#2b333d", "white")

  return (
    <Menu autoSelect={false} isLazy>
      {({ isOpen, onClose }) => (
        <>
          <MenuButton
            _hover={{ color: "#02bece" }}
            fontWeight={"light"}
            color={color}
            fontSize={"18px"}
            fontFamily={"revert-layer"}
            letterSpacing={"1px"}
            ml={"59%"}
            mb={"5px"}
          >
            <Flex alignItems="center">
              <Text>Hobbies</Text>
              <Icon
                as={BiChevronDown}
                h={"100%"}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
              />
            </Flex>
          </MenuButton>
          <MenuList>
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

interface MenuLinkProps {
  name: string
  path: string
  onClose: () => void
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <chakra.a href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "#02bece",
          bg: useColorModeValue("gray.100", "gray.900"),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </chakra.a>
  )
}

export default MenuContainerMobile
