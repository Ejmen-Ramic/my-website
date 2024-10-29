import { VStack, Box, Heading, HStack, Text } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import { ReactNode } from 'react';
import { FaLink, FaRunning, FaShapes } from 'react-icons/fa';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';

type Props = {
  text: string;
  icon: ReactNode;
};

const itemProps: Props[] = [
  {
    text: t`I'm a web developer.`,
    icon: <FaShapes />,
  },
  {
    text: t`I love running.`,
    icon: <FaRunning />,
  },
];

const ExtraCurriculum = () => {
  const colorMode = useColorModeValue('#000000', '#ECEFF4');
  const colorLink = useColorModeValue('#0B3948', '#98bed5');

  return (
    <VStack w={'full'} alignItems={'start'} color={'#ECEFF4'}>
      <HStack w={'full'} gap={'10px'}>
        <FaShapes size={'18px'} color={colorMode} />
        <Heading
          textTransform={'uppercase'}
          lineHeight={'12px'}
          fontSize={'18px'}
          color={colorMode}
        >
          <Trans>Extra Curriculum</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      <VStack w={'full'} gap={'10px'} alignItems={'start'}>
        <HStack w={'full'}>
          <VStack
            w={'full'}
            alignItems={'start'}
            fontSize={'12px'}
            textAlign={'start'}
            gap={'1px'}
          >
            {itemProps.map(({ icon, text }, i) => (
              <HStack w={'full'} key={i}>
                <Box color={colorMode}> {icon}</Box>
                <Text color={colorMode} variant={'none'} p={'0px'}>
                  {text}
                </Text>
                <FaLink size={'12px'} color={colorLink} />
              </HStack>
            ))}
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ExtraCurriculum;
