import { PropsWithChildren } from "react";
import Modal, { PositionProps, SizeProps, TitleProps } from "../Modal";

interface ConfirmModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  onConfirm,
  onCancel,
}: PropsWithChildren<ConfirmModalProps>) => {
  const footerClassName = "confirmModalFooter";
  const footerButtons = [
    {
      content: "취소",
      onClick: onCancel,
      className: "cancelButton",
      style: {
        background: "transparent",
        color: "rgba(139, 149, 161, 1)",
        border: "1px solid rgba(51, 51, 51, 0.25)",
        width: "80px",
      },
    },
    {
      content: "확인",
      onClick: onConfirm,
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
