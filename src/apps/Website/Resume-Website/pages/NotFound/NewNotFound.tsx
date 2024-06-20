import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from '../../../../../shared/components/Header'
import Footer from '../../../../../shared/components/Footer/Footer'
import { colors } from '../../../../../shared/components/Hooks/color'

const NotFound = () => {
  return (
    <>
      <Header />
      <VStack spacing={'50px'} minH={'700px'} width={'full'} justifyContent={'center'}>
        <Box textAlign='center' py={10} px={6}>
          <Heading
            display={'inline-block'}
            as={'h2'}
            size={'2xl'}
            bgGradient={'linear(to-r, teal.400, teal.600)'}
            backgroundClip={'text'}
          >
            404
          </Heading>
          <Text fontSize={'18px'} mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text color={'gray.500'} mb={6}>
            The page you're looking for does not seem to exist
          </Text>
          <Link to={'/'}>
            <Button
              colorScheme={'teal'}
              bgGradient={'linear(to-r, teal.400, teal.500, teal.600)'}
              color={colors.white}
              variant={'solid'}
            >
              Go to Home
            </Button>
          </Link>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default NotFound
