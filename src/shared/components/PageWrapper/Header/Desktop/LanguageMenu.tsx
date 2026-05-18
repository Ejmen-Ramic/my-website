import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoLanguageOutline } from 'react-icons/io5';
import { Trans } from '@lingui/macro';
import { useLanguage } from '../../../LanguageSwitcher/languageContext';
import { colors } from '../../../Hooks/color';

const languageOptions = [
  { name: <Trans>English</Trans>, locale: 'en' },
  { name: <Trans>Bosnian</Trans>, locale: 'ba' },
];

const LanguageMenu = () => {
  const { changeLanguage } = useLanguage();
  const menuItemHoverColor = useColorModeValue(
    colors.gray[100],
    colors.gray[900],
  );
  const menuButtonBg = useColorModeValue(colors.gray[300], `${colors.white}14`);
  const menuButtonHoverBg = useColorModeValue(
    colors.gray[400],
    `${colors.white}24`,
  );
  const menuListBg = useColorModeValue(colors.white, colors.gray[800]);

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Menu>
        <MenuButton
          as={Button}
          bg={menuButtonBg}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: menuButtonHoverBg }}
          _active={{ bg: menuButtonHoverBg }}
          minW={'unset'}
          px={3}
          data-testid={'language-switcher-desktop'}
        >
          <IoLanguageOutline size={18} />
        </MenuButton>
        <MenuList
          bg={menuListBg}
          border={0}
          shadow={'lg'}
          minW={'140px'}
          mt={'33px'}
        >
          {languageOptions.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => changeLanguage(option.locale)}
              bg={'transparent'}
              _hover={{
                color: colors.links,
                bg: menuItemHoverColor,
              }}
              data-testid={`desktop-language-option-${option.locale}`}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default LanguageMenu;
