import styled from "styled-components";

import ModalContent from "./ModalContent";
import ModalBackDrop from "./ModalBackDrop";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import ModalCloseButton from "./ModalCloseButton";
import ModalFooter from "./ModalFooter";
import ModalButton from "./ModalButton";

import useBlockScroll from "../hooks/useBlockScroll";
import useKeyDown from "../hooks/useKeyDown";

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useKeyDown("Escape", onClose);

  useBlockScroll(isOpen);

  return (
    isOpen && (
      <StyledModal>
        <ModalBackDrop onClose={onClose} />
        {children}
      </StyledModal>
    )
  );
};

Modal.ModalContent = ModalContent;
Modal.ModalHeader = ModalHeader;
Modal.ModalTitle = ModalTitle;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;

export default Modal;

const StyledModal = styled.section`
  position: relative;

  height: 100vh;
`;
