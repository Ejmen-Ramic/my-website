import {
  VStack,
  Box,
  Heading,
  HStack,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaLink } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPaintBrush } from 'react-icons/fa';
import { itemProps } from './Props';
import { Trans } from '@lingui/macro';
import { useColorModeValue } from '../../../../../../../../components/ui/color-mode';

const Projects = () => {
  const colorMode = useColorModeValue('#000000', '#ECEFF4');
  const colorLink = useColorModeValue('#0B3948', '#98bed5');
  return (
    <VStack w={'full'} alignItems={'start'} color={colorMode}>
      <HStack w={'full'} gap={'10px'}>
        <FaPaintBrush size={'18px'} color={colorMode} />
        <Heading
          textTransform={'uppercase'}
          lineHeight={'12px'}
          fontSize={'18px'}
          color={colorMode}
        >
          <Trans>Projects</Trans>
        </Heading>
      </HStack>

      <Box bgColor={colorMode} height={'2px'} w={'full'}></Box>
      {itemProps.map(({ name, year, location, description, link }, i) => (
        <VStack w={'full'} gap={'10px'} alignItems={'start'} key={i}>
          <HStack w={'full'}>
            <VStack
              w={'full'}
              alignItems={'start'}
              fontSize={'16px'}
              fontWeight={400}
              textAlign={'start'}
            >
              <Link href={link}>
                <Button
                  color={colorLink}
                  variant={'plain'}
                  p={'0px'}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {name}
                  <FaLink style={{ marginLeft: '8px' }} />
                </Button>
              </Link>
            </VStack>
            <VStack w={{ md: '300px' }} gap={'0px'}>
              <HStack w={'full'}>
                <FaCalendarAlt size={'12px'} />
                <Text fontSize={'12px'}>{year}</Text>
              </HStack>
              <HStack w={'full'}>
                <FaLocationDot size={'12px'} />
                <Text fontSize={'12px'}>{location}</Text>
              </HStack>
            </VStack>
          </HStack>
          <Text fontSize={'12px'}>{description}</Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default Projects;