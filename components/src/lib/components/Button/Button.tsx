import React from 'react';
import { ButtonSize, ButtonVariant } from './Button.types';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

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
