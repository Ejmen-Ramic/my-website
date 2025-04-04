import {
  VStack,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoMailOutline } from 'react-icons/io5'
import { resumeItems } from './items'
import SkillsResume from './SkillsResume'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'
import { FC } from 'react'

const ResumeLeftSide: FC = () => {
  const handleContactClick = (link: string) => {
    window.location.href = link
  }

  return (
    <VStack
      w={'full'}
      maxW={{ md: '250px', lg: '267px' }}
      maxH={'full'}
      bgColor={useColorModeValue('#CDDFDA', '#232b2e')}
      alignItems={'start'}
      px={{ base: '25px', md: '15px', lg: '18px' }}
      py={{ base: '25px', md: '12px', lg: '12px' }}
      spacing={'20px'}
    >
      <VStack w={'full'} alignItems={'start'} pt={{ lg: '20px' }}>
        <Heading
          textTransform={'uppercase'}
          fontSize={'18px'}
          color={useColorModeValue(colors.black, colors.iceGray)}
        >
          <Trans>Contact</Trans>
        </Heading>
        <Box
          bgColor={useColorModeValue(colors.black, colors.iceGray)}
          height={'2px'}
          w={'full'}
        ></Box>
        <VStack w={'full'} spacing={'0px'} alignItems={'start'}>
          <Button
            variant={'none'}
            onClick={() => handleContactClick('mailto:ejmenramic5@gmail.com')}
            colorScheme={'blue'}
            fontSize={'12px'}
            paddingX={0}
            paddingY={0}
            h={'23px'}
            _hover={{ textDecoration: 'underline' }}
          >
            <IoMailOutline style={{ marginRight: '10px' }} size={'15px'} />{' '}
            ejmenramic5@gmail.com
          </Button>
          {resumeItems.map((item, i) => (
            <Button
              key={i}
              padding={0}
              variant={'none'}
              _hover={{ textDecoration: 'underline' }}
              fontSize={'12px'}
              onClick={() => item.link && handleContactClick(item.link)}
              colorScheme={'blue'}
              h={'23px'}
            >
              <item.icon style={{ marginRight: '10px' }} size={'15px'} />{' '}
              {item.socialMedia}
            </Button>
          ))}
        </VStack>
      </VStack>
      <SkillsResume />
    </VStack>
  )
}

export default ResumeLeftSide
