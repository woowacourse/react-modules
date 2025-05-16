import { ComponentProps } from 'react';

import { StyledInput } from './Input.styled';

export type InputProps = {
  /**
   * @description Indicates isValidation of the input
   * @type {boolean}
   * @default true
   */
  isValid?: boolean;
  /**
   * @description The size of the input
   * @type {string | number}
   * @default '2.5rem'
   */
  size?: string | number;
} & ComponentProps<'input'>;

export const Input = ({ isValid = true, size, ...props }: InputProps) => {
  const disabled = !isValid || props.disabled;
  return <StyledInput type="text" height={size} isValid={isValid} disabled={disabled} {...props} />;
};
