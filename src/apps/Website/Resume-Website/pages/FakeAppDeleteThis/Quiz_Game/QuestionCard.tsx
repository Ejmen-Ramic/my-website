// import {Box,  Divider, VStack, RadioGroup, Radio} from "@chakra-ui/react";
// import { FC } from "react";

// export type QuestionCardProps = {
//   index: number;
//   question: string;
//   onAnswer?: (answer:string) => void /** Define a type of a function */
//   answers: {
//     text: string;
//     value: string;
//   }[];
//   currentAnswer?:string
// };

// const QuestionCard: FC<QuestionCardProps> = ({ index, question, answers, onAnswer, currentAnswer }) => {
//   return (

//     <VStack w={"100%"} alignItems={"start"}>
//       <Box>
//         <b> Q{index+1}: </b> {question}
//       </Box>
//       <Divider />
//       <RadioGroup value={currentAnswer} onChange={(event:any) => {
//         if (onAnswer){
//         onAnswer(event as string)}

//       }}>
//         <VStack ml={"10px"} alignItems={"start"}>
//           {answers.map((answer, i) => {
//             return <Radio key={i} value={answer.value}>{answer.text}</Radio>;
//           })}
//         </VStack>
//       </RadioGroup>
//     </VStack>
//   );
// };

// export default QuestionCard;
