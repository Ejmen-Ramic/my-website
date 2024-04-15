import { Button } from "@chakra-ui/react";
import { FC, MouseEventHandler } from "react";

type QuizButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const QuizButton: FC<QuizButtonProps> = ({ text, onClick, disabled}) => {
  return (
    <Button 
    disabled={disabled}
    position={'relative'}
    ml={'20px'}
      size={"lg"}
      h={"40px"}
      w={"150px"}
      _hover={{ bg: "black", color: "white" }}
      bg={"white"}
      color={"black"}
      border={"1px"}
      borderRadius={"0px"}
      borderColor={"black"}
      letterSpacing={"3px"}
      fontSize={"12px"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default QuizButton;
