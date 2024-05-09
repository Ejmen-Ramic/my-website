import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AccountButton = (props: ButtonProps) => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Link to={'/signin'}>
        <Button
          bg={useColorModeValue('#979191', '#FFFFFF14')}
          color={'white'}
          _hover={{ bgColor: useColorModeValue('#817e7e', 'gray.600') }}
          p={'13px'}
        >
          <MdOutlineAccountCircle size={'22px'} />
        </Button>
      </Link>
    </Flex>
  )
}

export default AccountButton
