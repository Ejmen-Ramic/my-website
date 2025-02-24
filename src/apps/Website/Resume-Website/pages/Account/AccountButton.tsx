import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { colors } from '../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const AccountButton: FC = (props: ButtonProps) => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Link to={'/signin'}>
        <Button bg={useColorModeValue(colors.gray[300], `${colors.white}14`)}>
          <MdOutlineAccountCircle size={'22px'} />
        </Button>
      </Link>
    </Flex>
  )
}

export default AccountButton
