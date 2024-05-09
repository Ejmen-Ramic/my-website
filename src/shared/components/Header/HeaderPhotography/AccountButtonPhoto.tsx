import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AccountButton = (props: ButtonProps) => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Link to={'/signin'}>
        <Button
          bg={useColorModeValue('gray.300', '#A4A3A3')}
          _hover={{ color: 'white', bgColor: '#817e7e' }}
          p={'13px'}
        >
          <MdOutlineAccountCircle size={'22px'} />
        </Button>
      </Link>
    </Flex>
  )
}

export default AccountButton
