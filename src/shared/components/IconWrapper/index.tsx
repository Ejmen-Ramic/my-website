import { Icon, type IconProps as ChakraIconProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { IconViewBox, ResponsiveValue } from './IconViewBox';
import { StyleUnit } from './types';

export type IconWrapperProps = {
  /** icon name */
  name?: string;
  /** the element of the icon */
  element?: ReactNode;
  /** to determine the view size of the icon */
  viewBox?: IconViewBox;
  /** to determine the size of the icon */
  size?: ResponsiveValue<StyleUnit> | StyleUnit;
} & ChakraIconProps;

const IconWrapper: FC<IconWrapperProps> = ({
  size,
  element,
  fill,
  color,
  h,
  ...props
}) => (
  <Icon
    border={0}
    color={fill || color}
    fill={fill || 'currentColor'}
    h={h}
    {...(size && { w: size, h: size })}
    {...props}
  >
    {element}
  </Icon>
);

export default IconWrapper;
