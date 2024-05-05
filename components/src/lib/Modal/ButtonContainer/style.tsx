import styled from "styled-components";
import { ButtonDirectionType } from "./ButtonContainer";

export const ButtonContainer = styled.div<{
  $direction: ButtonDirectionType;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "column" ? "column" : "row"};
  gap: 12px;

  width: 100%;
`;
