import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  VStack,
} from '@chakra-ui/react';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import items from './Props';
import { Trans } from '@lingui/macro';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';
import { Avatar } from '../../../../../../components/ui/avatar';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <FadeInView delay={0.1}>
      <Stack
        bg={useColorModeValue(colors.white, 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        textAlign={'center'}
        pos={'relative'}
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
          borderTopColor: useColorModeValue(colors.white, 'gray.800'),
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
          <TestimonialText>{description}</TestimonialText>
        </FadeInView>
        <FadeInView delay={0.1}>{children}</FadeInView>
      </Stack>
    </FadeInView>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <FadeInView delay={0.1}>
        <Avatar src={src} mb={2} />
      </FadeInView>
      <Stack gap={-1} align={'center'}>
        <FadeInView delay={0.1}>
          <Text fontWeight={600}>{name}</Text>
        </FadeInView>
        <FadeInView delay={0.1}>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {title}
          </Text>
        </FadeInView>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <VStack bg={useColorModeValue('gray.100', 'gray.700')} w={'full'}>
      <FadeInView>
        <Container maxW={'7xl'} py={16} as={Stack} gap={12}>
          <Stack gap={0} align={'center'}>
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
            gap={{ base: 10, md: 4, lg: 10 }}
          >
            {items.map(
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
            )}
          </Stack>
        </Container>
      </FadeInView>
    </VStack>
  );
}
