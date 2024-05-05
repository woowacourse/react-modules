import styled, { css } from "styled-components";

import { ButtonColor } from "./Button";

const BUTTON_COLOR_STYLES = {
  dark: css`
    background-color: ${(props) => props.theme.color.darkGrey};

    color: ${(props) => props.theme.color.white};

    &:hover {
      background-color: ${(props) => props.theme.color.black};
    }
  `,
  white: css`
    background-color: ${(props) => props.theme.color.white};

    color: ${(props) => props.theme.color.grey};

    &:hover {
      border: 0.5px solid ${(props) => props.theme.color.lightGrey};
      background-color: ${(props) => props.theme.color.lightGrey};
    }
  `,
};

export const Button = styled.button<{ $color: ButtonColor }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: 100%;

  border: 0.5px solid ${(props) => props.theme.color.grey};
  border-radius: 8px;

  ${({ $color }) => BUTTON_COLOR_STYLES[$color]}

  font-size: 15px;
  font-weight: 700;
`;
