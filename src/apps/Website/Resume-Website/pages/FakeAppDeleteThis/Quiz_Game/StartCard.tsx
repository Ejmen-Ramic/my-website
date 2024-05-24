import { FC } from "react";
import QuizButton from "./QuizButton";
import { Box  } from "@chakra-ui/react";

type StartScreenProps = {
  startQuiz: () => void;
};

const StartScreen: FC<StartScreenProps> = ({ startQuiz }) => {
  return (
    <>
      <Box>Welcome to the Quiz Game</Box>
      <Box>
        Please press the <b>"Start"</b> to begin the quiz
      </Box>
      <QuizButton
        text={"START"}
        onClick={() => {
          startQuiz();
        }}
      />
    </>
  );
};

export default StartScreen;
