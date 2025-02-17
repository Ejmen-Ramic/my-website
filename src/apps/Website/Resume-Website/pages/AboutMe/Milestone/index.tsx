import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { Trans } from '@lingui/macro'
import React from 'react'
import { colors } from '../../../../../../shared/components/Hooks/color'

type CardProps = {
  id: number
  title: string | React.ReactElement
  description: string | React.ReactElement
  date: string | React.ReactElement
}

const milestones = [
  {
    id: 1,
    date: <Trans>February 2, 2018</Trans>,
    title: <Trans>Started my studies</Trans>,
    description: (
      <Trans>
        Kicked off my academic journey at the International Islamic University
        Malaysia (IIUM), marking the beginning of my studies.
      </Trans>
    ),
  },
  {
    id: 2,
    date: <Trans>April 15, 2022 - January 15, 2023</Trans>,
    title: <Trans>Internship at IMTM - Maldives</Trans>,
    description: (
      <Trans>
        Engaged in a valuable internship experience as a Web Coordinator at
        International Maldives Travel Market (IMTM), where I gained practical
        skills and insights into Travel and Tourism.
      </Trans>
    ),
  },
  {
    id: 3,
    date: <Trans>September 25, 2022</Trans>,
    title: <Trans>University Graduation</Trans>,
    description: (
      <Trans>
        Successfully completed my academic journey at the International Islamic
        University Malaysia (IIUM), earning a degree in Information and
        Communication Technologies.
      </Trans>
    ),
  },
  {
    id: 4,
    date: <Trans>January 28, 2023</Trans>,
    title: <Trans>Internship at FLUX - Malaysia</Trans>,
    description: (
      <Trans>
        During my time at FLUX, I had the opportunity to dive into the world of
        frontend web development. Working hands-on with Chakra UI, TypeScript,
        React, Next.js, JavaScript, and CSS, I contributed to several projects,
        learning and growing every step of the way. It was an invaluable
        experience that helped me refine my skills and solidify my passion for
        creating dynamic and user-friendly web applications.
      </Trans>
    ),
  },
  {
    id: 5,
    date: <Trans>July 28, 2023</Trans>,
    title: <Trans>Promotion - Software & QA Engineer - Malaysia</Trans>,
    description: (
      <Trans>
        Promoted to the role of Junior Software & QA Engineer, I embraced new
        challenges and expanded my expertise. Alongside my existing skills in
        frontend development, I delved into the learning of backend with
        MongoDB, automated testing with Playwright, and deployment with Vercel
        server. This journey not only elevated my technical capabilities but
        also deepened my understanding of software development and quality
        assurance practices, allowing me to contribute effectively to the team's
        projects and objectives.
      </Trans>
    ),
  },
]

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <Container
      px={{ base: '35px', lg: '150px' }}
      maxWidth={'7xl'}
      p={{ base: 2, sm: 1, lg: 10 }}
      mb={{ base: '50px', lg: '100px' }}
      data-testid={'milestones-component'}
    >
      <FadeInView delay={0.1}>
        <chakra.h3
          fontSize={'36px'}
          fontWeight={'bold'}
          mb={18}
          textAlign={'center'}
        >
          <Trans>Milestones</Trans>
        </chakra.h3>
      </FadeInView>
      <FadeInView delay={0.1}>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb={'10px'}>
            {/* Desktop view (left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Desktop view (right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <Card {...milestone} />
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </FadeInView>
    </Container>
  )
}

const Card = ({ id, title, description, date }: CardProps) => {
  const isEvenId = id % 2 === 0
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px'
  let leftValue = isEvenId ? '-15px' : 'unset'
  let rightValue = isEvenId ? 'unset' : '-15px'

  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    leftValue = '-15px'
    rightValue = 'unset'
    borderWidthValue = '15px 15px 15px 0'
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue(colors.gray[100], colors.gray[800])}
      spacing={5}
      rounded={'lg'}
      alignItems={'center'}
      pos={'relative'}
      _before={{
        content: '""',
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue(
          '#edf2f6',
          '#1a202c'
        )} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block',
      }}
    >
      <FadeInView delay={0.1}>
        <Box>
          <Text
            fontSize={'lg'}
            color={isEvenId ? colors.teal[400] : colors.blue[400]}
            data-testid={`milestone-date-${id}`}
          >
            {date}
          </Text>

          <VStack spacing={2} mb={3} textAlign={'left'}>
            <chakra.h1
              fontSize={'2xl'}
              lineHeight={1.2}
              fontWeight={'bold'}
              w={'100%'}
              data-testid={`milestone-title-${id}`}
            >
              {title}
            </chakra.h1>
            <Text fontSize={'md'} data-testid={`milestone-description-${id}`}>
              {description}
            </Text>
          </VStack>
        </Box>
      </FadeInView>
    </HStack>
  )
}

const LineWithDot = () => {
  return (
    <Flex
      pos={'relative'}
      alignItems={'center'}
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position={'absolute'}
        left={'50%'}
        height={'calc(100% + 10px)'}
        border={'1px solid'}
        borderColor={useColorModeValue(colors.gray[200], colors.gray[700])}
        top={'0px'}
      ></chakra.span>
      <Box pos={'relative'} p={'10px'}>
        <Box
          pos={'absolute'}
          top={'0'}
          left={'0'}
          bottom={'0'}
          right={'0'}
          width={'100%'}
          height={'100%'}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'center center'}
          bg={useColorModeValue(colors.gray[600], colors.gray[200])}
          borderRadius={'100px'}
          backgroundImage={'none'}
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  )
}

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg={'transparent'}
    ></Box>
  )
}

export default Milestones
