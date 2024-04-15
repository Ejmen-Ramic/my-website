import { IconType } from "react-icons";
import {
  SiPython,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiChakraui,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";

export type CTLProps = {
  icon: IconType;
  name: string;
  link: string;
};

const items: CTLProps[] = [
  {
    icon: SiPython,
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    icon: SiHtml5,
    name: "HTML",
    link: "https://www.htmldocs.com/",
  },
  {
    icon: SiCss3,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: SiReact,
    name: "React",
    link: "https://react.dev/",
  },
  {
    icon: SiChakraui,
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
  },

  {
    icon: SiNextdotjs,
    name: "Next.js",
    link: "https://nextjs.org/",
  },

  {
    icon: SiGithub,
    name: "GitHub",
    link: "https://github.com/",
  },
];

export default items;

// import { EmailIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Button,
//   Grid,
//   GridItem,
//   Heading,
//   VStack,
//   Text,
//   HStack,
//   Hide,
//   Show,
//   Icon,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import items from "./Props";

// const ChooseToLearn: React.FC = () => {
//   const zoomInStyles = {
//     transition: "transform 0.3s",
//     "&:hover": {
//       transform: "scale(1.1)",
//     },
//   };

//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <HStack
//       minH={{ base: "900px", md: "450px", lg: "700px" }}
//       maxW={{ base: "440px", md: "600px", lg: "1000px" }}
//       px={{ base: "20px", md: "20px", lg: "0px" }}
//       mx={"auto"}
//       p={4}
//       py={"80px"}
//     >
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={fadeInVariants}
//       >
//         <HStack>
//           {/* Title & text */}
//           <Hide below="lg">
//             <VStack alignItems={"start"} p={"40px"}>
//               <Heading>Choose what to learn</Heading>
//               <Text>
//                 Start learning the best <br /> programming languages.
//               </Text>
//             </VStack>
//           </Hide>
//           <Box w={"100%"}>
//             <Show below="lg">
//               <VStack p={"40px"} textAlign={"center"}>
//                 <Heading>
//                   <Box as={"span"}>Choose {""}</Box> what to learn
//                 </Heading>
//                 <Text>Start learning the best programming languages.</Text>
//               </VStack>
//             </Show>
//             <Grid
//               templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr "]}
//               gap={5}
//               w={"100%"}
//               mt={["20px", 0]}
//             >
//               {/* Buttons */}
//               {items.map(({ icon, name }, i) => {
//                 const ItemIcon = icon;
//                 return (
//                   <GridItem key={i}>
//                     <VStack align={"start"}>
//                       <Button
//                         w={{ base: "100%", md: "100%", lg: "100%" }}
//                         h={"62px"}
//                         _hover={zoomInStyles}
//                         leftIcon={<ItemIcon size={"25"} color={"#1A202C"} />}
//                         fontSize={"20px"}
//                         fontFamily={"body"}
//                         letterSpacing={"1px"}
//                         boxShadow={"md"}
//                         borderWidth={"1px"}
//                         color={"#1A202C"}
//                         backgroundColor={"white"}
//                         justifyContent={{ base: "center", lg: "flex-start" }}
//                         pl={{ lg: "15%" }}
//                       >
//                         {name}
//                       </Button>
//                     </VStack>
//                   </GridItem>
//                 );
//               })}
//             </Grid>
//           </Box>
//         </HStack>
//       </motion.div>
//     </HStack>
//   );
// };
// export default ChooseToLearn;
