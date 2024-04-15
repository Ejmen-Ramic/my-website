import { Divider, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import { Questions } from "./Questions";
import QuizButton from "./QuizButton";
import ResultCard from "./ResultCard";
import StartScreen from "./StartCard";

const InitialAnswers = Array(Questions.length).fill(undefined);

const Quiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(InitialAnswers);

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setIsResult(false);
    setCurrentQuestion(0);
    setUserAnswers(InitialAnswers);
  };

  const sumCorrectAnswers = () => {
    let count = 0;
    for (const answer of userAnswers) {
      if (answer.includes("correct")) count++;
    }
    return count;
  };
  return (
    <VStack w={"500px"} h={"500px"}>
      {isQuizStarted && (
        <ProgressBar current={currentQuestion + 1} total={Questions.length} />
      )}
      <VStack w={"100%"} p={"10px"} border={`1px solid #DFDFDF`}>
        {/** When start button is pressed this will be triggered resulting in questions being shown.  */}
        {!isQuizStarted && !isResult && (
          <StartScreen
            startQuiz={() => {
              setIsQuizStarted(true);
            }}
          />
        )}

        {isQuizStarted && (
          <QuestionCard
            index={Questions?.[currentQuestion]?.index}
            answers={Questions?.[currentQuestion]?.answers}
            question={Questions?.[currentQuestion]?.question}
            currentAnswer={userAnswers?.[currentQuestion]}
            onAnswer={(answer) => {
              const Answers = [...userAnswers];
              Answers[currentQuestion] = answer;
              setUserAnswers(Answers);
            }}
          />
        )}
        {isQuizStarted && (
          <>
            <Divider />
            <HStack>
              {/** When this button is pressed it the isQuizStarted will be triggered and will display the ResultCard  */}
              {currentQuestion === Questions.length - 1 ? (
                <QuizButton
                  text="RESULTS"
                  onClick={() => {
                    setIsQuizStarted(false);
                    setIsResult(true);
                  }}
                />
              ) : (
                /** This is a button to go onto the previous question */
                <QuizButton
                  disabled={currentQuestion === 0}
                  text="PREVIOUS"
                  onClick={() => {
                    const prevQuestion = currentQuestion - 1;
                    if (prevQuestion >= 0) {
                      setCurrentQuestion(prevQuestion);
                      if (
                        Questions[currentQuestion].answers[0].value !==
                        userAnswers[currentQuestion]
                      ) {
                      }
                    }
                  }}
                />
              )}
              {/**This is a button and when pressed it changes to next question if the user has selected the right answer. The button disappears when it is on last question. */}
              {currentQuestion === Questions.length - 1 ? null : (
                <QuizButton
                  text="NEXT"
                  disabled={!userAnswers[currentQuestion]}
                  onClick={() => {
                    const nextQuestion = currentQuestion + 1;
                    if (nextQuestion < Questions.length) {
                      setCurrentQuestion(nextQuestion);

                      if (
                        Questions[currentQuestion].answers[0].value ===
                        userAnswers[currentQuestion]
                      ) {
                      }
                    }
                  }}
                />
              )}
            </HStack>
          </>
        )}

        {/**This will pass the restartQuiz function to the ResultCard component */}
        {isResult && (
          <ResultCard
            correct={sumCorrectAnswers()}
            total={Questions.length}
            restartQuiz={restartQuiz}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default Quiz;
