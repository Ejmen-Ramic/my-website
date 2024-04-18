import { IconType } from "react-icons"
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiChakraui,
  SiNextdotjs,
  SiWordpress,
  SiPlaywright,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiFigma,
} from "react-icons/si"

export type CTLProps = {
  icon: IconType
  name: string
  link: string
}

const items: CTLProps[] = [
  {
    icon: SiTypescript,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: SiChakraui,
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  {
    icon: SiPlaywright,
    name: "Playwright",
    link: "https://playwright.dev/",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    icon: SiReact,
    name: "React",
    link: "https://react.dev/",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    link: "https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-my_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204527&adgroup=1222657400083678&msclkid=9924bbe426d114e01328ddc48afa519f",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: SiCss3,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  {
    icon: SiWordpress,
    name: "Wordpress",
    link: "https://wordpress.org/",
  },
  // {
  //   icon: SiAdobephotoshop,
  //   name: "Adobe Photoshop",
  //   link: "",
  // },
  // {
  //   icon: SiAdobelightroom,
  //   name: "Adobe Lightroom",
  //   link: "",
  // },
  // {
  //   icon: SiFigma,
  //   name: "Figma",
  //   link: "",
  // },
]

//react-icons/si

export default items

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
