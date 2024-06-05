import {
  Box,
  chakra,
  HStack,
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
  useBreakpointValue,
  useSteps,
  VStack,
} from '@chakra-ui/react'
import { steps } from './items'
import { Trans } from '@lingui/macro'

const SchoolCertificates = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const handleStepClick = (index: number) => {
    setActiveStep(index === activeStep ? -1 : index)
  }

  const breakpoint = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' })

  const getStepHeight = () => {
    if (breakpoint === 'base') {
      return '700px'
    }
    if (breakpoint === 'md') {
      return '600px'
    }
    if (breakpoint === 'lg') {
      return '800px'
    }
    return '400px'
  }

  return (
    <VStack w={'full'} px={{ md: '100px', lg: '25%' }}>
      <chakra.h3 fontSize={'36px'} fontWeight={'bold'} mb={{ base: '35px', md: '42px' }} textAlign={'center'}>
        <Trans>School Achievements</Trans>
      </chakra.h3>
      <Stack alignItems={'start'} w={'full'} mb={{ md: '50px' }}>
        <Stepper size={'lg'} index={activeStep} orientation={'vertical'} height={getStepHeight()} gap={'0'}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => handleStepClick(index)}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
              </StepIndicator>

              <Box flexShrink={'0'} style={{ paddingBottom: '50px' }}>
                <StepTitle>{step.title}</StepTitle>
                <HStack w={'full'}>
                  <StepDescription>{step.description}</StepDescription>
                </HStack>
                {activeStep === index && step.image && (
                  <Box
                    w={{ base: '260px', md: '400px', lg: '550px' }}
                    h={{ lg: '750px' }}
                    ml={{ lg: '100px' }}
                    mt={'10px'}
                    mb={'10px'}
                    as={'img'}
                    src={step.image}
                    alt={step.title}
                    boxShadow={'md'}
                  />
                )}
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Stack>
      <Box h={{ md: '200px' }} />
    </VStack>
  )
}

export default SchoolCertificates
