import { PropsWithChildren } from "react";
import Modal, { ModalProps } from "../Modal";

export interface ConfirmModalProps extends ModalProps {
  confirmButton: {
    content: string;
    onConfirm: () => void;
  };
  cancelButton: {
    content: string;
    onCancel: () => void;
  };
}

const ConfirmModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  confirmButton,
  cancelButton,
}: PropsWithChildren<ConfirmModalProps>) => {
  const footerClassName = "confirmModalFooter";
  const footerButtons = [
    {
      content: cancelButton.content || "취소",
      onClick: cancelButton.onCancel,
      className: "cancelButton",
      style: {
        background: "transparent",
        color: "rgba(139, 149, 161, 1)",
        border: "1px solid rgba(51, 51, 51, 0.25)",
        width: "80px",
      },
    },
    {
      content: confirmButton.content || "확인",
      onClick: confirmButton.onConfirm,
      className: "confirmButton",
      style: {
        background: "rgba(51, 51, 51, 1)",
        color: "white",
        width: "80px",
      },
    },
  ];

  return (
    <>
      <Modal
        position={position}
        size={size}
        title={title}
        isOpen={isOpen}
        footerClassName={footerClassName}
        footerButtons={footerButtons}
      >
        {children}
      </Modal>
    </>
  );
};

export default ConfirmModal;
