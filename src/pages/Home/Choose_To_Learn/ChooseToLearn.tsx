import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  HStack,
  Hide,
  Show,
  Link,
} from "@chakra-ui/react";
import items from "./Props";
import FadeInView from "../../../components/Hooks/FadeInView";

const ChooseToLearn: React.FC = () => {
  const zoomInStyles = {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  return (
    <HStack
      maxW={{ base: "440px", md: "600px", lg: "1000px" }}
      px={{ base: "20px", md: "20px", lg: "0px" }}
      mx={"auto"}
    >
      <FadeInView>
        <HStack>
          {/* Title & text */}
          <Hide below="lg">
            <VStack alignItems={"start"} p={"40px"}>
              <Heading>Choose what to learn</Heading>
              <Text>
                Start learning the best <br /> programming languages.
              </Text>
            </VStack>
          </Hide>
          <Box w={"100%"}>
            <Show below="lg">
              <VStack p={"40px"} textAlign={"center"}>
                <Heading>
                  <Box as={"span"}>Choose {""}</Box> what to learn
                </Heading>
                <Text>Start learning the best programming languages.</Text>
              </VStack>
            </Show>
            <Grid
              templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr "]}
              gap={5}
              w={"100%"}
              mt={["20px", 0]}
            >
              {/* Buttons */}
              {items.map(({ icon, name, link }, i) => {
                const ItemIcon = icon;
                return (
                  <GridItem key={i}>
                    <VStack align={"start"}>
                      <Link href={link} w={"100%"}>
                        <Button
                          w={{ base: "100%", md: "100%", lg: "100%" }}
                          h={"62px"}
                          _hover={zoomInStyles}
                          leftIcon={<ItemIcon size={"28"} color={"#1A202C"} />}
                          fontSize={"20px"}
                          fontFamily={"body"}
                          letterSpacing={"1px"}
                          boxShadow={"md"}
                          borderWidth={"1px"}
                          color={"#1A202C"}
                          backgroundColor={"white"}
                          justifyContent={{ base: "center", lg: "flex-start" }}
                          pl={{ lg: "15%" }}
                        >
                          {name}
                        </Button>
                      </Link>
                    </VStack>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </HStack>
      </FadeInView>
    </HStack>
  );
};
export default ChooseToLearn;
