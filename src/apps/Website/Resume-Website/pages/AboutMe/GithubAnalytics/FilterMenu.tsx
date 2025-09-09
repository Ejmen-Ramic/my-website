// FilterMenu.tsx
import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Text,
  Divider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface FilterMenuProps {
  selectedRange: string;
  selectedYears: string[];
  rangeOptions: { label: string; value: string; type: string }[];
  yearOptions: { label: string; value: string; type: string }[];
  getMenuButtonText: () => string;
  handleRangeSelect: (value: string) => void;
  handleYearSelect: (value: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  selectedRange,
  selectedYears,
  rangeOptions,
  yearOptions,
  getMenuButtonText,
  handleRangeSelect,
  handleYearSelect,
}) => {
  return (
    <Menu closeOnSelect={false} placement={'bottom-end'}>
      <MenuButton
        w={{ base: 'full', md: 'unset' }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size={'sm'}
      >
        {getMenuButtonText()}
      </MenuButton>
      <MenuList maxH={'400px'} overflowY={'auto'}>
        {/* Time Range Section */}
        <Box px={'12px'} py={'8px'}>
          <Text
            fontSize={'sm'}
            fontWeight={'bold'}
            color={'gray.500'}
            mb={'8px'}
          >
            TIME RANGES
          </Text>
          {rangeOptions.map((opt) => (
            <MenuItem
              key={opt.value}
              closeOnSelect={false}
              pl={'4px'}
              onClick={() => handleRangeSelect(opt.value)}
              isDisabled={selectedYears.length > 1}
              opacity={selectedYears.length > 1 ? 0.5 : 1}
            >
              <Checkbox
                isChecked={selectedRange === opt.value}
                onChange={() => handleRangeSelect(opt.value)}
                mr={'8px'}
                pointerEvents={'none'}
                isDisabled={selectedYears.length > 1}
              />
              {opt.label}
            </MenuItem>
          ))}
        </Box>

        <Divider />

        {/* Years Section */}
        <Box px={'12px'} py={'8px'}>
          <Text
            fontSize={'sm'}
            fontWeight={'bold'}
            color={'gray.500'}
            mb={'8px'}
          >
            YEARS
          </Text>
          {yearOptions.map((opt) => (
            <MenuItem
              key={opt.value}
              closeOnSelect={false}
              pl={'4px'}
              onClick={() => handleYearSelect(opt.value)}
            >
              <Checkbox
                isChecked={selectedYears.includes(opt.value)}
                onChange={() => handleYearSelect(opt.value)}
                mr={'8px'}
                pointerEvents={'none'}
              />
              {opt.label}
            </MenuItem>
          ))}
        </Box>
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
