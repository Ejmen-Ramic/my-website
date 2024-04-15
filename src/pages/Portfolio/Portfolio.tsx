import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Stack } from "@chakra-ui/react";

const Portfolio: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Stack minH={"1000px"} width={"full"}></Stack>
      <Footer />
    </>
  );
};

export default Portfolio;
