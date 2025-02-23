import {
  Box,
  Button,
  Flex,
  HStack,
  Show,
  useColorModeValue,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import HeaderMobile from '../Mobile'
import ColorModePhoto from '../ColorModePhoto'
import AccountButtonPhoto from './AccountButtonPhoto'
import EjmenSignature from '../EjmenSignature'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'

const Header:FC = () => {
  const [homeHovered, setHomeHovered] = useState(false)
  const [hobbiesHovered, setHobbiesHovered] = useState(false)
  const [aboutHovered, setAboutHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  return (
    <Flex
      w={'full'}
      h={{ base: '58px', md: '67px', lg: '120px' }}
      bg={useColorModeValue(colors.primary1, colors.primary4)}
      justifyContent={'space-between'}
      top={0}
      mt={{ base: '10px', md: '0px' }}
    >
      <HStack w={'full'}>
        <Link to={'/photography'}>
          <EjmenSignature
            w={{ base: '120px', md: '100px', lg: '160px' }}
            h={{ base: '90px', md: '150px', lg: '300px' }}
            ml={{ base: '15px', md: '30px', lg: '100px' }}
            _hover={{
              color: useColorModeValue(colors.gray[400], colors.gray[600]),
            }}
            transition={'0.6s'}
          />
        </Link>
      </HStack>
      <Show above={'lg'}>
        <HStack
          mr={'40px'}
          fontSize={'12px'}
          fontFamily={'revert-layer'}
          cursor={'pointer'}
          h={'100%'}
        >
          <Link to={'/photography'}>
            <Box
              h={'100%'}
              borderColor={homeHovered ? colors.primary[200] : colors.primary4}
              borderTopWidth={homeHovered ? '8px' : '0px'}
              borderTopColor={useColorModeValue(
                colors.primary[200],
                colors.links
              )}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{
                  color: useColorModeValue(colors.primary[200], colors.links),
                }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>Home</Trans>
              </Button>
            </Box>
          </Link>

          <Link to={'/about-me'}>
            <Box
              h={'100%'}
              borderColor={aboutHovered ? colors.primary[200] : colors.primary4}
              borderTopWidth={aboutHovered ? '8px' : '0px'}
              borderTopColor={useColorModeValue(
                colors.primary[200],
                colors.links
              )}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{
                  color: useColorModeValue(colors.primary[200], colors.links),
                }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>About Me</Trans>
              </Button>
            </Box>
          </Link>
          <Box
            h={'100%'}
            borderColor={hobbiesHovered ? colors.primary[200] : colors.primary4}
            borderTopWidth={hobbiesHovered ? '8px' : '0px'}
            borderTopColor={useColorModeValue(
              colors.primary[200],
              colors.links
            )}
            transition={'all 0.1s ease-in-out'}
            onMouseEnter={() => {
              setHobbiesHovered(true)
            }}
            onMouseLeave={() => {
              setHobbiesHovered(false)
            }}
            overflow={'hidden'}
            justifyItems={'center'}
            boxSizing={'border-box'}
          >
            <DropDownMenu />
          </Box>
          <Link to={'/contact-us'}>
            <Box
              h={'100%'}
              borderColor={
                contactHovered ? colors.primary[200] : colors.primary4
              }
              borderTopWidth={contactHovered ? '8px' : '0px'}
              borderTopColor={useColorModeValue(
                colors.primary[200],
                colors.links
              )}
              transition={'all 0.1s ease-in-out'}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              overflow={'hidden'}
              justifyItems={'center'}
              boxSizing={'border-box'}
              mr={'20px'}
            >
              <Button
                variant={'link'}
                border={'none'}
                _hover={{
                  color: useColorModeValue(colors.primary[200], colors.links),
                }}
                color={useColorModeValue(colors.primary4, colors.white)}
                fontWeight={'light'}
                letterSpacing={'1px'}
                textTransform={'capitalize'}
                pl={'10px'}
                pr={'10px'}
                p={'50px'}
              >
                <Trans>Contacts</Trans>
              </Button>
            </Box>
          </Link>
          <AccountButtonPhoto />
          <ColorModePhoto />
        </HStack>
      </Show>
      <Show below={'lg'}>
        <Flex justifyContent={'flex-end'} w={'full'} mr={'15px'}>
          <ColorModePhoto />
        </Flex>
      </Show>
      <Show below={'lg'}>
        <HeaderMobile />
      </Show>
    </Flex>
  )
}

export default Header
