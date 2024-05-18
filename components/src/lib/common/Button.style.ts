import styled from "@emotion/styled";
import { isValidColorCode } from "./../../util/index";
import { ButtonProps } from "./Button";

export const ButtonWrapper = styled.button<ButtonProps>`
  padding: 6px 21px;
  border-radius: 5px;
  border: none;
  background: ${({ backgroundColor }) => backgroundColor};
  ${({ borderColor }) =>
    borderColor && isValidColorCode(borderColor) && `border : 1px solid ${borderColor};`}
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: center;
  color: ${({ fontColor }) => fontColor};
`;
