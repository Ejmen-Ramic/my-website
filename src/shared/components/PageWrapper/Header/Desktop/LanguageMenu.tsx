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
import { Trans } from '@lingui/macro'
import { IoLanguageOutline } from 'react-icons/io5'
import { useLanguage } from '../../../LanguageSwitcher/languageContext'
import { colors } from '../../../Hooks/color'

interface MenuData {
  name: string | JSX.Element
  locale?: string
}

interface LanguageMenuProps {
  languageOptions: MenuData[]
}

const languageOptions = [
  {
    name: <Trans>English</Trans>,
    locale: 'en',
  },
  {
    name: <Trans>Bosnian</Trans>,
    locale: 'ba',
  },
]

const MenuContainer = () => {
  return (
    <Flex h={'100%'}>
      <LanguageMenu languageOptions={languageOptions} />
    </Flex>
  )
}

const LanguageMenu = ({ languageOptions }: LanguageMenuProps) => {
  const linkColor = colors.links
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { changeLanguage } = useLanguage()

  return (
    <Stack
      direction={'row'}
      spacing={4}
      data-testid={'language-switcher-desktop'}
    >
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
              fontSize={'18px'}
              fontFamily={'revert-layer'}
              color={useColorModeValue(colors.primary4, colors.white)}
              textDecor={'none'}
              letterSpacing={'1px'}
              _groupHover={{
                textDecoration: 'none',
                color: linkColor,
              }}
            >
              <Flex alignItems={'center'}>
                <IoLanguageOutline size={22} style={{ marginRight: '8px' }} />
                <Trans>Languages</Trans>
                <Icon
                  as={FaChevronDown}
                  h={4}
                  w={4}
                  ml={'8px'}
                  mr={'10px'}
                  color={useColorModeValue(colors.primary4, colors.white)}
                  _groupHover={{
                    color: linkColor,
                  }}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                />
              </Flex>
            </Link>
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          mt={'-7px'}
          zIndex={1}
          bg={useColorModeValue(colors.white, colors.gray[800])}
          p={3}
          rounded={'lg'}
          maxW={'200px'}
        >
          <Stack>
            {languageOptions.map((option, index) => (
              <LanguageItem
                key={index}
                name={option.name}
                locale={option.locale}
                linkColor={linkColor}
                changeLanguage={changeLanguage}
                onClose={onClose}
              />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  )
}

const LanguageItem = ({
  name,
  locale,
  linkColor,
  changeLanguage,
  onClose,
}: MenuData & {
  linkColor: string
  changeLanguage: (locale: string) => void
  onClose: () => void
}) => {
  return (
    <Link
      onClick={() => {
        changeLanguage(locale!)
        onClose()
      }}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        bg: useColorModeValue(colors.gray[100], colors.gray[900]),
        color: linkColor,
      }}
      data-testid={`desktop-language-option-${locale}`}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text>{name}</Text>
        </Box>
      </Stack>
    </Link>
  )
}

export default MenuContainer
