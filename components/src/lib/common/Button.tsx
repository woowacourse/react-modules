import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
}

function Button({
  children,
  color = "#fff",
  backgroundColor = "#333",
  ...rest
}: ButtonProps) {
  return (
    <StyleButton color={color} backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyleButton>
  );
}

export default Button;

const StyleButton = styled.button<{ color: string; backgroundColor: string }>`
  cursor: pointer;

  min-width: 80px;
  height: 44px;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
