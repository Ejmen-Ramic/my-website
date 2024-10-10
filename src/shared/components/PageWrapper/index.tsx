import Footer from "./Footer/Footer"
import Header from "./Header"
import PageWrapper from "../Hooks/PageWrapper"
import { Box, BoxProps, StackProps } from "@chakra-ui/react"

interface PageWrapperProps extends StackProps {
    children: React.ReactNode

}

const Page = ({children}: PageWrapperProps) => {
    return(
        <PageWrapper display={'flex'} flexDirection={'column'} minH={'100vh'}>
        <Header/>
        <Box flex={'1'}>{children}</Box>
        <Footer />
        </PageWrapper>
    )
}

export default Page