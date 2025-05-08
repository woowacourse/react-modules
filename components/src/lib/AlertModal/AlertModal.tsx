import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";

type AlertModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  hasCloseButton?: boolean;
  onClose: () => void;
};

const AlertModal = ({
  title,
  content,
  position = "center",
  hasCloseButton = true,
  onClose,
}: AlertModalProps) => {
  return (
    <BaseModal
      title={title}
      content={content}
      position={position}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
    />
  );
};

export default AlertModal;
