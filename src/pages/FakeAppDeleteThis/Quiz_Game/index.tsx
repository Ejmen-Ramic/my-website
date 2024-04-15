import { HStack } from "@chakra-ui/react";
import QuizGame from "./QuizGame";

import { Box } from "@chakra-ui/react";

const Quiz = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={'10%'}>
      <HStack>
        <QuizGame />
      </HStack>
    </Box>
  );
};


export default Quiz;
