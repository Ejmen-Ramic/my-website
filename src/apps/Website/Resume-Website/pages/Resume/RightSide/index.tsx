import { useColorModeValue, VStack } from '@chakra-ui/react';
import Education from './Education';
import ProExperience from './ProExperience';
import Projects from './ProjectResume';
import ExtraCurriculum from './ExtraCurriculum';

const ResumeRightSide = () => {
  return (
    <VStack
      w={'full'}
      maxW={{ lg: '540px' }}
      maxH={'full'}
      spacing={'40px'}
      bgColor={useColorModeValue('#FFFFFF', '#1b1b1b')}
      alignItems={'start'}
      px={{ base: '25px', md: '20px', lg: '28px' }}
      py={{ base: '25px', md: '11px', lg: '31px' }}
      pb={'40px'}
    >
      <Education />
      <ProExperience />
      <Projects />
      <ExtraCurriculum />
    </VStack>
  );
};

export default ResumeRightSide;
