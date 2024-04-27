import { VStack, Box, Heading } from '@chakra-ui/react'
import ProgrammingTable from './ProgrammingTable'
import ToolsTable from './ToolsTable'
import OSTable from './OSTable'
import LanguageProficiency from './LanguageProficiency'

const SkillsResume = () => {
  return (
    <VStack w={'full'} alignItems={'start'}>
      <Heading textTransform={'uppercase'} fontSize={'18px'} color={'#ECEFF4'}>
        Skills
      </Heading>
      <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} spacing={'20px'} alignItems={'start'}>
        <ProgrammingTable />
        <ToolsTable />
        <OSTable />
        <LanguageProficiency />
      </VStack>
    </VStack>
  )
}

export default SkillsResume
