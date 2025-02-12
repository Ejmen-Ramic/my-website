import React from 'react'
import {
  Center,
  Stack,
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import ResumeLeftSide from './LeftSide/ResumeLeftSide'
import ResumeRightSide from './RightSide'
import { Trans } from '@lingui/macro'
import PDFFEtcher from './PDF/PDFFetcher'
import { useLanguage } from '../../../../../shared/components/LanguageSwitcher/languageContext'
import Page from '../../../../../shared/components/PageWrapper'
import { colors } from '../../../../../shared/components/Hooks/color'

const Resume: React.FC<{}> = () => {
  const { locale, changeLanguage } = useLanguage()

  return (
    <Page w={'full'} spacing={'0px'}>
      <Center w={'full'}>
        <VStack
          maxW={'800px'}
          w={'full'}
          my={{ md: '5px', lg: '50px' }}
          mb={{ lg: '100px' }}
          spacing={'0px'}
        >
          <HStack
            w={'full'}
            h={'70px'}
            justify={'space-between'}
            px={{ md: '10px', lg: '0px' }}
          >
            <Button
              variant={'ghost'}
              color={useColorModeValue(colors.navy, '#98bed5')}
              onClick={() => changeLanguage(locale === 'en' ? 'ba' : 'en')}
              data-testid={'language-switcher-resume'}
            >
              <GrLanguage style={{ marginRight: '10px' }} />
              <Trans>
                {locale === 'en' ? 'View in Bosnian' : 'View in English'}
              </Trans>
            </Button>
            <HStack>
              <Link
                href={'https://github.com/Ejmen-Ramic/my-website/tree/master'}
                isExternal
              >
                <Button
                  variant={'ghost'}
                  color={useColorModeValue(colors.navy, '#98bed5')}
                  data-testid={'source-code'}
                >
                  <BsGithub style={{ marginRight: '10px' }} />
                  <Trans>Source code</Trans>
                </Button>
              </Link>
              <PDFFEtcher />
            </HStack>
          </HStack>
          <Stack
            w={'full'}
            spacing={'0px'}
            px={{ md: '0px', lg: '0px' }}
            mb={{ md: '30px', lg: '0px' }}
            boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.3)'}
            data-testid={'resume-component'}
          >
            {/* Header */}
            <VStack
              bgColor={colors.navy}
              w={'full'}
              px={'25px'}
              py={'24px'}
              alignItems={'start'}
            >
              <Heading
                color={useColorModeValue(colors.white, colors.iceGray)}
                fontWeight={700}
                fontSize={'25px'}
                textTransform={'uppercase'}
              >
                Ejmen Ramic
              </Heading>
              <Text
                color={useColorModeValue(colors.white, colors.iceGray)}
                fontWeight={600}
                fontSize={'12px'}
              >
                <Trans>
                  Programming Enthusiast. Software & Quality Assurance Engineer.
                </Trans>
              </Text>
            </VStack>

            {/* Main Section */}
            <Stack w={'full'} h={'auto'} spacing={'0px'}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                w={'full'}
                h={'auto'}
                spacing={'0px'}
              >
                {/* Left Side */}
                <ResumeLeftSide />

                {/* Right Side */}
                <ResumeRightSide />
              </Stack>
            </Stack>
          </Stack>
        </VStack>
      </Center>
    </Page>
  )
}

export default Resume
