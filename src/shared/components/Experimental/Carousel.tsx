import { Box } from "@chakra-ui/react";

const Delete = () => {
  return <Box></Box>;
};
export default Delete;

// import { Flex, Image, Text, Button, HStack, FlexProps } from "@chakra-ui/react";
// import {
//   Carousel,
//   CarouselItem,
//   useCarouselItem,
//   CarouselItems,
//   useCarousel,
// } from "chakra-framer-carousel";
// import { MotionProps } from "framer-motion";
// import { useState, useRef, useEffect } from "react";

// // @ts-ignore
// export interface MotionFlexProps extends FlexProps, MotionProps {}

// type Props = {
//   image: string;
//   index: number;
// };

// const images = [
//   "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=",
//   "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
// ];

// function CarouselDemo() {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   const handleMouseDown = (e: { clientX: number }) => {
//     setIsDragging(true);
//     setStartX(e.clientX - translateX);
//   };

//   const handleMouseMove = (e: { clientX: number }) => {
//     if (!isDragging) return;
//     const x = e.clientX - startX;
//     setTranslateX(x);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <Carousel>
//       <CarouselItems>
//         {images.map((image, index) => {
//           return (
//             <CarouselItem index={index} key={image}>
//               <Card
//                 index={index}
//                 image={image}
//                 isDragging={isDragging}
//                 translateX={translateX}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//               />
//             </CarouselItem>
//           );
//         })}
//       </CarouselItems>
//       <Toolbar />
//     </Carousel>
//   );
// }

// function Toolbar() {
//   const { onNext, onPrevious } = useCarousel();
//   return (
//     <Flex w="full" justify="center">
//       <HStack>
//         <Button w="115px" onClick={onPrevious}>
//           Previous
//         </Button>
//         <Button w="115px" onClick={onNext}>
//           Next
//         </Button>
//       </HStack>
//     </Flex>
//   );
// }

// function Card({
//   image,
//   index,
//   isDragging,
//   translateX,
//   onMouseDown,
//   onMouseMove,
//   onMouseUp,
// }: Props & {
//   isDragging: boolean;
//   translateX: number;
//   onMouseDown: any;
//   onMouseMove: any;
//   onMouseUp: any;
// }) {
//   const { numberOfSlides, onClickHandler, position } = useCarouselItem();
//   const isCenter = position === "center";

//   return (
//     <div
//       style={{
//         transform: `translateX(${isDragging ? translateX : 0}px)`,
//         cursor: isDragging ? "grabbing" : "grab",
//       }}
//       onMouseDown={onMouseDown}
//       onMouseMove={onMouseMove}
//       onMouseUp={onMouseUp}
//       onMouseLeave={onMouseUp}
//     >
//       <Flex
//         boxSize={isCenter ? "400px" : "300px"}
//         pos="relative"
//         boxShadow="lg"
//         as="button"
//         onClick={onClickHandler}
//       >
//         <Flex
//           borderRadius="full"
//           bg="whiteAlpha.400"
//           p={2}
//           left={2}
//           top={2}
//           position="absolute"
//         >
//           <Text>{`${index + 1}/${numberOfSlides}`}</Text>
//         </Flex>

//         <Image
//           src={image}
//           boxSize={isCenter ? "400px" : "300px"}
//           objectFit="cover"
//           objectPosition="center center"
//           borderRadius={10}
//           _hover={{
//             scale: 1.1,
//           }}
//         />
//       </Flex>
//     </div>
//   );
// }

// export default function CarouselExp() {
//   return (
//     <Flex
//       height="100%"
//       width="100%"
//       minHeight="100vh"
//       justify="flex-start"
//       align="flex-start"
//       flexDir="column"
//       p={10}
//       bg="rgb(26,31,42)"
//     >
//       <Flex bg="rgb(26,31,42)" w="fit-content" gap="10" flexDir="column">
//         <CarouselDemo />
//       </Flex>
//     </Flex>
//   );
// }
