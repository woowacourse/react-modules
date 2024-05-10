import { PropsWithChildren } from "react";
import Modal, { PositionProps, SizeProps, TitleProps } from "../Modal";
import styles from "../Modal.module.css";

interface PromptModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const PromptModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  onConfirm,
  onCancel,
}: PropsWithChildren<PromptModalProps>) => {
  const footerClassName = "promptModalFooter";
  const promptModalButton = [
    {
      content: "취소",
      onClick: onCancel,
      className: "cancelButton",
      style: {
        background: "transparent",
        width: "80px",
        color: "rgba(139, 149, 161, 1)",
        border: "1px solid rgba(51, 51, 51, 0.25)",
      },
    },
    {
      content: "확인",
      onClick: onConfirm,
      className: "confirmButton",
      style: {
        width: "80px",
        color: "white",
        background: "rgba(51, 51, 51, 1)",
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
        footerButtons={promptModalButton}
      >
        <input type="text" placeholder="010-1234-5678" className={styles.promptModalInput} />
        {children}
      </Modal>
    </>
  );
};

export default PromptModal;
