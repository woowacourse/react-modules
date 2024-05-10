import styled from "styled-components";

import ModalBackDrop from "./ModalBackDrop";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import ModalCloseButton from "./ModalCloseButton";
import ModalForm from "./ModalForm";
import ModalInput from "./ModalInput";
import ModalFooter from "./ModalFooter";
import ModalButton from "./ModalButton";

import useBlockScroll from "../hooks/useBlockScroll";
import useKeyDown from "../hooks/useKeyDown";

import { DEVICE_WIDTH, MODAL_BORDER_RADIUS, MODAL_POSITION } from "../constants/modal";

import { Device, ModalPosition } from "../types/modal";

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isOpen: boolean;
  position?: ModalPosition;
  device?: Device;
  onClose: () => void;
}

const Modal = ({ children, isOpen, position = "center", device = "desktop", onClose }: ModalProps) => {
  useKeyDown("Escape", onClose);

  useBlockScroll(isOpen);

  return (
    isOpen && (
      <StyledModal $position={position} $device={device}>
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
Modal.ModalForm = ModalForm;
Modal.ModalInput = ModalInput;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;

export default Modal;

const StyledModal = styled.section<{ $position: ModalPosition; $device: Device }>`
  height: 100vh;
  width: 100%;
  max-width: ${({ $device }) => DEVICE_WIDTH[$device]};
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: ${({ $position }) => MODAL_POSITION[$position]};
  margin: auto;

  & > div:nth-child(2) {
    border-radius: ${({ $position }) => MODAL_BORDER_RADIUS[$position]};
  }
`;
