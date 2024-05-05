import { ButtonHTMLAttributes } from "react";
import * as Styled from "./style";

export type ButtonColor = "dark" | "white";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  color: ButtonColor;
  onClick: () => void;
}

const Button = ({ children, color, onClick, ...props }: ButtonProps) => {
  return (
    <Styled.Button $color={color} onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
