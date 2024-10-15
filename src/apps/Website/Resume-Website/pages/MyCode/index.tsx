import { Box, HStack } from "@chakra-ui/react"
import Page from "../../../../../shared/components/PageWrapper"
import SideMenu from "./SideMenu"

const MyCode = () => {
  return (
   <Page>
    <HStack w={'full'}>
    <SideMenu/>
    <Box w={'full'}></Box>
    <Box w={'full'}></Box>
    </HStack>
    </Page>
  )
}

export default MyCode
