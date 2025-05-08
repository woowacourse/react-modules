import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";

type AlertModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const AlertModal = ({
  title,
  content,
  position = "center",
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
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      buttonElements={buttonElements}
    />
  );
};

export default AlertModal;
