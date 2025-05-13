import { PropsWithChildren } from "react";
import BaseModal from "@/components/BaseModal";
import { ModalLayoutProps, ModalDefaultProps } from "../../types/modal";

interface ModalProps
  extends Omit<ModalDefaultProps, "size">,
    ModalLayoutProps {}

function Modal({
  title,
  onRequestClose,
  position,
  size,
  closeTrigger,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <BaseModal
      title={title}
      onRequestClose={onRequestClose}
      position={position}
      size={size}
      closeTrigger={closeTrigger}
      hasCloseButton
    >
      {children}
    </BaseModal>
  );
}

export default Modal;
