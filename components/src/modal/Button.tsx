import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

// ============================== Types ==============================

interface ButtonProps {
  variant: ButtonVariantType;
  onClick: () => void;
  style?: CSSProperties;
  children?: string;
}
type ButtonVariantType = 'primary' | 'secondary';

// ============================== Component ==============================

function Button({ variant, onClick, style, children }: ButtonProps) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledButton variant={variant} onClick={onClick} style={memoizedStyle}>
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
`;

export default Button;
