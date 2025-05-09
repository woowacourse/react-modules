import { ReactNode } from "react";
import Modal from "../Modal";

interface AlertModalProps {
  size: "small" | "medium" | "large";
  position: "center" | "bottom";
  isOpen: boolean;
  showConfirmButton?: boolean;
  children: ReactNode;
  onClose: () => void;
}

const AlertModal = ({
  size = "medium",
  position,
  isOpen,
  showConfirmButton,
  children,
  onClose,
}: AlertModalProps) => {
  return (
    <Modal
      size={size}
      position={position}
      isOpen={isOpen}
      showConfirmButton={showConfirmButton}
      onClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default AlertModal;
