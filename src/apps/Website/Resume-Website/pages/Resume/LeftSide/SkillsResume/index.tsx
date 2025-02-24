import { VStack, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import ProgrammingTable from './ProgrammingTable'
import ToolsTable from './ToolsTable'
import OSTable from './OSTable'
import LanguageProficiency from './LanguageProficiency'
import DesignTable from './DesignTable'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const SkillsResume: FC = () => {
  return (
    <VStack w={'full'} alignItems={'start'}>
      <Heading
        textTransform={'uppercase'}
        fontSize={'18px'}
        color={useColorModeValue(colors.black, colors.iceGray)}
      >
        <Trans>Skills</Trans>
      </Heading>
      <Box
        bgColor={useColorModeValue(colors.black, colors.iceGray)}
        height={'2px'}
        w={'full'}
      ></Box>
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
