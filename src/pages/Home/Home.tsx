import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Welcome from "./Welcome/WelcomePart";
import ChooseToLearn from "./Choose_To_Learn/ChooseToLearn";
import ReasonsToChoose from "./Reasons_To_Choose_Us/ReasonsToChoose";
import DeliveryMethods from "./DeliveryMethods/DeliveryMethods";
import CareerBenefits from "./Career_Benefits/CareerBenefits";
import TestimonialContent from "./ClientsThoughts/TestimonialContent";
import HostFAQ from "./FrequentQuestions";
import { VStack } from "@chakra-ui/react";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Header />

      <VStack spacing={"250px"} w={"full"}>
        <Welcome />
        <ChooseToLearn />
        <ReasonsToChoose />
        <DeliveryMethods />
        <CareerBenefits />
        <TestimonialContent />
      </VStack>
      <HostFAQ />
      <Footer />
    </>
  );
};

export default Home;
