import { Box, useColorModeValue } from "@chakra-ui/react"
import About from "./About"


const AboutPage = () => {
 const CONFETTI_LIGHT = ``; // add svg here
  const CONFETTI_DARK = ``; // add svg here

  const backgroundImage = useColorModeValue(
    `url('data:image/svg+xml;utf8,${encodeURIComponent(CONFETTI_LIGHT)}')`,
    `url('data:image/svg+xml;utf8,${encodeURIComponent(CONFETTI_DARK)}')`
  );
  return (
    <Box
      h={"full"}
      w={"full"}
      id={"contact"}
    >
      <About />
    </Box>
  )
}

export default AboutPage
