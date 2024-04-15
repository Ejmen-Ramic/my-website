import React from "react";
import {
  Stack,
  Flex,
  Box,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const menuData = [
  {
    id: 1,
    label: "Classes",
    href: "/classes",
  },
  {
    id: 2,
    label: "Become a Tutor",
    href: "/tutoring",
  },
];

const MenuContainer = () => {
  return (
    <Flex h={"100%"}>
      <DropDownMenu menuData={menuData} />
    </Flex>
  );
};

interface MenuData {
  id: number;
  label: string;
  href: string;
  linkColor?: string;
}

interface MenuDataProps {
  menuData: MenuData[];
}

const DropDownMenu = ({ menuData }: MenuDataProps) => {
  const linkColor = "#02bece";
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction={"row"} spacing={4}>
      <Popover
        trigger={"hover"}
        placement={"bottom-start"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          <HStack alignItems={"center"} cursor={"pointer"} role={"group"}>
            <Link
              p={2}
              fontSize={"18px"}
              fontFamily={"revert-layer"}
              color={useColorModeValue("#2b333d", "#white")}
              textDecor={"none"}
              letterSpacing={"1px"}
              _groupHover={{
                textDecoration: "none",
                color: linkColor,
              }}
            >
              Tutoring
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              color={useColorModeValue("#2b333d", "#white")}
              _groupHover={{
                color: linkColor,
              }}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          mt={"-5px"}
          boxShadow={useColorModeValue(
            "2px 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.9)"
          )}
          bg={useColorModeValue("white", "gray.800")}
          p={3}
          rounded={"lg"}
          maxW={"200px"}
        >
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} linkColor={linkColor} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ label, href, linkColor }: MenuData) => {
  return (
    <Link
      href={href!}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: linkColor,
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text>{label}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default MenuContainer;
