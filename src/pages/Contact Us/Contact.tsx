import React from "react";

import { Stack } from "@chakra-ui/react";
import ContactForm from "./Contact Form/ContactForm ";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Stack width={"full"}>
        <ContactForm />
      </Stack>
      <Footer />
    </>
  );
};

export default Contact;
