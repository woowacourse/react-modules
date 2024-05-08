import { ButtonWrapper } from "./Button.style";

export interface ButtonProps {
  content: string;
  backgroundColor: string;
  fontColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ content, ...restProps }: ButtonProps) => {
  return <ButtonWrapper {...restProps}>{content}</ButtonWrapper>;
};

export default Button;
