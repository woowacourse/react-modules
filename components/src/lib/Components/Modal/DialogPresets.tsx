import React from "react";
import Modal, { ModalProps } from "./index";
import styles from "./DialogPresets.module.css";

export interface AlertDialogProps
  extends Omit<ModalProps, "children" | "dialogType"> {
  title: string;
  message: string;
  onConfirm: () => void;
  size?: "small" | "medium" | "large";
}

export interface ConfirmDialogProps
  extends Omit<ModalProps, "children" | "dialogType"> {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  size?: "small" | "medium" | "large";
}

export interface PromptDialogProps
  extends Omit<ModalProps, "children" | "dialogType"> {
  title: string;
  onConfirm: (value: string) => void;
  onCancel: () => void;
  size?: "small" | "medium" | "large";
  placeholder?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  onConfirm,
  position = "center",
  size = "medium",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      dialogType="alert"
    >
      <Modal.Background>
        <Modal.Container size={size}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>{message}</Modal.Content>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button className={styles.button} onClick={handleConfirm}>
              확인
            </button>
          </div>
        </Modal.Container>
      </Modal.Background>
    </Modal>
  );
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  onConfirm,
  onCancel,
  size,
  position = "center",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      dialogType="confirm"
    >
      <Modal.Background>
        <Modal.Container size={size}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>{message}</Modal.Content>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.cancelButton}`}
              onClick={handleCancel}
            >
              취소
            </button>
            <button className={styles.button} onClick={handleConfirm}>
              확인
            </button>
          </div>
        </Modal.Container>
      </Modal.Background>
    </Modal>
  );
};

export const PromptDialog: React.FC<PromptDialogProps> = ({
  isOpen,
  onClose,
  title,
  onConfirm,
  onCancel,
  size,
  position = "center",
  placeholder = "값을 입력하세요",
}) => {
  const [value, setValue] = React.useState("");

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm(value);
    onClose();
  };

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      dialogType="prompt"
    >
      <Modal.Background>
        <Modal.Container size={size}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content></Modal.Content>
          <form className={styles.form} onSubmit={handleConfirm}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className={styles.input}
            />

            <div className={styles.buttonContainer}>
              <button
                className={`${styles.button} ${styles.cancelButton}`}
                onClick={handleCancel}
              >
                취소
              </button>
              <button className={styles.button} type="submit">
                확인
              </button>
            </div>
          </form>
        </Modal.Container>
      </Modal.Background>
    </Modal>
  );
};
