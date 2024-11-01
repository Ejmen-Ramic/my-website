import {
  Box,
  Heading,
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
  Text,
  Button,
} from '@chakra-ui/react'
import { steps } from './items'
import { Trans } from '@lingui/macro'

const SchoolCertificates = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
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
    <VStack w={'full'} px={{ md: '100px', lg: '5%' }}>
      <Heading
        fontSize={'36px'}
        fontWeight={'bold'}
        mb={{ base: '35px', md: '42px' }}
        textAlign={'center'}
      >
        <Trans>School Achievements</Trans>
      </Heading>
      <Stack alignItems={'start'} w={'full'} mb={{ md: '50px' }}>
        <Stepper
          size={'lg'}
          index={activeStep}
          orientation={'vertical'}
          height={getStepHeight()}
          gap={'0'}
        >
          {steps.map((step, index) => (
            <Step key={step.id} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink={'0'} style={{ paddingBottom: '50px' }}>
                <StepTitle>{step.title}</StepTitle>
                <HStack w={'full'}>
                  <StepDescription>{step.description}</StepDescription>
                </HStack>
                {activeStep === index && step.image && (
                  <Stack w={'full'} direction={{ base: 'column', lg: 'row' }}>
                    <Box
                      w={{ base: '260px', md: '400px', lg: '850px' }}
                      h={{ lg: '750px' }}
                      ml={{ lg: '100px' }}
                      mt={'10px'}
                      mb={'10px'}
                      as={'img'}
                      src={step.image}
                      alt={step.title}
                      boxShadow={'md'}
                    />
                    <VStack
                      w={'full'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      px={'5%'}
                      spacing={'35px'}
                    >
                      <Heading>
                        <Trans>{step.sideTitle}</Trans>
                      </Heading>
                      <Text w={'full'} maxW={{ base: '300px', lg: '550px' }}>
                        <Trans>{step.sideDescription}</Trans>
                      </Text>
                      <Box mt={4}>
                        {activeStep > 0 && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation()
                              handlePrevious()
                            }}
                            mr={4}
                          >
                            Previous
                          </Button>
                        )}
                        {activeStep !== steps.length - 1 && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleNext()
                            }}
                          >
                            Next
                          </Button>
                        )}
                      </Box>
                    </VStack>
                  </Stack>
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
