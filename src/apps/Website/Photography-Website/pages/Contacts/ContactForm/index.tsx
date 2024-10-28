import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitterX } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView';
import { t, Trans } from '@lingui/macro';
import { colors } from '../../../../../../shared/components/Hooks/color';
import ContactBackground from './Assets/contact-image.jpg';
import { useColorModeValue } from '../../../../../../components/ui/color-mode';

const ContactForm = () => {
  const { hasCopied, onCopy } = useClipboard('ejmenramic5@gmail.com');

  return (
    <Flex
      bg={ContactBackground}
      w={'full'}
      align={'center'}
      justify={'center'}
      id={'contact'}
    >
      <FadeInView>
        <Box
          borderRadius={'lg'}
          m={{ base: 5, md: 16, lg: 10 }}
          mb={{ base: 20 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack gap={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}
              >
                Get in Touch
              </Heading>

              <Stack
                gap={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <Stack
                  align={'center'}
                  justify={'space-around'}
                  direction={{ base: 'row', md: 'column' }}
                >
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label={'email'}
                      variant={'ghost'}
                      size={'lg'}
                      fontSize={'3xl'}
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue(colors.white, 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href='https://www.facebook.com/profile.php?id=100092716802936'>
                    <IconButton
                      aria-label={'github'}
                      variant={'ghost'}
                      size={'lg'}
                      fontSize='3xl'
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue(colors.white, 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href='https://x.com/EjmenRamic'>
                    <IconButton
                      aria-label='x'
                      variant={'ghost'}
                      size={'lg'}
                      icon={<BsTwitterX size='28px' />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue(colors.white, 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href='https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my'>
                    <IconButton
                      aria-label={'linkedin'}
                      variant={'ghost'}
                      size={'lg'}
                      icon={<BsLinkedin size='28px' />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue(colors.white, 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Box
                  bg={useColorModeValue(colors.white, 'gray.700')}
                  borderRadius={'lg'}
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow={'base'}
                >
                  <VStack gap={5}>
                    <FormControl isRequired>
                      <FormLabel>
                        <Trans>Name</Trans>
                      </FormLabel>

                      <InputGroup>
                        {/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type={'text'}
                          name={'name'}
                          placeholder={t`Your Name`}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>
                        <Trans>Email</Trans>
                      </FormLabel>

                      <InputGroup>
                        {/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type={'email'}
                          name={'email'}
                          placeholder={t`Your Email`}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>
                        <Trans>Message</Trans>
                      </FormLabel>

                      <Textarea
                        name={'message'}
                        placeholder={t`Your Message`}
                        rows={6}
                        resize={'none'}
                      />
                    </FormControl>

                    <Button
                      colorScheme={'blue'}
                      bg={'blue.400'}
                      color={colors.white}
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      <Trans>Send Message</Trans>
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </FadeInView>
    </Flex>
  );
};

export default ContactForm;
