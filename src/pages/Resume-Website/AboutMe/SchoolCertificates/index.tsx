import {
  Box,
  chakra,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  VStack,
} from '@chakra-ui/react'
import { steps } from './items'

const SchoolCertificates = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <VStack w={'full'}>
      <chakra.h3 fontSize={'36px'} fontWeight={'bold'} mb={'42px'} textAlign={'start'}>
        School Achievements
      </chakra.h3>
      <Stack alignItems={'start'} w={'full'}>
        <Stepper size={'lg'} index={activeStep} orientation={'vertical'} height={'400px'} gap='0'>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Stack>
    </VStack>
  )
}

export default SchoolCertificates
