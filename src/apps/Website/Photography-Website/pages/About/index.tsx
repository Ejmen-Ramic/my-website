import { VStack } from "@chakra-ui/react";
import HeaderPhotography from "../../Shared/Header/Desktop";
import FooterPhotography from "../../Shared/FooterPhotography";
import Hero from "./Hero";

const AboutPhotography: React.FC = () => {
	return (
		<>
			<HeaderPhotography />
			<VStack
				spacing={{ base: "100px", md: "100px", lg: "150px" }}
				px={{ base: "35px", lg: "0px" }}
			>
				<Hero />
			</VStack>
			<FooterPhotography />
		</>
	);
};

export default AboutPhotography;
