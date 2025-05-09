import { ComponentProps } from "react";
import { ButtonWrapper } from "./Button.styles";

export interface ButtonProps extends ComponentProps<"button"> {
  text?: string;
}

const Button = ({ text = "버튼", ...props }: ButtonProps) => {
  return <ButtonWrapper {...props}>{text}</ButtonWrapper>;
};

export default Button;
