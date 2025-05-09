// export { default as Modal } from "./Modal/Modal";

import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { ReactNode } from "react";
import ModalComponent, { ModalComponentProps } from "./Modal/Modal";
import { AlertButton, ConfirmButton } from "./ModalButton/ModalButton";

type ModalComponentType = ((props: ModalComponentProps) => ReactNode) & {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
  AlertButton: typeof AlertButton;
  ConfirmButton: typeof ConfirmButton;
};

const Modal = ModalComponent as ModalComponentType;

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.AlertButton = AlertButton;
Modal.ConfirmButton = ConfirmButton;

export default Modal;
