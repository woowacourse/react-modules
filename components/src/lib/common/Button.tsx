import { ButtonWrapper } from "./Button.style";

export interface ButtonProps {
  content: string;
  backgroundColor: string;
  fontColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ content, backgroundColor, fontColor, onClick }) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} fontColor={fontColor} onClick={onClick}>
      {content}
    </ButtonWrapper>
  );
};

export default Button;
