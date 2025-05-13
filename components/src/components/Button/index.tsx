import { type ComponentProps, type ElementType } from "react";
import * as S from "./Button.styled";
import { ButtonVariants } from "./Button.type";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariants;
} & ComponentProps<T>;

function Button<T extends ElementType = "button">({
  as = "button",
  variant = "primary",
  ...props
}: ButtonProps<T>) {
  return <S.StyledPolymorphic as={as} variant={variant} {...props} />;
}

export default Button;
