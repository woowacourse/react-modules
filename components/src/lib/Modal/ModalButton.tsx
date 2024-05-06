import React from "react";
import styled from "styled-components";

type ButtonTheme = "dark" | "white";

export interface ButtonProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
  theme?: ButtonTheme;
}

const BUTTON_STYLES: Record<ButtonTheme, string> = {
  dark: `
    background-color: #333333; 

    color: #ffffff;

    &:hover {
      background-color: #1f1f1f; 
    }
    `,

  white: `
    background-color: #ffffff; 

    color: #8B95A1;

    &:hover {
      border: 0.5px solid #dfdfdf;
      background-color: #f0f0f0; 
    }
    `,
};

const ModalButton = ({ children, onClick, theme = "white", ...props }: ButtonProps) => {
  return (
    <StyledButton $theme={theme} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default ModalButton;

const StyledButton = styled.button<{ $theme: ButtonTheme }>`
  height: 44px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5px solid #8b95a1;
  border-radius: 8px;

  ${({ $theme }) => BUTTON_STYLES[$theme]}
  font-size: 15px;
  font-weight: 700;
`;
