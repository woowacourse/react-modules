import styled from "@emotion/styled";
import { BUTTON_COLOR_MAP, ButtonVariant } from "../../../constants/theme";

export const ButtonWrapper = styled.button<{ $variant: ButtonVariant }>`
  width: 100%;
  height: 48px;
  background-color: ${({ $variant }) => BUTTON_COLOR_MAP[$variant].background};
  color: ${({ $variant }) => BUTTON_COLOR_MAP[$variant].text};
  border: 1.5px solid ${({ $variant }) => BUTTON_COLOR_MAP[$variant].border};
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;
