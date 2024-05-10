import { ButtonHTMLAttributes } from "react";
import * as Styled from "./style";

export type ButtonColorType = "dark" | "light";
export type ButtonSizeType = "large" | "small";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColorType;
  size: ButtonSizeType;
  onClick: () => void;
  children: JSX.Element;
}

const Button = ({ color, size, onClick, children, ...props }: ButtonProps) => {
  return (
    <Styled.Button $color={color} $size={size} onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
