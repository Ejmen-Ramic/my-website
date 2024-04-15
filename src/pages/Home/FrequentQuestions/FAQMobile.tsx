import { Accordion } from "@chakra-ui/react";
import { FC } from "react";
import FAQItemBox from "./FAQItemBox";
import { FAQItem } from ".";

type Props = {
  items: FAQItem[];
};

const FAQMobile: FC<Props> = ({ items }) => {
  return (
    <Accordion w={"full"} allowToggle>
      {items.map(({ title, description }, i) => (
        <FAQItemBox
          key={`mobile_item_${i}`}
          title={title}
          description={description}
        />
      ))}
    </Accordion>
  );
};

export default FAQMobile;
