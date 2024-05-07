import {
  Box,
  Heading,
  VStack,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import FadeInView from '../../../../../shared/components/Hooks/FadeInView'

const MobileFrequentQuestions = () => {
  return (
    <>
      <FadeInView>
        <VStack
          w={'full'}
          minH={{ base: '900px', lg: '900px' }}
          p={{ base: '30px', lg: '100px' }}
          mt={'100px'}
          mx={'auto'}
        >
          <Heading>Frequently Asked Questions </Heading>{' '}
          <Text>
            The following list of frequently asked questions by employers that may also assist you in getting your
            questions answered:
          </Text>
          <Grid templateColumns={['1fr', '1fr', '1fr', '1fr 1fr ']} gap={'16px'} w={'100%'}>
            <GridItem>
              <Accordion allowToggle mt={{ base: '30px', md: '70px', lg: '100px' }}>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      1. What is Coding?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      2. What are the basic components of codes?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      3. How will this Programming Training benefit your career?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      4. Will this training help me to get a better job?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      5. Can you customize training material according to our company?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
            <GridItem>
              <Accordion allowToggle mt={{ base: '0px', md: '0px', lg: '100px' }}>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      6. I am unable to find the course that i am looking for.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      7. What are the types of Coding languages?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      8. What is the use of learning to code?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      9. What will I learn from this Python Programming Training Course?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      border: '1px solid #000',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      height: '48px', // Set a fixed height for the button
                    }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      10. Can you customize training material according to our company?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} style={{ display: 'block' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
        </VStack>
      </FadeInView>
    </>
  )
}

export default MobileFrequentQuestions
