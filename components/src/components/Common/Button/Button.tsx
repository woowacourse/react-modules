import { ComponentProps } from "react";
import { ButtonVarient } from "../../../constants/theme";
import { ButtonWrapper } from "./Button.styles";

export interface ButtonProps extends ComponentProps<"button"> {
  varient?: ButtonVarient;
}

const Button = ({
  varient = "primary",
  children = "버튼",
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper $varient={varient} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
