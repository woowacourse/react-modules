import { ButtonWrapper } from "./Button.style";

export interface ButtonProps {
  backgroundColor: string;
  fontColor: string;
  borderColor?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  backgroundColor,
  fontColor,
  borderColor,
}) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderColor={borderColor}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
