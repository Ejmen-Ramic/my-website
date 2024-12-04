import {
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { colors } from '../../../../../../shared/components/Hooks/color';
import { Trans } from '@lingui/macro';
import { FC } from 'react';
import TechnicalSkills from './TechnicalSkills';
import FeaturedProjects from './FeaturedProjects';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

const EngineeringSKills: FC = () => {
  return (
    <FadeInView>
      <VStack
        w={'full'}
        px={{ lg: '150px' }}
        py={{ base: '50px', lg: '100px' }}
        bg={{ md: useColorModeValue('gray.100', 'gray.700') }}
        divider={<Divider display={{ base: 'block', md: 'none' }} />}
      >
        <VStack spacing={'40px'}>
          {/* About Me Section */}
          <Stack
            w={'full'}
            bg={useColorModeValue(colors.white, 'gray.800')}
            spacing={'20px'}
            p={'32px'}
            borderRadius={{ md: '10px' }}
            border={{ base: 'none', md: '1px solid #ECEFF4' }}
          >
            <FadeInView delay={0.1}>
              <Heading>
                <Trans>About Me</Trans>
              </Heading>
            </FadeInView>

            <FadeInView delay={0.2}>
              <Text>
                <Trans>
                  <b>•</b> With over <b>4 years</b> of experience in software
                  development, I specialize in building scalable{' '}
                  <b>web applications</b> and
                  <b>microservices</b>. I'm passionate about clean code,
                  performance optimization, and creating exceptional user
                  experiences.
                  <br />
                  <br />
                  <b>•</b> Currently I work as a <b>QA</b> &{' '}
                  <b>FullStack Engineer</b> at <b>FLUX</b> Malaysia. I cover
                  most of the production development of the website. From
                  managing the QA team to developing new features and optimizing
                  the performance of the website.
                </Trans>
              </Text>
            </FadeInView>
          </Stack>
          <TechnicalSkills />
          <FeaturedProjects />
        </VStack>
      </VStack>
    </FadeInView>
  );
};

export default EngineeringSKills;
