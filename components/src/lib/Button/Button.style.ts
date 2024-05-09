import styled, { css } from "styled-components";
import { ButtonColorType, ButtonSizeType } from "./Button";
import { DefaultTheme } from "styled-components";

export const BUTTON_WIDTH_MAP = {
  small: "80px",
  medium: "120px",
  large: "150px",
  full: "100%",
};

export const BLACK_STYLE = (theme: DefaultTheme) => css`
  background-color: ${theme.COLOR["lineGrey"]};
  color: white;
  border: 1px solid ${theme.COLOR["lineGrey"]};
`;

export const WHITE_STYLE = (theme: DefaultTheme) => css`
  background-color: white;
  color: ${theme.COLOR["lineGrey"]};
  border: 1px solid ${theme.COLOR.border};
`;

export const DEFAULT_STYLE = ({
  $backgroundColor,
  $textColor,
  theme,
}: {
  $backgroundColor: string;
  $textColor: string;
  theme: DefaultTheme;
}) => css`
  background-color: ${$backgroundColor};
  color: ${$textColor};
  border: 1px solid ${theme.COLOR.border};
`;

export const ButtonWrapper = styled.button<{
  $backgroundColor: ButtonColorType | string;
  $textColor: ButtonColorType;
  $size: ButtonSizeType;
}>`
  height: 36px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ $size }) => BUTTON_WIDTH_MAP[$size]};

  ${({ $backgroundColor, $textColor, theme }) => {
    if ($backgroundColor === "black") return BLACK_STYLE(theme);
    if ($backgroundColor === "white") return WHITE_STYLE(theme);
    return DEFAULT_STYLE({ $backgroundColor, $textColor, theme });
  }}
`;
