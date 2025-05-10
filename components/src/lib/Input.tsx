import React from 'react';
import styled from '@emotion/styled';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: boolean;
  className?: string;
}

const StyledInputWrapper = styled.div<{ fullWidth: boolean }>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const StyledInput = styled.input<{ error: boolean }>`
  width: calc(100% - 24px);
  padding: 8px 12px;
  border: 1px solid ${({ error }) => (error ? '#f44336' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#f44336' : '#666')};
    box-shadow: 0 0 0 2px ${({ error }) => (error ? 'rgba(244, 67, 54, 0.2)' : 'rgba(156, 163, 175, 0.2)')};
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

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
