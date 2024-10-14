import Footer from "./Footer/Footer"
import Header from "./Header"
import PageWrapper from "../Hooks/PageWrapper"
import { Box, StackProps } from "@chakra-ui/react"

interface PageWrapperProps extends StackProps {
    children: React.ReactNode
    isFooterDisabled?: boolean
    isHeaderDisabled?: boolean
}

const Page = ({children, isFooterDisabled = true, isHeaderDisabled = true}: PageWrapperProps) => {
    return(
        <PageWrapper display={'flex'} flexDirection={'column'} minH={'100vh'}>
        {isHeaderDisabled && <Header isStickyHeader={true}/>}
        <Box flex={'1'}>{children}</Box>
        {isFooterDisabled && <Footer />}
        </PageWrapper>
    )
}

export default Page