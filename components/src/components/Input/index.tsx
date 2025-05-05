import type { ComponentProps } from "react";
import * as S from "./Input.styled";

interface InputProps extends ComponentProps<"input"> {}

function Input({ children, ...props }: InputProps) {
  return <S.Input {...props} />;
}

export default Input;
