import { ReactNode } from "react";
import Modal from "../Modal";

interface ConfirmModalProps {
  size: "small" | "medium" | "large";
  position: "center" | "bottom";
  isOpen: boolean;
  showCloseButton: boolean;
  showConfirmButton: boolean;
  children: ReactNode;
  onClose: () => void;
}

const ConfirmModal = ({
  size = "medium",
  position,
  isOpen,
  showCloseButton = true,
  showConfirmButton = true,
  children,
  onClose,
}: ConfirmModalProps) => {
  return (
    <Modal
      size={size}
      position={position}
      isOpen={isOpen}
      showCloseButton={showCloseButton}
      showConfirmButton={showConfirmButton}
      onClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default ConfirmModal;
