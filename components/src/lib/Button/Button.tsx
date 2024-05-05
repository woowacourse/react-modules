import styled, { css } from "styled-components";

export type ButtonColorType = "black" | "white";

export type ButtonSizeType = "small" | "medium" | "large" | "full";
interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: ButtonColorType | string;
  textColor?: ButtonColorType;
  size?: ButtonSizeType;
}

const Button = ({
  label,
  onClick,
  backgroundColor = "white",
  textColor = "black",
  size = "full",
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $size={size}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{
  $backgroundColor: ButtonColorType | string;
  $textColor: ButtonColorType;
  $size: ButtonSizeType;
}>`
  height: 44px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  ${({ $size }) => {
    if ($size === "small") {
      return css`
        width: 100px;
      `;
    }
    if ($size === "medium") {
      return css`
        width: 150px;
      `;
    }
    if ($size === "large") {
      return css`
        width: 200px;
      `;
    }
    return css`
      width: 100%;
    `;
  }}
  ${({ $backgroundColor, $textColor }) => {
    if ($backgroundColor === "black") {
      return css`
        background-color: #333333;
        color: white;
        border: 1px solid #333333;
      `;
    } else if ($backgroundColor === "white") {
      return css`
        background-color: white;
        color: #333333;
        border: 1px solid #bababa;
      `;
    } else {
      return css`
        background-color: ${$backgroundColor};
        color: ${$textColor};
        border: 1px solid #bababa;
      `;
    }
  }}
`;
