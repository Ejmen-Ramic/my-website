// import { HStack, Box, Button, Divider, VStack } from '@chakra-ui/react'
// import React from 'react'
// import ProgressBar from './ProgressBar'
// import { colors } from '../../../../../../shared/components/Hooks/color'

// type ResultCardProps = {
//   correct: number
//   total: number
//   restartQuiz: () => void
// }

// const Results = {
//   Good: {
//     title: 'You are a car expert!!',
//     description:
//       'You have got the best answers! Based on your answers, our system detected that you are a car expert!!',
//   },
//   Bad: {
//     title: 'You are a bad driver!!',
//     description:
//       'You have got the worst answers! Based on your answers, our system detected that you are a bad driver!!',
//   },
// }

// const ResultCard: React.FC<ResultCardProps> = ({ correct, total, restartQuiz }) => {
//   const result = correct > 4 ? Results.Good : Results.Bad
//   return (
//     <VStack h={'230px'}>
//       <ProgressBar current={total} total={total} />
//       <HStack>
//         <Box fontSize={'25px'} fontWeight={'600'} color={'#20252f'}>
//           {result.title}
//         </Box>
//       </HStack>
//       <HStack>
//         <Box>{result.description}</Box>
//       </HStack>
//       <Divider />
//       <HStack>
//         <Box fontSize={'16px'} color={'#20252f'}>
//           You got {correct} out of {total} questions correct!
//         </Box>
//       </HStack>
//       <Divider />
//       <Button
//         size={'lg'}
//         h={'40px'}
//         w={'150px'}
//         _hover={{ bg: colors.white, color: colors.black }}
//         bg={colors.black}
//         color={colors.white}
//         border={'1px'}
//         borderRadius={'0px'}
//         borderColor={colors.black}
//         letterSpacing={'3px'}
//         fontSize={'12px'}
//         onClick={restartQuiz}
//       >
//         RESTART
//       </Button>
//     </VStack>
//   )
// }

// export default ResultCard
