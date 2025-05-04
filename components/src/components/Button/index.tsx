import { type ComponentProps, type PropsWithChildren } from "react";
import * as S from "./Button.styled";

export type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariants;
}

function Button({
  variant = "primary",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
}

export default Button;
