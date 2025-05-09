import styled from "@emotion/styled";
import { ModalPosition } from "../../../types/modal";

export const ModalBackdrop = styled.div<{
  $position: ModalPosition;
}>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: ${({ $position }) =>
    $position === "center" ? "center" : "end"};
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
`;
