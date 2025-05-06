import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonContainer = styled.div<{
  type?: "confirm" | "cancel";
  size: "small" | "medium" | "large";
}>`
  ${({ size }) => sizeStyles[size]}

  ${({ type }) =>
    type
      ? typeStyles[type]
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
  type?: "confirm" | "cancel";
  size: "small" | "medium" | "large";
  onclick: () => void;

  text?: string;
}

export default function Button({ type, size, onclick, text }: ButtonInterface) {
  const textMap: Record<"confirm" | "cancel", string> = {
    confirm: "확인",
    cancel: "취소",
  };

  const buttonText = type ? textMap[type] : text ?? "";

  return (
    <ButtonContainer size={size} type={type} onClick={onclick}>
      {buttonText}
    </ButtonContainer>
  );
}

const typeStyles = {
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
