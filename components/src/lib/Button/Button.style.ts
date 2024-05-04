import styled, { css } from "styled-components";
import { ButtonColorType, ButtonSizeType } from "./Button";

export const ButtonWrapper = styled.button<{
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
  ${({ $backgroundColor, $textColor, theme }) => {
    if ($backgroundColor === "black") {
      return css`
        background-color: ${theme.COLOR.grey};
        color: white;
        border: 1px solid ${theme.COLOR.grey};
      `;
    } else if ($backgroundColor === "white") {
      return css`
        background-color: white;
        color: ${theme.COLOR.grey};
        border: 1px solid ${theme.COLOR.border};
      `;
    } else {
      return css`
        background-color: ${$backgroundColor};
        color: ${$textColor};
        border: 1px solid ${theme.COLOR.border};
      `;
    }
  }}
`;
