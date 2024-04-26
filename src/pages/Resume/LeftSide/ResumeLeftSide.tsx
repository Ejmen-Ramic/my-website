import React from 'react'
import { VStack, Box, Heading, Button } from '@chakra-ui/react'
import { IoMailOutline } from 'react-icons/io5'
import { resumeItems } from './items'

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
    >
      <VStack w={'full'} alignItems={'start'} py={{ lg: '20px' }}>
        <Heading textTransform={'uppercase'} fontSize={'18px'} color={'#ECEFF4'}>
          Contact
        </Heading>
        <Box bgColor={'#ECEFF4'} height={'2px'} w={'full'}></Box>
        <VStack w={'full'} spacing={'0px'}>
          <Button
            variant={'ghost'}
            onClick={() => handleContactClick('mailto:ejmenramic5@gmail.com')}
            colorScheme={'blue'}
          >
            <IoMailOutline style={{ marginRight: '10px' }} /> ejmenramic5@gmail.com
          </Button>
          {resumeItems.map((item, index) => (
            <Button variant={'ghost'} onClick={() => handleContactClick(item.link)} colorScheme={'blue'}>
              <item.icon style={{ marginRight: '10px' }} /> {item.socialMedia}
            </Button>
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
}

export default ResumeLeftSide
