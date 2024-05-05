import styled from "styled-components";
import { ButtonDirectionType } from "./ButtonContainer";

const FLEX_DIRECTION = {
  row: "row",
  column: "column",
};

export const ButtonContainer = styled.div<{
  $direction: ButtonDirectionType;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};
  gap: 12px;

  width: 100%;
`;
