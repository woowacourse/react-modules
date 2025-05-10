import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";

type AlertModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const AlertModal = ({
  title,
  content,
  position = "center",
  size = "medium",
  hasCloseButton = true,
  onClose,
  onConfirm,
}: AlertModalProps) => {
  const buttonElements = <button onClick={onConfirm}>확인</button>;

  return (
    <BaseModal
      title={title}
      content={content}
      position={position}
      size={size}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      buttonElements={buttonElements}
    />
  );
};

export default AlertModal;
