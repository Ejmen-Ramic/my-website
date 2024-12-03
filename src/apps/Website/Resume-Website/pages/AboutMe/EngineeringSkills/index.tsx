import {
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
        py={{ lg: '100px' }}
        bg={useColorModeValue('gray.100', 'gray.700')}
        spacing={'40px'}
      >
        {/* About Me Section */}
        <Stack
          w={'full'}
          bg={useColorModeValue(colors.white, 'gray.800')}
          spacing={'20px'}
          p={'32px'}
          border={'1px solid #ECEFF4'}
          borderRadius={'10px'}
        >
          <FadeInView delay={0.1}>
            <Heading>
              <Trans>About Me</Trans>
            </Heading>
          </FadeInView>

          <FadeInView delay={0.2}>
            <Text>
              <Trans>
                With over 8 years of experience in software development, I
                specialize in building scalable web applications and
                microservices. I'm passionate about clean code, performance
                optimization, and creating exceptional user experiences.
              </Trans>
            </Text>
          </FadeInView>
        </Stack>
        <TechnicalSkills />
        <FeaturedProjects />
      </VStack>
    </FadeInView>
  );
};

export default EngineeringSKills;
