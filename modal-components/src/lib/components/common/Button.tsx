import type React from "react";
import type { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  widthSize?: string;
}

const StyledButton = styled.button<{
  variant: ButtonVariant;
  widthSize?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ widthSize }) => (widthSize ? widthSize : "100%")};

  ${({ variant }) =>
    variant === "primary"
      ? `
      background-color: #333;
      color: white;
      border: none;
      &:hover {
        background-color: #222;
      }
      &:active {
        background-color: #111;
      }
      `
      : `
      background-color: white;
      color: #333;
      border: 1px solid #ccc;
      &:hover {
        background-color: #f5f5f5;
      }
      &:active {
        background-color: #e5e5e5;
      }
      `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({
  variant = "secondary",
  children,
  type = "button",
  widthSize = "100%",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} type={type} widthSize={widthSize} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
