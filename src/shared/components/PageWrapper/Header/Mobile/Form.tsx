import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import { colors } from '../../../Hooks/color';
import { useColorModeValue } from '../../../../../components/ui/color-mode';

const HeaderForm = () => {
  return (
    <Box mt={'auto'} bottom={0}>
      <Heading fontSize={'20px'} pb={'15px'}>
        <Trans>Stay up to date</Trans>
      </Heading>
      <form action={'#'}>
        <Box position={'relative'}>
          <Input
            required
            type={'email'}
            name={'entry.1808449400'}
            px={'25px'}
            height={'50px'}
            rounded={'17px'}
            _placeholder={{ color: 'gray.300' }}
            placeholder={t`Enter your email`}
            _focus={{ outline: 0, bg: 'whiteAlpha.400' }}
            color={'gray.100'}
            bg={useColorModeValue('blackAlpha.100', 'gray.600')}
            borderWidth={0}
          />
          <Button
            type={'submit'}
            height={'50px'}
            color={useColorModeValue(colors.white, 'gray.100')}
            bg={useColorModeValue('green.400', 'gray.700')}
            _hover={{ bg: 'yellow.400', color: 'gray.900' }}
            position={'absolute'}
            top={'0'}
            right={'0'}
            rounded={'17px'}
            px={'20px'}
          >
            <Trans>Subscribe</Trans>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default HeaderForm;
