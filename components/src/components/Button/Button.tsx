import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonContainer = styled.button<{
  variant?: "confirm" | "cancel";
  size: "small" | "medium" | "large";
}>`
  ${({ size }) => sizeStyles[size]}

  @media (max-width: 768px) {
    width: 100%;
  }

  ${({ variant }) =>
    variant
      ? variantStyles[variant]
      : css`
          background-color: white;
        `}

  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  &:active {
    background-color: gray;
  }
`;

interface ButtonInterface {
  variant?: "confirm" | "cancel";
  size: "small" | "medium" | "large";
  onClick: () => void;
  tabIndex?: number;
  text?: string;
}

export default function Button({
  variant,
  size,
  onClick,
  text,
}: ButtonInterface) {
  const textMap: Record<"confirm" | "cancel", string> = {
    confirm: "확인",
    cancel: "취소",
  };

  const buttonText = variant ? textMap[variant] : text ?? "";

  return (
    <ButtonContainer size={size} variant={variant} onClick={onClick}>
      {buttonText}
    </ButtonContainer>
  );
}

const variantStyles = {
  confirm: css`
    background-color: black;
    color: white;
  `,
  cancel: css`
    background-color: white;
    color: gray;
    border: 1px solid lightgray;
  `,
};

const sizeStyles = {
  small: css`
    width: 70px;
    height: 30px;
    font-size: 12px;
    font-weight: 500;
  `,
  medium: css`
    width: 80px;
    height: 35px;
    font-size: 14px;
    font-weight: 600;
  `,
  large: css`
    width: 90px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
  `,
};
