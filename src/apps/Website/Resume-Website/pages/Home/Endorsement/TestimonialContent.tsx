import { ReactNode, useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  VStack,
  Button,
} from '@chakra-ui/react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import items from './Props'
import { Trans } from '@lingui/macro'
import { colors } from '../../../../../../shared/components/Hooks/color'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({
  title,
  description,
  children,
}: {
  title: string | JSX.Element
  description: string
  children: ReactNode
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const wordLimit = 19

  const borderTopColor = useColorModeValue(colors.white, colors.gray[800])
  const buttonColor = useColorModeValue('blue.500', 'blue.300')
  const cardBg = useColorModeValue(colors.white, colors.gray[800])

  const words = description.split(' ')
  const shouldShowReadMore = words.length > wordLimit

  const displayText = isExpanded
    ? description
    : words.slice(0, wordLimit).join(' ') + (shouldShowReadMore ? '...' : '')

  return (
    <FadeInView delay={0.1}>
      <Stack
        bg={cardBg}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        textAlign={'center'}
        pos={'relative'}
        maxW={'400px'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: borderTopColor,
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <FadeInView delay={0.1}>
          <TestimonialHeading>{title}</TestimonialHeading>
        </FadeInView>
        <FadeInView delay={0.1}>
          <TestimonialText>
            {displayText}
            {shouldShowReadMore && (
              <Button
                variant='link'
                color={buttonColor}
                ml={2}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </Button>
            )}
          </TestimonialText>
        </FadeInView>
        <FadeInView delay={0.1}>{children}</FadeInView>
      </Stack>
    </FadeInView>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  const textColor = useColorModeValue(colors.gray[600], colors.gray[400])
  return (
    <Text textAlign={'center'} color={textColor} fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string | JSX.Element
}) => {
  const textColor = useColorModeValue(colors.gray[600], colors.gray[400])
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <FadeInView delay={0.1}>
        <Avatar src={src} mb={2} />
      </FadeInView>
      <Stack spacing={-1} align={'center'}>
        <FadeInView delay={0.1}>
          <Text fontWeight={600}>{name}</Text>
        </FadeInView>
        <FadeInView delay={0.1}>
          <Text fontSize={'sm'} color={textColor}>
            {title}
          </Text>
        </FadeInView>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  const bg = useColorModeValue(colors.gray[100], colors.gray[700])
  return (
    <VStack bg={bg} w={'full'}>
      <FadeInView>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <FadeInView delay={0.1}>
              <Heading>
                <Trans>Endorsement</Trans>
              </Heading>
            </FadeInView>
            <FadeInView delay={0.1}>
              <Text textAlign={'center'}>
                <Trans>
                  Recommendation from top employers in Malaysia and Bosnia
                </Trans>
              </Text>
            </FadeInView>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            {/* {items.map(
              ({ title, description, image, name, jobTitle }, index) => (
                <Testimonial key={index}>
                  <TestimonialContent title={title} description={description}>
                    <TestimonialAvatar
                      src={image}
                      name={name}
                      title={jobTitle}
                    />
                  </TestimonialContent>
                </Testimonial>
              )
            )} */}
          </Stack>
        </Container>
      </FadeInView>
    </VStack>
  )
}
