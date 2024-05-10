import React from "react";
import styled from "styled-components";

import { ModalButtonSize, ModalButtonTheme, ModalButtonWidth } from "../types/modal";
import { MODAL_BUTTON_SIZE, MODAL_BUTTON_THEME, MODAL_BUTTON_WIDTH } from "../constants/modal";

type ButtonWidthProps = ModalButtonWidth | "fixed";

export interface ButtonProps extends React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  theme?: ModalButtonTheme;
  size?: ModalButtonSize;
  width?: ButtonWidthProps;
}

const ModalButton = ({ children, onClick, theme = "white", size = "medium", width = "full", disabled = false, ...props }: ButtonProps) => {
  return (
    <StyledButton $theme={theme} $size={size} $width={width} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default ModalButton;

const StyledButton = styled.button<{ $theme: ModalButtonTheme; $size: ModalButtonSize; $width: ButtonWidthProps }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5px solid #8b95a1;
  border-radius: 8px;

  font-weight: 700;

  ${({ $size }) => MODAL_BUTTON_SIZE[$size]};
  ${({ $theme }) => MODAL_BUTTON_THEME[$theme]};
  width: ${({ $width, $size }) => ($width === "fixed" ? MODAL_BUTTON_WIDTH[$size] : MODAL_BUTTON_WIDTH[$width])};
`;
