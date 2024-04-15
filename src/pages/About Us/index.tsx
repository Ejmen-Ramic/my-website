import { Box, useColorModeValue } from "@chakra-ui/react"
import About from "./About"

// const confetti = {
//   light: {
//     primary: "4299E1", // blue.400
//     secondary: "BEE3F8", // blue.100
//   },

//   dark: {
//     primary: "1A365D", // blue.900
//     secondary: "2A4365", // blue.800
//   },
// };

const AboutPage = () => {
  const CONFETTI_LIGHT = ``
  const CONFETTI_DARK = ``

  return (
    <Box
      h={"full"}
      w={"full"}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      id={"contact"}
    >
      <About />
    </Box>
  )
}

export default AboutPage
