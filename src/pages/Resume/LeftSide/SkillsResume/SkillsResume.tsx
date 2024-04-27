import { VStack, Box, Heading } from '@chakra-ui/react'
import SkillsTable from './SkillsTable'

const SkillsResume = () => {
  return (
    <VStack w={'full'} alignItems={'start'}>
      <Heading textTransform={'uppercase'} fontSize={'18px'} color={'#ECEFF4'}>
        Skills
      </Heading>
      <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} spacing={'0px'} alignItems={'start'}>
        {/* Add the table here */}
        <SkillsTable />
      </VStack>
    </VStack>
  )
}

export default SkillsResume
