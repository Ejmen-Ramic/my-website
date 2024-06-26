import { VStack, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import ProgrammingTable from './ProgrammingTable'
import ToolsTable from './ToolsTable'
import OSTable from './OSTable'
import LanguageProficiency from './LanguageProficiency'
import DesignTable from './DesignTable'
import { Trans } from '@lingui/macro'

const SkillsResume = () => {
  return (
    <VStack w={'full'} alignItems={'start'}>
      <Heading textTransform={'uppercase'} fontSize={'18px'} color={useColorModeValue('#000000', '#ECEFF4')}>
        <Trans>Skills</Trans>
      </Heading>
      <Box bgColor={useColorModeValue('#000000', '#ECEFF4')} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} spacing={'20px'} alignItems={'start'}>
        <ProgrammingTable />
        <ToolsTable />
        <DesignTable />
        <OSTable />
        <LanguageProficiency />
      </VStack>
    </VStack>
  )
}

export default SkillsResume
