import type { ComponentProps } from "react";
import * as S from "./Input.styled";

interface InputProps extends Omit<ComponentProps<"input">, "children"> {}

function Input({ ...props }: InputProps) {
  return <S.Input {...props} />;
}

export default Input;
