import { ButtonWrapper } from "./Button.style";

export interface ButtonProps {
  backgroundColor: string;
  fontColor: string;
  borderColor?: string;
  onClick?: () => string | void;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  backgroundColor,
  fontColor,
  borderColor,
  onClick,
}) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
