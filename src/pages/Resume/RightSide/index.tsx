import { VStack } from '@chakra-ui/react'
import Education from './Education'
import ProExperience from './ProExperience'
import Projects from './Projects'
import ExtraCurriculum from './ExtraCurriculum'

const ResumeRightSide = () => {
  return (
    <VStack
      w={'full'}
      maxH={'full'}
      spacing={'40px'}
      bgColor={'#1b1b1b'}
      alignItems={'start'}
      px={{ lg: '28px' }}
      py={{ lg: '31px' }}
    >
      <Education />
      <ProExperience />
      <Projects />
      <ExtraCurriculum />
    </VStack>
  )
}

export default ResumeRightSide
