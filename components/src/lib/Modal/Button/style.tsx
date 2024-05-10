import styled, { css } from "styled-components";

import { ButtonColorType, ButtonSizeType } from "./Button";

const BUTTON_COLOR_STYLES = {
  dark: css`
    background-color: ${(props) => props.theme.color.dark.background};

    color: ${(props) => props.theme.color.dark.text};

    &:hover {
      background-color: ${(props) => props.theme.color.black};
    }
  `,
  light: css`
    background-color: ${(props) => props.theme.color.light.background};

    color: ${(props) => props.theme.color.light.text};

    &:hover {
      border: 0.5px solid ${(props) => props.theme.color.lightGrey};
      background-color: ${(props) => props.theme.color.lightGrey};
    }
  `,
};

export const Button = styled.button<{
  $color: ButtonColorType;
  $size: ButtonSizeType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: ${({ $size }) => ($size === "small" ? "80px" : "100%")};

  border: 0.5px solid ${(props) => props.theme.color.grey};
  border-radius: 8px;

  ${({ $color }) => BUTTON_COLOR_STYLES[$color]}

  font-size: 15px;
  font-weight: 700;
`;
