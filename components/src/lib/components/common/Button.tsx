import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  variant: 'confirm' | 'cancel';
  onClick?: () => void;
}

const Button = ({ text, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton varient={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
