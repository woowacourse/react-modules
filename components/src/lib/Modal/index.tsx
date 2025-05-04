import { PropsWithChildren } from "react";
import useOutsideClickRef from "../../hooks/useOutsideClickRef";
import useKeyDown from "@/hooks/useKeyDown";
import BaseModal from "../BaseModal";
import { ModalLayoutProps } from "../types";

interface ModalProps extends ModalLayoutProps {
  title: string;
  onRequestClose: () => void;
}

function Modal({
  title,
  onRequestClose,
  children,
  position,
  size,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useOutsideClickRef<HTMLDivElement>(() => onRequestClose());
  useKeyDown({ keys: ["Escape"], callback: () => onRequestClose() });

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
