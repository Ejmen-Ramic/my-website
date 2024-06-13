import React from 'react'
import {
  Stack,
  Flex,
  Box,
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

const menuData = [
  {
    id: 1,
    label: t`Photography (dev)`,
    href: '/photography',
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
      <DropDownHobbies menuData={menuData} />
    </Flex>
  )
}

interface MenuData {
  id: number
  label: string
  href: string
  linkColor?: string
}

interface MenuDataProps {
  menuData: MenuData[]
}

const DropDownHobbies = ({ menuData }: MenuDataProps) => {
  const linkColor = '#02bece'
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Stack direction={'row'} spacing={4}>
      <Popover trigger={'hover'} placement={'bottom-start'} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems={'center'} cursor={'pointer'} role={'group'}>
            <Link
              p={2}
              fontSize={'18px'}
              fontFamily={'revert-layer'}
              color={useColorModeValue('#2b333d', '#white')}
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
              color={useColorModeValue('#2b333d', '#white')}
              _groupHover={{
                color: linkColor,
              }}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          maxW={'200px'}
          p={3}
          mt={'-7px'}
          border={'1px'}
          borderColor={useColorModeValue('transparent', 'white')}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.800')}
          zIndex={1}
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

const DropDownItem = ({ label, href, linkColor }: MenuData) => {
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
        <Box>
          <Text>{label}</Text>
        </Box>
      </Stack>
    </Link>
  )
}

export default MenuContainer
