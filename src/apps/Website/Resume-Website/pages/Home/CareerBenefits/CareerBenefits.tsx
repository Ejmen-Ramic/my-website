import {
  Box,
  HStack,
  Heading,
  Hide,
  VStack,
  Text,
  Button,
  Icon,
  Grid,
} from '@chakra-ui/react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { colors } from '../../../../../../shared/components/Hooks/color';

const CareerBenefits = () => {
  // const [lightColor, darkColor] = useToken("colors", ["#FFBB88", "#FF6000"]);

  return (
    <HStack
      minH={{ base: '700px', lg: '800px' }}
      w={'full'}
      mx={'auto'}
      p={{ base: '0px', md: '50px' }}
      zIndex={0}
      backgroundImage={'url(./Website/Home/blueImage.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <FadeInView>
        <Grid
          w={'100%'}
          gridColumnGap={'150px'}
          templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        >
          <VStack
            position={'relative'}
            minH={'600px'}
            maxW={'710px'}
            zIndex={1}
          >
            <VStack alignItems={'flex-start'} p={'50px'}>
              <Heading color={colors.white}>
                Career Benefits of Learning Coding
              </Heading>
              <Text pb={'30px'} pt={'30px'} color={colors.white}>
                Coding is a part of computer programming, and coders, also known
                as programmers, write instructions for what a computer,
                software, or application does and how it does. Coders or
                programmers wh write computer programs are the backbones of
                almost every modern technology being used today. That's why
                computer programming abilities enhance anyone to become a
                computer programmer and attain numerous highly skilled and paid
                job opportunities in this modern tech world. Here are the main
                benefits of learning coding that can affect an individual's
                growth and life for the better:
                <br /> <br />• To attain career advancements prospects across
                industries.
                <br /> • To get a better understanding of technology.
                <br /> • To enhance problem-solving skills.
                <Hide below={'lg'}>
                  <br />
                </Hide>
              </Text>
              {/* <Button
                    bgGradient={'linear(to right, #FFBB88, #FF6000)'}
                    _hover={{
                      bgGradient: 'linear(to right, #FF6000, #FFBB88)',
                      backgroundPosition: 'right center',
                    }}
                    transition={'box-shadow 0.9s ease'}
                  >
                    <Icon as={BsFillInfoCircleFill} boxSize={4} /> Need More Information
                  </Button> */}
              <Button mt={'20px'}>
                <Icon as={BsFillInfoCircleFill} boxSize={4} /> Need More
                Information
              </Button>
            </VStack>
          </VStack>
          <VStack>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              w={'full'}
              h={'full'}
              backgroundColor={colors.white}
              borderRadius={{ base: '20px 20px 0 0', md: '25px' }}
              boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.6)'}
            >
              <Heading mb={'20px'} fontSize={{ base: '23px', md: '30' }}>
                Benefits of Learning Coding
              </Heading>
            </Box>
          </VStack>
        </Grid>
      </FadeInView>
    </HStack>
  );
};
export default CareerBenefits;
