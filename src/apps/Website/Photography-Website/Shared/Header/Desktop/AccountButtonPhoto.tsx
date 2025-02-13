import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { colors } from '../../../../../../shared/components/Hooks/color'

const AccountButton = (props: ButtonProps) => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Link to={'/signin'}>
        <Button
          bg={useColorModeValue('#979191', `${colors.white}14`)}
          color={colors.white}
          _hover={{
            bgColor: useColorModeValue(colors.primary[200], colors.gray[600]),
          }}
          p={'13px'}
        >
          <MdOutlineAccountCircle size={'22px'} />
        </Button>
      </Link>
    </Flex>
  )
}

export default AccountButton
