import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  useTheme,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const data: CardProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best forests to visit in North America",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
    category: "beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
];

function Card({ image, title, category }: CardProps) {
  const theme = useTheme();

  return (
    <Box
      shadow="md"
      p="6"
      borderRadius="md"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box>
        <Text
          fontSize="xs"
          color={theme.colors.whiteAlpha[700]}
          textTransform="uppercase"
        >
          {category}
        </Text>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="bold"
          mt="2"
          color={theme.colors.white}
        >
          {title}
        </Heading>
      </Box>
      <Button variant="outline" colorScheme="dark">
        Read article
      </Button>
    </Box>
  );
}

export function CardsCarousel() {
  const theme = useTheme();
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item) => (
    <Box key={item.title}>
      <Card {...item} />
    </Box>
  ));

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="row"
      alignItems="start"
      flexWrap="wrap"
      gap="6"
      ml={isMobile ? "2" : "0"}
    >
      {slides}
    </Box>
  );
}
