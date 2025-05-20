import { ComponentPropsWithRef, useMemo } from 'react';
import { StyledButton } from './Button.styles';
import { ButtonVariantType } from './type';

// ============================== Types ==============================

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariantType;
  children?: string;
}

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

export default Button;
