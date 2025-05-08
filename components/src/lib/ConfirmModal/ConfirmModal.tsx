import BaseModal from "../BaseModal/BaseModal";
import type { ReactNode } from "react";

type ConfirmModalProps = {
  title: string;
  content: ReactNode;
  position?: "center" | "bottom";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

const ConfirmModal = ({
  title,
  content,
  position = "center",
  hasCloseButton = true,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  const buttonElements = (
    <>
      <button onClick={onClose}>취소</button>
      <button onClick={onConfirm ?? onClose}>확인</button>
    </>
  );

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

export default ConfirmModal;
