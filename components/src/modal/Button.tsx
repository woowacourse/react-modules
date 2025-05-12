import styled from '@emotion/styled';
import { ComponentPropsWithRef, useMemo } from 'react';

// ============================== Types ==============================

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariantType;
  children?: string;
}
type ButtonVariantType = 'primary' | 'secondary';

// ============================== Component ==============================

function Button({
  variant = 'primary',
  style,
  children,
  ...props
}: ButtonProps) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledButton variant={variant} style={memoizedStyle} {...props}>
      {children}
    </StyledButton>
  );
}

// ============================== Styled Components ==============================

const StyledButton = styled.button<{ variant: ButtonVariantType }>`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#333333' : '#ffffff'};
  color: ${({ variant }) => (variant === 'primary' ? '#ffffff' : '#8b95a1')};
  border-radius: 4px;

  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export default Button;
