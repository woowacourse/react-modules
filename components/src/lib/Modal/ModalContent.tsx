import styled from "styled-components";

import { MODAL_SIZE } from "../constants/modal";

import { ModalSize } from "../types/modal";

export interface ModalContentProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  size?: ModalSize;
}

const ModalContent = ({ children, size = "medium" }: ModalContentProps) => {
  return <StyledContent $size={size}>{children}</StyledContent>;
};

export default ModalContent;

const StyledContent = styled.div<{ $size: ModalSize }>`
  width: 100%;
  max-width: ${({ $size }) => MODAL_SIZE[$size]};

  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  background-color: #ffffff;
  z-index: 1;
`;
