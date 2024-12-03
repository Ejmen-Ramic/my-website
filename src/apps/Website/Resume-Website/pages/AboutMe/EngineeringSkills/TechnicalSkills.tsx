import {
  Stack,
  Heading,
  Grid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { FC } from 'react';
import { itemsTechSkills } from './Props';
import { colors } from '../../../../../../shared/components/Hooks/color';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

const TechnicalSkills: FC = () => {
  const GridColor = useColorModeValue(colors.white, 'gray.800');
  const StackColor = useColorModeValue(colors.white, '#2D3748');
  return (
    <FadeInView>
      <Stack
        w={'full'}
        bg={GridColor}
        p={'32px'}
        spacing={'20px'}
        border={'1px solid #ECEFF4'}
        borderRadius={'10px'}
      >
        <FadeInView delay={0.1}>
          <Heading>
            <Trans>Technical Skills</Trans>
          </Heading>
        </FadeInView>

        <Grid
          w={'full'}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={'20px'}
        >
          {itemsTechSkills.map((item, i) => (
            <FadeInView key={i} delay={0.2}>
              <Stack
                w={'full'}
                bg={StackColor}
                spacing={'20px'}
                p={'32px'}
                border={'1px solid #ECEFF4'}
                borderRadius={'10px'}
              >
                <FadeInView delay={0.3}>
                  <Heading size='md'>{item.title}</Heading>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <Text>{item.detail}</Text>
                </FadeInView>
              </Stack>
            </FadeInView>
          ))}
        </Grid>
      </Stack>
    </FadeInView>
  );
};

export default TechnicalSkills;
