import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  backgroundColor?: string;
}

function Button({
  text,
  color = "#fff",
  backgroundColor = "#333",
  ...rest
}: ButtonProps) {
  return (
    <StyleButton color={color} backgroundColor={backgroundColor} {...rest}>
      {text}
    </StyleButton>
  );
}

export default Button;

const StyleButton = styled.button<{ color: string; backgroundColor: string }>`
  cursor: pointer;

  width: 100%;
  height: 44px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
