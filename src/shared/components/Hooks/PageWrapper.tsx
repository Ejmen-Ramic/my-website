import { Box } from "@chakra-ui/react"

const PageWrapper = ({children}: {children: React.ReactNode}) => {
    return(
        <Box>
            {children}
        </Box>
    )
}
export default PageWrapper