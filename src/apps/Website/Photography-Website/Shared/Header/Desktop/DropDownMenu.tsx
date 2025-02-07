import React from 'react'
import {
  Stack,
  Flex,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import { t, Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'

const menuData = [
  {
    id: 1,
    label: t`Coding`,
    href: '/',
  },
  // {
  //   id: 2,
  //   label: "Become a Tutor",
  //   href: "/hobbies",
  // },
]

const MenuContainer = () => {
  return (
    <Flex h={'100%'}>
      <DropDownMenu
        menuData={menuData}
        linkColor={useColorModeValue('#817e7e', '#02bece')}
      />
    </Flex>
  )
}

interface MenuData {
  id: number
  label: string
  href: string
}

interface MenuDataProps {
  menuData: MenuData[]
  linkColor: string
}

const DropDownMenu = ({ menuData, linkColor }: MenuDataProps) => {
  const { onOpen, onClose, open } = useDisclosure()

  return (
    <Stack direction={'row'} spacing={4}>
      <Popover
        trigger={'hover'}
        placement={'bottom-start'}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          <HStack alignItems={'center'} cursor={'pointer'} role={'group'}>
            <Link
              p={2}
              fontSize={'16px'}
              fontFamily={'revert-layer'}
              color={useColorModeValue('#2b333d', colors.white)}
              textDecor={'none'}
              letterSpacing={'1px'}
              _groupHover={{
                textDecoration: 'none',
                color: linkColor,
              }}
            >
              <Trans>Hobbies</Trans>
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              color={useColorModeValue('#2b333d', '#817e7e')}
              _groupHover={{
                color: linkColor,
              }}
              transition={'all .25s ease-in-out'}
              transform={open ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          mt={'-7px'}
          zIndex={1}
          bg={useColorModeValue(colors.white, 'gray.800')}
          p={3}
          rounded={'lg'}
          maxW={'200px'}
        >
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} linkColor={linkColor} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  )
}

const DropDownItem = ({
  label,
  href,
  linkColor,
}: MenuData & { linkColor: string }) => {
  return (
    <Link
      href={href!}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: linkColor,
      }}
    >
      <Stack direction={'row'} align={'center'}>
        <Text letterSpacing={'1px'} fontSize={'16px'}>
          {label}
        </Text>
      </Stack>
    </Link>
  )
}

export default MenuContainer
