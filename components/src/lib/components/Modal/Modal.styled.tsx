import styled from "@emotion/styled";

import { ModalProps } from "./Modal.types";

export const StyledModal = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
