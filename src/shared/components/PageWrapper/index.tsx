import Footer from "./Footer/Footer"
import Header from "./Header"
import PageWrapper from "../Hooks/PageWrapper"
import { Box } from "@chakra-ui/react"



const Page = ({children}: {children: React.ReactNode}) => {
    return(
        <PageWrapper display={'flex'} flexDirection={'column'} minH={'100vh'}>
        <Header/>
        <Box flex={'1'}>{children}</Box>
        <Footer />
        </PageWrapper>
    )
}

export default Page