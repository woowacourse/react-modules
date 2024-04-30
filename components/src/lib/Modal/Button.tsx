import React from "react";
import styled from "styled-components";

type ButtonColor = "dark" | "white";

export interface ButtonProps {
  children: React.ReactNode;
  theme: ButtonColor;
  onClick: () => void;
}

const BUTTON_STYLES: Record<ButtonColor, string> = {
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

const Button = ({ children, theme, onClick }: ButtonProps) => {
  return (
    <StyledButton $theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ $theme: ButtonColor }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: 100%;

  border: 0.5px solid #8b95a1;
  border-radius: 8px;

  ${({ $theme }) => BUTTON_STYLES[$theme]}
  font-size: 15px;
  font-weight: 700;
`;
