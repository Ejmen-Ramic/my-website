import {
  Box,
  Button,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

const OldFooter = () => {
  return (
    <Stack
      direction={["column", "row"]}
      h={{ base: "670px", md: "382px", lg: "352px" }}
      w={"full"}
      backgroundColor={"#2b333d"}
      position={"relative"}
      alignContent={"space-between"}
      justifyContent={"center"}
      pr={{ base: "20px", md: "0px", lg: "100px" }}
      pl={{ base: "20px", md: "0px" }}
    >
      <Stack
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w={{ base: "100%", md: "40%" }}
          h={{ md: "74%", lg: "60%" }}
          pr={{ lg: "10%" }}
          mb={{ base: "5%", md: "0%" }}
        >
          <Text
            fontSize={"24px"}
            textTransform={"uppercase"}
            fontFamily={"inherit"}
            fontWeight={"400"}
            color={"white"}
            mb={"30px"}
          >
            web
            <Box color={"red"} as={"span"}>
              X
            </Box>
            arkitect
          </Text>
          <Text
            fontSize={"13px"}
            fontFamily={"revert-layer"}
            fontWeight={"400"}
            color={"white"}
          >
            Welcome to WebXArkitect! We are a team of skilled developers and
            designers who specialize in crafting custom web solutions for
            businesses of all sizes. <br /> <br />
            Powered by {""}
            <Link href="https://react.dev/" isExternal>
              <Box as="span" color="#02bece">
                React
              </Box>
            </Link>
            <Box as={"span"} color={"white"}>
              {""} • {""}
            </Box>
            <Link href="https://www.typescriptlang.org/" isExternal>
              <Box as="span" color="#02bece">
                Typescript
              </Box>
            </Link>
            <Box as={"span"} color={"white"}>
              {""} • {""}
            </Box>
            <Link href="https://chakra-ui.com/" isExternal>
              <Box as="span" color="#02bece">
                Chakra UI
              </Box>
            </Link>
          </Text>
        </Box>

        <Box w={{ base: "100%", md: "10%" }} h={{ md: "75%", lg: "65%" }}>
          <VStack
            alignItems={"flex-start"}
            mt={{ base: "10px" }}
            mb={{ base: "5%", md: "0%" }}
            fontFamily={"inherit"}
          >
            <Text
              mb={{ md: "20px" }}
              fontSize={"17px"}
              color={"white"}
              fontFamily={"inherit"}
              fontWeight={"400"}
            >
              Navigate
            </Text>
            <Link
              href={"/"}
              color={"#02bece"}
              _hover={{ color: "white" }}
              fontSize={"16px"}
            >
              Home
            </Link>
            <Link
              href={"/"}
              color={"#02bece"}
              _hover={{ color: "white" }}
              fontSize={"16px"}
            >
              Portfolio
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                variant="link"
                border={"none"}
                _hover={{ color: "white" }}
                _expanded={{ color: "white" }}
                color={"#02bece"}
                fontWeight={"light"}
                fontSize={"16px"}
                textTransform={"capitalize"}
              >
                Hobbies
              </MenuButton>
              <MenuList borderRadius={"3px"}>
                <MenuItem>Photography</MenuItem>
                {/* <MenuItem>Become a Tutor</MenuItem> */}
              </MenuList>
            </Menu>
            <Link
              href={"/"}
              color={"#02bece"}
              _hover={{ color: "white" }}
              fontSize={"16px"}
            >
              About Me
            </Link>
            <Link
              href={"/"}
              color={"#02bece"}
              _hover={{ color: "white" }}
              fontSize={"16px"}
            >
              Contacts
            </Link>
          </VStack>
        </Box>
        <Box
          w={{ base: "100%", md: "30%" }}
          h={{ md: "70%", lg: "60%" }}
          alignContent={"start"}
        >
          <VStack alignItems={"start"} ml={{ md: "0%", lg: "40%" }}>
            <Text
              color={"white"}
              fontSize={"19px"}
              fontFamily={"inherit"}
              letterSpacing={"0px"}
              mb={{ md: "20px" }}
              mt={{ base: "20px", md: "0px" }}
            >
              News Letter
            </Text>
            <Stack w={"100%"}>
              <Input
                w={{ base: "100%", md: "100%", lg: "300px" }}
                color={"white"}
                backgroundColor={"white"}
                borderColor={"gray"}
                borderWidth={"1px"}
                placeholder="email"
                borderRadius={"8px"}
                _focus={{ backgroundColor: "white", color: "black" }}
              />
              <Button
                w={{ base: "100%", md: "100%", lg: "300px" }}
                backgroundColor={"#02bece"}
                borderRadius={"15px"}
                h={"35px"}
                textTransform={"uppercase"}
                border={0}
                _hover={{ backgroundColor: "white", color: "black" }}
              >
                subscribe
              </Button>
            </Stack>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  )
}

export default OldFooter
