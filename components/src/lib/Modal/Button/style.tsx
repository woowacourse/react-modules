import styled from "styled-components";

import { ButtonColor } from "./Button";

const BUTTON_COLOR_STYLES = {
  dark: `
      background-color: #333333;

      color: #ffffff;

      &:hover {
        background-color: #1f1f1f;
      }
    `,
  white: `background-color: #ffffff;

    color: #8b95a1;

    &:hover {
      border: 0.5px solid #dfdfdf;
      background-color: #f0f0f0;
    }`,
};

export const Button = styled.button<{ $theme: ButtonColor }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  width: 100%;

  border: 0.5px solid #8b95a1;
  border-radius: 8px;

  ${({ $theme }) => BUTTON_COLOR_STYLES[$theme]}

  font-size: 15px;
  font-weight: 700;
`;
