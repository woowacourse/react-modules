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
    },
    {
      content: confirmButton.content || "확인",
      onClick: confirmButton.onConfirm,
      className: "confirmButton",
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
