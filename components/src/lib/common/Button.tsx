import { ButtonWrapper } from "./Button.style";

export interface ButtonProps {
  content: string;
  backgroundColor: string;
  fontColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ content, backgroundColor, fontColor, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} fontColor={fontColor} onClick={onClick}>
      {content}
    </ButtonWrapper>
  );
};

export default Button;
