import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const ButtonWrapper = styled.button<Pick<ButtonProps, "backgroundColor" | "fontColor">>`
  width: 100%;
  height: 44px;
  border-radius: 5px;
  border: none;
  background: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ fontColor }) => fontColor};
  }

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: center;
  color: ${({ fontColor }) => fontColor};
`;
