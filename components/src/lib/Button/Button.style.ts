import styled, { css } from "styled-components";
import { ButtonColorType, ButtonSizeType } from "./Button";

export const BUTTON_WIDTH_MAP = {
  small: "80px",
  medium: "120px",
  large: "150px",
  full: "100%",
};

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
  width: ${({ $size }) => BUTTON_WIDTH_MAP[$size]};

  ${({ $backgroundColor, $textColor, theme }) => {
    if ($backgroundColor === "black") {
      return css`
        background-color: ${theme.COLOR["lineGrey"]};
        color: white;
        border: 1px solid ${theme.COLOR["lineGrey"]};
      `;
    } else if ($backgroundColor === "white") {
      return css`
        background-color: white;
        color: ${theme.COLOR["lineGrey"]};
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
