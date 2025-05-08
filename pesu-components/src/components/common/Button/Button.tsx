import * as S from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFixed?: boolean;
  variant?: 'primary' | 'outline';
  isExpanded?: boolean;
}

export default function Button({
  children,
  isFixed = false,
  variant = 'primary',
  isExpanded = false,
  ...props
}: ButtonProps) {
  return (
    <S.Button isFixed={isFixed} variant={variant} isExpanded={isExpanded} {...props}>
      {children}
    </S.Button>
  );
}
