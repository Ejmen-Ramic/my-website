import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState, useEffect, ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FaAddressCard, FaCamera } from 'react-icons/fa6';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { t, Trans } from '@lingui/macro';
import { colors } from '../../../../../../shared/components/Hooks/color';

interface StatsCardProps {
  title: string;
  icon: ReactNode;
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  const [count, setCount] = useState(0);
  const targetCount = parseInt(stat.replace(/,/g, ''), 10);
  const threshold = targetCount - 200; // Set your threshold here

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        let increment = Math.ceil(targetCount / 100); // Default increment

        // If current count is below the threshold, use a slower animation speed
        if (prevCount + increment >= threshold) {
          increment = 1; // Slow down the animation
        }

        if (prevCount + increment >= targetCount) {
          clearInterval(interval);
          return targetCount;
        }

        return prevCount + increment;
      });
    }, 20); // Adjust the default animation speed here

    return () => {
      clearInterval(interval);
    };
  }, [stat, targetCount, threshold]);

  return (
    <FadeInView delay={0.2}>
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        bgColor={useColorModeValue(colors.white, 'gray.700')}
        rounded={'lg'}
      >
        <FadeInView delay={0.3}>
          <Flex justifyContent={'space-between'}>
            <Box
              pl={{ base: 2, md: 4 }}
              color={useColorModeValue('gray.800', colors.white)}
            >
              <StatLabel fontWeight={'medium'} isTruncated>
                {title}
              </StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {count.toLocaleString()}
              </StatNumber>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', colors.white)}
              alignContent={'center'}
            >
              {icon}
            </Box>
          </Flex>
        </FadeInView>
      </Stat>
    </FadeInView>
  );
}

export default function BasicStatistics() {
  return (
    <VStack w={'full'} px={{ lg: 40 }} gap={'50px'}>
      <FadeInView delay={0.1}>
        <chakra.h1 textAlign={'center'} fontSize={'36px'} fontWeight={'bold'}>
          <Trans>What are the website achievements?</Trans>
        </chakra.h1>
      </FadeInView>
      <SimpleGrid
        w={'full'}
        columns={{ base: 1, md: 3 }}
        gap={{ base: 5, lg: 8 }}
      >
        <StatsCard
          title={t`Visitors`}
          stat={'2450 website visitors'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={t`Registered`}
          stat={'900 registered users'}
          icon={<FaAddressCard size={'3em'} />}
        />
        <StatsCard
          title={t`Photographs`}
          stat={'400 high quality images'}
          icon={<FaCamera size={'3em'} />}
        />
      </SimpleGrid>
    </VStack>
  );
}
