import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  HStack,
  Link,
  Stack,
  Center,
} from "@chakra-ui/react"
import items from "./Props"
import FadeInView from "../../../components/Hooks/FadeInView"

const TechnicalExpertise: React.FC = () => {
  const zoomInStyles = {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }

  return (
    <HStack
      maxW={{ base: "440px", md: "600px", lg: "1200px" }}
      px={{ base: "20px", md: "20px", lg: "0px" }}
      mx={"auto"}
    >
      <FadeInView>
        <Stack direction={{ base: "column", lg: "row" }}>
          {/* Title & text */}
          <Center>
            <VStack alignItems={"start"} spacing={"20px"} p={"10px"}>
              <Heading>Technical Expertise</Heading>
              <Text>
                Explore my proficiency in web development tools, programming
                languages and QA testing frameworks.
              </Text>
            </VStack>{" "}
          </Center>

          <Box w={"100%"}>
            <Grid
              templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr "]}
              gap={5}
              w={"100%"}
              mt={["20px", 0]}
            >
              {/* Buttons */}
              {items.map(({ icon, name, link }, i) => {
                const ItemIcon = icon
                return (
                  <FadeInView>
                    <GridItem key={i}>
                      <VStack align={"start"}>
                        <Link href={link} w={"100%"}>
                          <Button
                            w={{ base: "100%", md: "100%", lg: "100%" }}
                            h={"62px"}
                            _hover={zoomInStyles}
                            leftIcon={
                              <ItemIcon size={"28"} color={"#1A202C"} />
                            }
                            fontSize={"20px"}
                            fontFamily={"body"}
                            letterSpacing={"1px"}
                            boxShadow={"md"}
                            borderWidth={"1px"}
                            color={"#1A202C"}
                            backgroundColor={"white"}
                            justifyContent={{
                              base: "center",
                              lg: "flex-start",
                            }}
                            pl={{ lg: "15%" }}
                          >
                            {name}
                          </Button>
                        </Link>
                      </VStack>
                    </GridItem>
                  </FadeInView>
                )
              })}
            </Grid>
          </Box>
        </Stack>
      </FadeInView>
    </HStack>
  )
}
export default TechnicalExpertise