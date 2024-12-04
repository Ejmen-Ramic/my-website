import {
  Stack,
  Heading,
  Grid,
  Text,
  useColorModeValue,
  Icon,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
} from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { FC } from 'react';
import { itemsTechSkills } from './Props';
import { colors } from '../../../../../../shared/components/Hooks/color';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';

const TechnicalSkills: FC = () => {
  const GridColor = useColorModeValue(colors.white, 'gray.800');
  const StackColor = useColorModeValue(colors.white, '#2D3748');

  const hoverShadowLight = useColorModeValue(
    '0 8px 16px rgba(0, 0, 0, 0.2)',
    '0 12px 24px rgba(0, 0, 0, 0.3)'
  );

  const transformScale = useColorModeValue('scale(1)', 'scale(1.03)');

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
              <Popover>
                <PopoverTrigger>
                  <Stack
                    as={'button'}
                    w={'full'}
                    textAlign={'left'}
                    minH={'190px'}
                    bg={StackColor}
                    spacing={'20px'}
                    p={'32px'}
                    border={'1px solid #ECEFF4'}
                    borderRadius={'10px'}
                    boxShadow={'0 8px 12px rgba(0, 0, 0, 0.1)'}
                    transition={'box-shadow 0.3s ease, transform 0.3s ease'}
                    _hover={{
                      boxShadow: hoverShadowLight,
                      transform: transformScale,
                    }}
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
                      <Text>{item.detail}</Text>
                    </FadeInView>
                  </Stack>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </FadeInView>
          ))}
        </Grid>
      </Stack>
    </FadeInView>
  );
};

export default TechnicalSkills;
