import type { IconProps as ChakraIconProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { StyleUnit } from './types';

// TO BE REMOVED =============
export type IconVariant<T> = { [K in keyof T]: JSX.Element };

export type ResponsiveValue<T> =
  | T
  | T[]
  | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export type IconViewBox =
  | string
  | { minX: number; minY: number; width: number; height: number };

export type IconData<T> = {
  viewBox: string;
  variants: IconVariant<T>;
  defaultVariant: keyof T;
};

export type IconsList = { [key: string]: IconData<any> };

export type IconProps = {
  /** icon name */
  name?: string;
  /** the element of the icon */
  element?: ReactNode;
  /** to determine the view size of the icon */
  viewBox?: IconViewBox;
  /** to determine the size of the icon */
  size?: ResponsiveValue<StyleUnit> | StyleUnit;
} & ChakraIconProps;

// =====================

export type ExtendedIconProps<T> = {
  /** icon name */
  name?: string;
  /** the element of the icon */
  element?: ReactNode;
  /** the variant of the icon */
  variant?: keyof T;
  /** to determine the view size of the icon */
  viewBox?: IconViewBox;
  /** to determine the size of the icon */
  size?: ResponsiveValue<StyleUnit> | StyleUnit;
} & ChakraIconProps;

export type FIconProps<T> = {
  /** icon name */
  name?: string;
  /** the element of the icon */
  element?: ReactNode;
  /** the variant of the icon */
  variant?: keyof T;
  /** to determine the view size of the icon */
  viewBox?: IconViewBox;
  /** to determine the size of the icon */
  size?: StyleUnit;
} & ChakraIconProps;
