import { Box, BoxProps } from '@chakra-ui/react'
import { FC } from 'react'

interface PageWrapperProps extends BoxProps {
  children: React.ReactNode
}
const PageWrapper: FC<PageWrapperProps> = ({
  children,
  ...Props
}: PageWrapperProps) => {
  return <Box {...Props}>{children}</Box>
}
export default PageWrapper
