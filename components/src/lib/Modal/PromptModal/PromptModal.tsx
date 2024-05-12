import { PropsWithChildren, useEffect, useRef } from "react";
import Modal, { ModalProps } from "../Modal";
import styles from "../Modal.module.css";

export interface PromptModalProps extends ModalProps {
  confirmButton: {
    content: string;
    onConfirm: () => void;
  };
  cancelButton: {
    content: string;
    onCancel: () => void;
  };
}

const PromptModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  confirmButton,
  cancelButton,
}: PropsWithChildren<PromptModalProps>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const footerClassName = "promptModalFooter";
  const promptModalButton = [
    {
      content: cancelButton.content || "취소",
      onClick: cancelButton.onCancel,
      className: "cancelButton",
      style: {
        background: "transparent",
        width: "80px",
        color: "rgba(139, 149, 161, 1)",
        border: "1px solid rgba(51, 51, 51, 0.25)",
      },
    },
    {
      content: confirmButton.content || "확인",
      onClick: confirmButton.onConfirm,
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
        <input
          ref={inputRef}
          type="text"
          placeholder="010-1234-5678"
          className={styles.promptModalInput}
        />
        {children}
      </Modal>
    </>
  );
};

export default PromptModal;
