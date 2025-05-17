import { ComponentProps } from "react";
import { InputWrapper } from "./Input.styles";

export interface InputProps extends ComponentProps<"input"> {}

const Input = ({ ...props }: InputProps) => {
  return <InputWrapper {...props} />;
};

export default Input;
