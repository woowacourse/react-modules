/** @jsxImportSource @emotion/react */
import { FC, ReactNode } from "react";
import { ButtonStyle } from "./Button.styles";
import { css } from "@emotion/react";

interface ButtonProps {
  type: "cancel" | "confirm";
  handleClick?: () => void;
  children?: ReactNode;
  fullwidth?: boolean;
}

const Button: FC<ButtonProps> = ({ type, handleClick, children, fullwidth = false }) => {
  const isHighLight = type === "confirm" ? true : false;
  const fullWidthStyle = fullwidth ? css({ width: "100%" }) : null;

  return (
    <button css={[ButtonStyle(isHighLight), fullWidthStyle]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
