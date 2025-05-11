import styled from "@emotion/styled";
import { BUTTON_COLOR_MAP, ButtonVarient } from "../../../constants/theme";

export const ButtonWrapper = styled.button<{ $varient: ButtonVarient }>`
  width: 100%;
  height: 48px;
  background-color: ${({ $varient }) => BUTTON_COLOR_MAP[$varient].background};
  color: ${({ $varient }) => BUTTON_COLOR_MAP[$varient].text};
  border: 1.5px solid ${({ $varient }) => BUTTON_COLOR_MAP[$varient].border};
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;
