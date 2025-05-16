import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  varient: 'confirm' | 'cancel';
  onClick?: () => void;
}

const Button = ({ text, varient, onClick }: ButtonProps) => {
  return (
    <StyledButton varient={varient} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
