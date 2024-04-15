import {
  Box,
  Button,
  HStack,
  Heading,
  Tooltip,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Welcome = () => {
  // const { t } = useTranslation(["home"])

  return (
    <Box
      position={"relative"}
      minHeight={"100vh"}
      display={"flex"}
      bgColor={"#051721"}
      w={"full"}
    >
      {/* Container For the Image Text */}

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
        backgroundImage="linear-gradient(to top, rgba(5,23,33,2) 0%, rgba(5,23,33,0) 100%)"
      >
        <Image
          src={"./Website/Home/hero.jpg"}
          alt={"Background"}
          objectFit={"cover"}
          position={"absolute"}
          top={0}
          left={0}
          zIndex={0}
          width={"100%"}
          height={"100%"}
          filter={{ base: "brightness(0.3)", lg: "brightness(0.6)" }} // Bottom fading effect
        />
      </Box>

      {/* Welcome Text */}
      <VStack
        spacing={"30px"}
        alignItems={"start"}
        mt={{ base: "150px", md: "200px" }}
        ml={{ base: "0px", lg: "100px" }}
        px={{ base: "40px", md: "70px", lg: "0px" }}
        zIndex={3}
      >
        <Text
          color={"white"}
          fontSize={{ base: "", md: "2em", lg: "2em" }}
          fontWeight={"800"}
          lineHeight={"1em"}
          textTransform={"uppercase"}
        >
          neversettle
        </Text>
        <Heading
          color={"white"}
          fontSize={{ base: "2em", md: "2em", lg: "4em" }}
          fontWeight={"700"}
          lineHeight={"1em"}
          textTransform={"uppercase"}
        >
          Explore
          <Box as={"span"} color={"red"}>
            your
          </Box>
          <br />
          limitless possibilities
        </Heading>
        <Text
          color={"white"}
          fontSize={{ md: "1.0em", lg: "1.1em" }}
          fontWeight={"400"}
          maxWidth={"700px"}
        >
          We build stunning websites and offer coding classes. Our talented team
          crafts customized sites that captivate your audience. Whether you're a
          beginner or experienced programmer, our classes enhance your coding
          skills. Join us to thrive online and unlock endless digital
          opportunities.
        </Text>
        <Tooltip>
          <a href="/">
            <Button
              textTransform={"uppercase"}
              borderRadius={"0px"}
              color={"#051721"}
              bgColor={"white"}
              display={"inline-block"}
              fontSize={"1em"}
              padding={"10px 30px"}
              fontWeight={"500"}
              marginTop={"10px"}
              letterSpacing={"2px"}
              _hover={{ letterSpacing: "7px" }}
              transition={"0.2s"}
            >
              Explore
            </Button>
          </a>
        </Tooltip>
        <HStack>
          <Tooltip label="Facebook">
            <a href="https://www.facebook.com/profile.php?id=100092716802936">
              <Button
                _hover={{ transform: "translateY(-10px)" }}
                transition={"0.2s"}
                colorScheme={"facebook"}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Button>
            </a>
          </Tooltip>
          <Tooltip label="Twitter">
            <a href="https://www.twitter.com">
              <Button
                _hover={{ transform: "translateY(-10px)" }}
                transition={"0.2s"}
                colorScheme={"purple"}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
            </a>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <a href="https://www.linkedin.com/company/webxarkitect/">
              <Button
                _hover={{ transform: "translateY(-10px)" }}
                transition={"0.2s"}
                colorScheme={"linkedin"}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
            </a>
          </Tooltip>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Welcome
// function useTranslation(arg0: string[]): { t: any } {
//   throw new Error("Function not implemented.")
// }
