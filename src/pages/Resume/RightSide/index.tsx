import { VStack } from '@chakra-ui/react'
import Education from './Education'
import ProExperience from './ProExperience'

// import { FaBriefcase, FaPaintBrush } from 'react-icons/fa'

const ResumeRightSide = () => {
  return (
    <VStack
      w={'full'}
      h={'full'}
      spacing={'40px'}
      bgColor={'#1b1b1b'}
      alignItems={'start'}
      px={{ lg: '28px' }}
      py={{ lg: '31px' }}
    >
      <Education />
      <ProExperience />
    </VStack>
  )
}

export default ResumeRightSide
