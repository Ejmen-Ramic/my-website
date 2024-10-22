import { SimpleGrid, Stack, Text, VStack, Image } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { contentList } from './Props';
import { Link } from 'react-router-dom';

const Component = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={'30px'}>
      {contentList.map(({ title, link }) => (
        <Link to={link} key={title}>
          <VStack
            w={'full'}
            h={'180px'}
            borderRadius={'5px'}
            borderWidth={'1px'}
            borderColor={'gray'}
            _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
            transition={'0.6s'}
            justifyContent={'space-between'}
          >
            <Image src={'./Website/Resume/screenshot-delete.png'} />

            <Stack
              w={'full'}
              h={'30px'}
              alignItems={'center'}
              justify={'flex-end'}
              bgColor={'white'}
            >
              <Text color={'black'}>
                <Trans>{title}</Trans>
              </Text>
            </Stack>
          </VStack>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Component;
