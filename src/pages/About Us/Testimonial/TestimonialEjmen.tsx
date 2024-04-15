import { Fragment } from "react";
import {
  Container,
  Text,
  Stack,
  Avatar,
  Icon,
  Image,
  Box,
  Show,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";
import FadeInView from "../../../components/Hooks/FadeInView";

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: "Ejmen Ramic",
    position: "CEO",
    company: "WebXArkitect",
    image: "./Website/About-Us/ejmenbusiness.png",
    content:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
  },
];

const TestimonialEjmen = () => {
  return (
    <Container maxW={"5xl"} p={{ base: 0, md: 8 }}>
      <FadeInView>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              bgGradient={"linear(to-br, #42e14e, blue.300)"}
              spacing={{ base: 0, sm: 10 }}
              p={{ base: 4, sm: 10 }}
              rounded={"lg"}
              justify={"center"}
            >
              <Show above="md">
                <Box width={"40rem"} pos={"relative"}>
                  <Image
                    boxSize={"l"}
                    pos={"absolute"}
                    rounded={"lg"}
                    src={obj.image}
                    top={"-3.8rem"}
                    boxShadow={"lg"}
                  />
                </Box>
              </Show>

              <Stack
                direction={"column"}
                spacing={4}
                textAlign={"left"}
                maxW={"4xl"}
              >
                <Icon as={ImQuotesLeft} w={10} h={10} color={"gray.700"} />
                <Text fontSize={"md"} fontWeight={"medium"}>
                  {obj.content}
                </Text>
                <Stack
                  alignItems={{ base: "center", sm: "flex-start" }}
                  spacing={0}
                >
                  <Show below={"md"}>
                    <Avatar
                      size={"xl"}
                      showBorder={true}
                      borderColor="green.400"
                      name={"avatar"}
                      src={obj.image}
                    />
                  </Show>
                  <Text fontWeight={"bold"} fontSize={"lg"} mt={"100px"}>
                    {obj.name}
                  </Text>
                  <Text
                    fontWeight={"medium"}
                    fontSize={"sm"}
                    color={"gray.600"}
                  >
                    {obj.position}, {obj.company}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Fragment>
        ))}
      </FadeInView>
    </Container>
  );
};

export default TestimonialEjmen;
