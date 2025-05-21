import styled from '@emotion/styled';
import { ComponentPropsWithRef, useMemo } from 'react';
import { StyledButton } from './Button.styles';

// ============================== Types ==============================

interface WideButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariantType;
  children?: string;
}
type ButtonVariantType = 'primary' | 'secondary';

// ============================== Component ==============================

function WideButton({
  variant = 'primary',
  style,
  children,
  ...props
}: WideButtonProps) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledWideButton variant={variant} style={memoizedStyle} {...props}>
      {children}
    </StyledWideButton>
  );
}

// ============================== Styled Components ==============================

const StyledWideButton = styled(StyledButton)<{ variant: ButtonVariantType }>`
  font-size: 18px;
  width: 100%;
  height: 44px;
`;

export default WideButton;
