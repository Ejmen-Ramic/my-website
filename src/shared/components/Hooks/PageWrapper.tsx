import { Box, BoxProps } from "@chakra-ui/react"

interface PageWrapperProps extends BoxProps {
    children: React.ReactNode
}
const PageWrapper = ({children, ...Props}: PageWrapperProps) => {
    return(
        <Box {...Props}>
            {children}
        </Box>
    )
}
export default PageWrapper