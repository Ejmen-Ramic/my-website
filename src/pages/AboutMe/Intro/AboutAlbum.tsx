import React, { FC } from "react";
import { Box, Flex, VStack, Image } from "@chakra-ui/react";

const zoomInStyles = {
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(0.98)",
    zIndex: 1,
  },
  zIndex: 0,
};

const AboutAlbum: FC = () => {
  return (
    <Flex
      w={"full"}
      maxH={{ lg: "1200x" }}
      direction={{ base: "column", lg: "row" }}
    >
      <VStack w={"full"} spacing={"50px"}>
        <Box position={"relative"}>
          <Image
            src={"./Website/About-Us/aboutintro1.jpg"}
            alt={"About Img 1"}
            sx={zoomInStyles}
          />
        </Box>
        <Box position={"relative"}>
          <Image
            src={"./Website/About-Us/aboutintro2.jpg"}
            alt={"About Img 2"}
            sx={zoomInStyles}
          />
        </Box>
      </VStack>
      <Box
        w={"full"}
        mt={{ base: "50px", lg: "0px" }}
        ml={{ base: "0px", lg: "50px" }}
        position={"relative"}
      >
        <Image
          src={"./Website/About-Us/aboutintro3.jpg"}
          alt={"About Img 3"}
          sx={zoomInStyles}
        />
      </Box>
    </Flex>
  );
};

export default AboutAlbum;
