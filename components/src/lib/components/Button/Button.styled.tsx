import styled from "@emotion/styled";

import { ButtonProps } from "./Button.types";

const ButtonColors = {
  light: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #cccccc",
    color: "#666666",
  },
  dark: {
    backgroundColor: "#333333",
    border: "1px solid #333333",
    color: "#FFFFFF",
  },
};

export const StyledButton = styled.div<ButtonProps>`
  width: 80px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  ${({ color = "light" }) => ButtonColors[color]};
`;
