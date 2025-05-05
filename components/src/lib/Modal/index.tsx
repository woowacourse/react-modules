import { PropsWithChildren } from "react";
import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import BaseModal from "../BaseModal";
import { ModalLayoutProps, ModalDefaultProps } from "../types";

interface ModalProps
  extends Omit<ModalDefaultProps, "size">,
    ModalLayoutProps {}

function Modal({
  title,
  onRequestClose,
  position,
  size,
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useOutsideClickRef<HTMLDivElement>(onRequestClose);
  useKeyDown({ keys: ["Escape"], callback: onRequestClose });

  return (
    <BaseModal
      title={title}
      onRequestClose={onRequestClose}
      modalRef={modalRef}
      position={position}
      size={size}
    >
      {children}
    </BaseModal>
  );
}

export default Modal;
