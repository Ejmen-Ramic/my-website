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
} from "@chakra-ui/react"
import IconBurger from "../../icons/IconBurger"
import { useState } from "react"
import IconBurgerMobile from "../../icons/IconBurgerMobile"
import { Link } from "react-router-dom"
import DropDownMenuMobile from "./Button Hover/DropDownMenuMobile"

const HeaderMobile = () => {
  const [homeHovered, setHomeHovered] = useState(false)
  const [portfolioHovered, setPortfolioHovered] = useState(false)
  const [hobbiesHovered, setHobbiesHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)
  const [accountHovered, setAccountHovered] = useState(false)

  // const blurStyle = isOpen ? { filter: 'blur(30px)' } : {}
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showMenu] = useState(false)

  return (
    <Box>
      <Box mr={"20px"}>
        <Button
          onClick={onOpen}
          variant="unstyled"
          fontSize={"15px"}
          mt={{ base: "30%", md: "25%" }}
          // style={blurStyle}
        >
          <Hide below="md">
            <IconBurger size={"30px"} />
          </Hide>
          <Show below="md">
            <IconBurgerMobile size={"20px"} />
          </Show>
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement={"right"}
        onClose={() => {
          onClose()
        }}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={useColorModeValue("white", "#2b333d")}>
          <DrawerCloseButton
            color={useColorModeValue("#2b333d", "white")}
            mt={"7px"}
          />
          <DrawerHeader
            color={useColorModeValue("#2b333d", "white")}
            fontFamily={"heading"}
            letterSpacing={"3px"}
          >
            Main Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Box alignItems={"flex-end"} fontFamily={"body"}>
                <Link to="/">
                  <Box
                    borderColor={homeHovered ? "#02bece" : "#2b333d"}
                    borderRightWidth={
                      showMenu ? "0px" : homeHovered ? "4px" : "0px"
                    }
                    borderRightColor="#02bece"
                    transition="all 0.1s ease-in-out"
                    onMouseEnter={() => setHomeHovered(true)}
                    onMouseLeave={() => setHomeHovered(false)}
                  >
                    <Button
                      variant={"link"}
                      border={"none"}
                      _hover={{ color: "#02bece" }}
                      color={useColorModeValue("#2b333d", "white")}
                      fontWeight={"light"}
                      fontSize={"18px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      textAlign={"right"}
                      ml={"65%"}
                      mb={"5px"}
                    >
                      Home
                    </Button>
                  </Box>
                </Link>
                <Link to="/portfolio">
                  <Box
                    h={"100%"}
                    borderColor={portfolioHovered ? "#02bece" : "#2b333d"}
                    borderRightWidth={
                      showMenu ? "0px" : portfolioHovered ? "4px" : "0px"
                    }
                    borderRightColor="#02bece"
                    transition="all 0.1s ease-in-out"
                    onMouseEnter={() => setPortfolioHovered(true)}
                    onMouseLeave={() => setPortfolioHovered(false)}
                  >
                    <Button
                      variant={"link"}
                      border={"none"}
                      _hover={{ color: "#02bece" }}
                      color={useColorModeValue("#2b333d", "white")}
                      fontWeight={"light"}
                      fontSize={"18px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      ml={"56.5%"}
                      mb={"5px"}
                    >
                      Portfolio
                    </Button>
                  </Box>
                </Link>

                <Box
                  h={"100%"}
                  borderColor={hobbiesHovered ? "#02bece" : "#2b333d"}
                  borderRightWidth={
                    showMenu ? "0px" : hobbiesHovered ? "4px" : "0px"
                  }
                  borderRightColor="#02bece"
                  transition="all 0.1s ease-in-out"
                  onMouseEnter={() => setHobbiesHovered(true)}
                  onMouseLeave={() => setHobbiesHovered(false)}
                ></Box>
                <Box
                  h={"100%"}
                  borderColor={hobbiesHovered ? "#02bece" : "#2b333d"}
                  pr={"12%"}
                  borderRightWidth={
                    showMenu ? "0px" : hobbiesHovered ? "4px" : "0px"
                  }
                  borderRightColor="#02bece"
                  transition="all 0.1s ease-in-out"
                  onMouseEnter={() => {
                    setHobbiesHovered(true)
                  }}
                  onMouseLeave={() => {
                    setHobbiesHovered(false)
                  }}
                >
                  <DropDownMenuMobile />
                </Box>
                <Link to="/about">
                  <Box
                    h={"100%"}
                    borderColor={aboutHovered ? "#02bece" : "#2b333d"}
                    borderRightWidth={
                      showMenu ? "0px" : aboutHovered ? "4px" : "0px"
                    }
                    borderRightColor="#02bece"
                    transition="all 0.1s ease-in-out"
                    onMouseEnter={() => setAboutHovered(true)}
                    onMouseLeave={() => setAboutHovered(false)}
                  >
                    <Button
                      variant={"link"}
                      border={"none"}
                      _hover={{ color: "#02bece" }}
                      color={useColorModeValue("#2b333d", "white")}
                      fontWeight={"light"}
                      fontSize={"18px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      ml={"54%"}
                      mb={"5px"}
                    >
                      About Me
                    </Button>
                  </Box>
                </Link>
                <Link to="/contact">
                  <Box
                    h={"100%"}
                    borderColor={contactHovered ? "#02bece" : "#2b333d"}
                    borderRightWidth={
                      showMenu ? "0px" : contactHovered ? "4px" : "0px"
                    }
                    borderRightColor="#02bece"
                    transition="all 0.1s ease-in-out"
                    onMouseEnter={() => setContactHovered(true)}
                    onMouseLeave={() => setContactHovered(false)}
                  >
                    <Button
                      variant={"link"}
                      border={"none"}
                      _hover={{ color: "#02bece" }}
                      marginLeft={0}
                      color={useColorModeValue("#2b333d", "white")}
                      fontWeight={"light"}
                      fontSize={"18px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      ml={"48%"}
                      mb={"5px"}
                    >
                      Contacts
                    </Button>
                  </Box>
                </Link>
                <Link to="/signin">
                  <Box
                    h={"100%"}
                    borderColor={accountHovered ? "#02bece" : "#2b333d"}
                    borderRightWidth={
                      showMenu ? "0px" : accountHovered ? "4px" : "0px"
                    }
                    borderRightColor="#02bece"
                    transition="all 0.1s ease-in-out"
                    onMouseEnter={() => setAccountHovered(true)}
                    onMouseLeave={() => setAccountHovered(false)}
                  >
                    <Button
                      variant={"link"}
                      border={"none"}
                      _hover={{ color: "#02bece" }}
                      marginLeft={0}
                      color={useColorModeValue("#2b333d", "white")}
                      fontWeight={"light"}
                      fontSize={"18px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      ml={"46%"}
                      mb={"5px"}
                    >
                      My Account
                    </Button>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile
