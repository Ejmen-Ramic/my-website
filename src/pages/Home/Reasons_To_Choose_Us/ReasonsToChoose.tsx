import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Hide,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoPricetags } from "react-icons/io5";
import { IoThumbsUp } from "react-icons/io5";
import { GiStairsGoal } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import FadeInView from "../../../components/Hooks/FadeInView";

const ReasonsToChoose = () => {
  return (
    // Parent Stack
    <VStack
      spacing={0}
      mx={"auto"}
      minH={{ base: "900px", md: "450px", lg: "500px" }}
      maxW={{ base: "100%", md: "90%", lg: "1600px" }}
    >
      <FadeInView>
        <Grid templateColumns={["1fr", "1fr ", "1fr", "1fr 1fr"]}>
          <GridItem>
            <Box
              h={"500px"}
              justifyItems={"center"}
              textAlign={"start"}
              p={{ base: "20px", md: "40px", lg: "70px" }}
              zIndex={1}
              position={"relative"}
              pt={{ lg: "20px" }}
              backgroundImage="linear-gradient(to top, rgba(5,23,33,2) 0%, rgba(5,23,33,0) 100%)"
            >
              <Image
                src={"./Website/Home/code.jpg"}
                alt={"Background"}
                objectFit={"cover"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={0}
                width={"100%"}
                height={"100%"}
                filter={{ base: "brightness(0.1)", lg: "brightness(0.1)" }} // Bottom fading effect
              />
              <Box position={"relative"} pt={{ lg: "40px" }} zIndex={1}>
                <Heading mt={{ base: "25px" }} color={"white"}>
                  Reasons to{" "}
                  <Box as={"span"} color={"red"}>
                    Count
                  </Box>{" "}
                  on Us
                </Heading>
                <Text mt={"20px"} color={"white"}>
                  Our coding school boasts a team of highly skilled and
                  experienced instructors who are passionate about teaching
                  coding. They possess deep knowledge in various programming
                  languages and technologies, ensuring that our students receive
                  expert guidance and mentorship throughout their learning
                  journey. Our instructors are dedicated to fostering a
                  supportive and engaging environment, enabling customers to
                  learn effectively and gain valuable coding skills.
                </Text>
                <Button
                  mt={"20px"}
                  leftIcon={<Icon as={BsFillInfoCircleFill} boxSize={4} />}
                >
                  Need More Information
                </Button>
              </Box>
            </Box>
          </GridItem>
          {/* </Hide> */}
          <GridItem>
            {/* Main Container for the Right side */}
            <Box w={"100%"} h={{ base: "full", md: "500px" }}>
              <SimpleGrid columns={[1, 1, 2]}>
                {/* 1st Reason */}
                <Box
                  height={"250px"}
                  px={"20px"}
                  py={"20px"}
                  pr={"40px"}
                  bg={useColorModeValue("white", "#171923")}
                  borderWidth={"1px"}
                  borderColor={"#E4E4E4"}
                  borderLeft={{ lg: 0 }}
                  borderBottom={0}
                >
                  <HStack justify={"space-between"}>
                    <Box
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"50px"}
                      bgColor={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Icon
                        as={IoPricetags}
                        boxSize={9}
                        color={useColorModeValue("#1A202C", "#1A202C")}
                      />
                    </Box>
                    <Box
                      w={"30px"}
                      h={"30px"}
                      borderRadius={"20px"}
                      color={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"40px"}
                      fontWeight={"extrabold"}
                    >
                      01
                    </Box>
                  </HStack>
                  <Heading mt={"20px"} fontSize={"l"} fontWeight={"extrabold"}>
                    Best Price Guarantee
                  </Heading>
                  <Text mt={"20px"}>
                    You won't find better value in the{" "}
                    <Hide below={"lg"}>
                      <br />{" "}
                    </Hide>
                    marketplace. If you find a lower price,
                    <Hide below={"lg"}>
                      <br />
                    </Hide>
                    send us the offer, and we'll beat it.
                  </Text>
                </Box>

                {/* 2nd Reason */}
                <Box
                  height={"250px"}
                  px={"20px"}
                  py={"20px"}
                  pr={"40px"}
                  bg={useColorModeValue("white", "#171923")}
                  borderWidth={"1px"}
                  borderColor={"#E4E4E4"}
                  borderLeft={{ lg: 0 }}
                  borderBottom={0}
                >
                  <HStack justify={"space-between"}>
                    <Box
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"50px"}
                      bgColor={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Icon
                        as={IoThumbsUp}
                        boxSize={9}
                        color={useColorModeValue("#1A202C", "#1A202C")}
                      />
                    </Box>
                    <Box
                      w={"30px"}
                      h={"30px"}
                      borderRadius={"20px"}
                      color={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"40px"}
                      fontWeight={"extrabold"}
                    >
                      02
                    </Box>
                  </HStack>
                  <Heading mt={"20px"} fontSize={"l"} fontWeight={"extrabold"}>
                    Guaranteed to Run
                  </Heading>
                  <Text mt={"20px"}>
                    Our training courses are 100%{" "}
                    <Hide below={"lg"}>
                      <br />{" "}
                    </Hide>
                    guaranteed to run on dates provided,
                    <Hide below={"lg"}>
                      <br />
                    </Hide>
                    wether they are classroom, virtual, or In-house.
                  </Text>
                </Box>

                {/* 3rd Reason */}
                <Box
                  height={"250px"}
                  px={"20px"}
                  py={"20px"}
                  pr={"40px"}
                  bg={useColorModeValue("white", "#171923")}
                  borderWidth={"1px"}
                  borderColor={"#E4E4E4"}
                  borderLeft={{ lg: 0 }}
                >
                  <HStack justify={"space-between"}>
                    <Box
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"50px"}
                      bgColor={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Icon
                        as={GiStairsGoal}
                        boxSize={9}
                        color={useColorModeValue("#1A202C", "#1A202C")}
                      />
                    </Box>
                    <Box
                      w={"30px"}
                      h={"30px"}
                      borderRadius={"20px"}
                      color={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"40px"}
                      fontWeight={"extrabold"}
                    >
                      03
                    </Box>
                  </HStack>
                  <Heading mt={"20px"} fontSize={"l"} fontWeight={"extrabold"}>
                    Highly Experienced Staff
                  </Heading>
                  <Text mt={"20px"}>
                    Our support staff and Instructors have{" "}
                    <Hide below={"lg"}>
                      <br />{" "}
                    </Hide>
                    years of experience In meeting the
                    <Hide below={"lg"}>
                      <br />
                    </Hide>
                    specific needs of our clients and{" "}
                    <Hide below={"lg"}>
                      <br />
                    </Hide>{" "}
                    delivering exceptional quality.
                  </Text>
                </Box>

                {/* 4th Reason */}
                <Box
                  height={"250px"}
                  px={"20px"}
                  py={"20px"}
                  pr={"40px"}
                  bg={useColorModeValue("white", "#171923")}
                  borderWidth={"1px"}
                  borderColor={"#E4E4E4"}
                  borderLeft={{ lg: 0 }}
                >
                  <HStack justify={"space-between"}>
                    <Box
                      w={"50px"}
                      h={"50px"}
                      borderRadius={"50px"}
                      bgColor={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Icon
                        as={TbCertificate}
                        boxSize={9}
                        color={useColorModeValue("#1A202C", "#1A202C")}
                      />
                    </Box>
                    <Box
                      w={"30px"}
                      h={"30px"}
                      borderRadius={"20px"}
                      color={"#F5F5F5"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"40px"}
                      fontWeight={"extrabold"}
                    >
                      04
                    </Box>
                  </HStack>
                  <Heading mt={"20px"} fontSize={"l"} fontWeight={"extrabold"}>
                    Award-Winning Training Material
                  </Heading>
                  <Text mt={"20px"}>
                    Our training program are supported by our well researched,
                    and high-quality course material that will assist the
                    learners in gaining full knowledge into their desired
                    subject matter.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </GridItem>
        </Grid>
      </FadeInView>
    </VStack>
  );
};

export default ReasonsToChoose;
