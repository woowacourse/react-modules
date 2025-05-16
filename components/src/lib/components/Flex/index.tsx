import { ElementType, ReactNode } from 'react';

import { StyledFlex } from './Flex.styled';

import { PolymorphicComponentProps } from '../../types/polymorphic.types';
export type FlexStyleProps = {
  /**
   * The direction of the flex container
   * @default 'row'
   */
  direction?: 'row' | 'column';
  /**
   * The justify content of the flex container
   * @default 'flex-start'
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * The align items of the flex container
   * @default 'stretch'
   */
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  /**
   * The gap between the flex items
   * @default '0'
   */
  gap?: string | number;
  /**
   * The width of the flex container
   * @type {string | number}
   * @description It can be a string (e.g. '100%') or a number (e.g. 100).  1rem = 16px
   * @default '100%'
   */
  width?: string | number;
  /**
   * The height of the flex container
   * @type {string | number}
   * @description It can be a string (e.g. '100%') or a number (e.g. 100).  1rem = 16px
   * @default '100%'
   */
  height?: string | number;
  /**
   * The padding of the flex container
   * @default '0'
   */
  padding?: string | number;
  /**
   * The margin of the flex container
   * @default '0'
   */
  margin?: string | number;
};

export type FlexProps<T extends ElementType = 'div'> = PolymorphicComponentProps<
  T,
  FlexStyleProps & {
    children?: ReactNode;
  }
>;

export const Flex = <C extends ElementType = 'div'>({
  as,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  width,
  height,
  padding,
  margin,
  children,
  ...props
}: FlexProps<C>) => {
  return (
    <StyledFlex
      as={as}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};
