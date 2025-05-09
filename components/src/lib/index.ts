// export { default as Modal } from "./Modal/Modal";

import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { ReactNode } from "react";
import ModalComponent, { ModalComponentProps } from "./Modal/Modal";
import { AlertButton } from "./ModalButton/ModalButton";

type ModalComponentType = ((props: ModalComponentProps) => ReactNode) & {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
  AlertButton: typeof AlertButton;
};

const Modal = ModalComponent as ModalComponentType;

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.AlertButton = AlertButton;

export default Modal;
