import { ComponentProps } from "react";
import { ButtonVariant } from "../../../constants/theme";
import { ButtonWrapper } from "./Button.styles";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
}

const Button = ({
  variant = "primary",
  children = "버튼",
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper $variant={variant} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
