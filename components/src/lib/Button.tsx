import React from 'react';
import styled from '@emotion/styled';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 14px;
          padding: 6px 12px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 12px 20px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 8px 16px;
        `;
    }
  }}

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #333333;
          color: white;
          border: 1px solid #333333;
          
          &:hover:not(:disabled) {
            background-color: #555555;
          }
        `;
      case 'secondary':
        return `
          background-color: white;
          color:rgba(51, 51, 51, 0.75);
          border: 1px solid rgba(51, 51, 51, 0.25);
          
          &:hover:not(:disabled) {
            background-color: #f9fafb;
          }
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'medium', fullWidth = false, className, ...props }, ref) => {
    return (
      <StyledButton ref={ref} variant={variant} size={size} fullWidth={fullWidth} className={className} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
