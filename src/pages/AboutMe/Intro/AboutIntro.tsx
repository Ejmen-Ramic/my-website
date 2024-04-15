import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import AboutAlbum from "./AboutAlbum";
import FadeInView from "../../../components/Hooks/FadeInView";

const AboutIntro: FC = () => {
  return (
    <FadeInView>
      <VStack
        spacing={"100px"}
        px={{ lg: "150px" }}
        mt={{ base: "50", md: "100px", lg: "150px" }}
      >
        <Flex w={"full"} direction={{ base: "column", lg: "row" }}>
          <Stack
            w={"full"}
            spacing={"30px"}
            maxW={"600px"}
            alignItems={"start"}
          >
            <Box bgColor={"red"} height={"2px"} width={"90px"}></Box>
            <Heading
              fontSize={{ base: "40px", md: "54px" }}
              fontWeight={300}
              letterSpacing={"1px"}
            >
              So, you want to know how Web
              <Box color={"red"} as={"span"} fontWeight={"bold"}>
                X
              </Box>
              Arkitect got started, huh?
            </Heading>
          </Stack>
          <Stack
            w={"full"}
            p={{ lg: "40px" }}
            spacing={"30px"}
            mt={{ base: "50px", lg: "0px" }}
            fontSize={{ base: "20px", lg: "22px" }}
          >
            <Text>
              As two young adults growing up in a dense town in Kuala Lumpur, we
              wanted to pursue further education but so many factors were
              getting in the way of achieving our dreams. School is expensive,
              there are not always feasible options nearby, and strict class
              schedules conflict with the ability to work.
              <br />
              <br /> We recognized this inflexibility and created WebXArkitect.
              This issue isn't only prevalent in Malaysia, but worldwide
              students are hoping to pursue further education opportunities and
              there simply isn't the means to do so. It's important to us to
              create flexible learning possibilities that can cater to everyone.
            </Text>
          </Stack>
        </Flex>
        <HStack>
          <AboutAlbum />
        </HStack>
      </VStack>
    </FadeInView>
  );
};

export default AboutIntro;
