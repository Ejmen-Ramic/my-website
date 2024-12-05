import {
  Stack,
  Heading,
  Grid,
  Text,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { FC } from 'react';
import { colors } from '../../../../../../shared/components/Hooks/color';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { itemsFeatureProjects } from './Props';

const FeaturedProjects: FC = () => {
  const GridColor = useColorModeValue(colors.white, 'gray.800');
  const StackColor = useColorModeValue(colors.white, '#2D3748');
  const HeaderPopColor = useColorModeValue('teal.400', 'blue.400');
  return (
    <FadeInView>
      <Stack
        w={'full'}
        bg={GridColor}
        p={'32px'}
        spacing={'20px'}
        borderRadius={{ md: '10px' }}
        border={{ base: 'none', lg: '1px solid #ECEFF4' }}
      >
        <FadeInView delay={0.1}>
          <Heading>
            <Trans>Featured Projects</Trans>
          </Heading>
        </FadeInView>

        <Grid
          w={'full'}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={'20px'}
        >
          {itemsFeatureProjects.map((item, i) => (
            <FadeInView key={i} delay={0.2}>
              <Stack
                w={'full'}
                h={'full'}
                minH={'450px'}
                bg={StackColor}
                spacing={'20px'}
                p={'32px'}
                border={'1px solid #ECEFF4'}
                borderRadius={'10px'}
              >
                <HStack w={'full'} justify={'space-between'}>
                  <FadeInView delay={0.3}>
                    <Heading size={'md'}>{item.title}</Heading>
                  </FadeInView>

                  <FadeInView delay={0.3} direction={'right'}>
                    <Icon fontSize={'22px'}>{item.icon}</Icon>
                  </FadeInView>
                </HStack>

                <FadeInView delay={0.3}>
                  <Text>
                    {typeof item.detail === 'function'
                      ? item.detail(HeaderPopColor)
                      : item.detail}
                  </Text>
                </FadeInView>
              </Stack>
            </FadeInView>
          ))}
        </Grid>
      </Stack>
    </FadeInView>
  );
};

export default FeaturedProjects;
