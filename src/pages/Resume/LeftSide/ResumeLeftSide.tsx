import React from 'react'
import { VStack, Box, Heading, Button } from '@chakra-ui/react'
import { IoMailOutline } from 'react-icons/io5'
import { resumeItems } from './items'
import SkillsResume from './SkillsResume/SkillsResume'

const ResumeLeftSide = () => {
  const handleContactClick = (link: string) => {
    window.location.href = link
  }

  return (
    <VStack
      w={'full'}
      maxW={{ lg: '267px' }}
      h={'full'}
      bgColor={'#232b2e'}
      alignItems={'start'}
      px={{ lg: '18px' }}
      py={{ lg: '12px' }}
      spacing={'20px'}
    >
      <VStack w={'full'} alignItems={'start'} pt={{ lg: '20px' }}>
        <Heading textTransform={'uppercase'} fontSize={'18px'} color={'#ECEFF4'}>
          Contact
        </Heading>
        <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
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
            <IoMailOutline style={{ marginRight: '10px' }} size={'15px'} /> ejmenramic5@gmail.com
          </Button>
          {resumeItems.map((item, index) => (
            <Button
              padding={0}
              variant={'none'}
              _hover={{ textDecoration: 'underline' }}
              fontSize={'12px'}
              onClick={() => handleContactClick(item.link)}
              colorScheme={'blue'}
              h={'23px'}
            >
              <item.icon style={{ marginRight: '10px' }} size={'15px'} /> {item.socialMedia}
            </Button>
          ))}
        </VStack>
      </VStack>
      <SkillsResume />
    </VStack>
  )
}

export default ResumeLeftSide