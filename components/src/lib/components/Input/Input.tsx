import React from 'react';
import { StyledInput, StyledInputWrapper } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth = true, error = false, className, ...props }, ref) => {
    return (
      <StyledInputWrapper fullWidth={fullWidth} className={className}>
        <StyledInput ref={ref} error={error} {...props} />
      </StyledInputWrapper>
    );
  },
);

Input.displayName = 'Input';

export default Input;
