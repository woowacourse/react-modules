import { ComponentProps } from "react";
import { ButtonVarient } from "../../../constants/theme";
import { ButtonWrapper } from "./Button.styles";

export interface ButtonProps extends ComponentProps<"button"> {
  varient?: ButtonVarient;
  text?: string;
}

const Button = ({
  varient = "primary",
  text = "버튼",
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper $varient={varient} {...props}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
