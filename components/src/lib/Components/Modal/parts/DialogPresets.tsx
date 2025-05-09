import React from "react";
import Modal, { ModalProps } from "../index";
import styles from "../styles/DialogPresets.module.css";

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
  const headerId = "alert-dialog-title";
  const descId = "alert-dialog-description";

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
        <Modal.Container
          size={size}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby={headerId}
          aria-describedby={descId}
        >
          <Modal.Header id={headerId}>{title}</Modal.Header>
          <Modal.Content id={descId}>{message}</Modal.Content>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              className={styles.button}
              onClick={handleConfirm}
            >
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
  size = "medium",
  position = "center",
}) => {
  const headerId = "confirm-dialog-title";
  const descId = "confirm-dialog-description";

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
        <Modal.Container
          size={size}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headerId}
          aria-describedby={descId}
        >
          <Modal.Header id={headerId}>{title}</Modal.Header>
          <Modal.Content id={descId}>{message}</Modal.Content>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={`${styles.button} ${styles.cancelButton}`}
              onClick={handleCancel}
            >
              취소
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={handleConfirm}
            >
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

  const handleConfirm = (e: React.FormEvent) => {
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
        <Modal.Container
          size={size}
          role="dialog"
          aria-modal="true"
          aria-labelledby="prompt-dialog-title"
        >
          <Modal.Header id="prompt-dialog-title">{title}</Modal.Header>

          <form className={styles.form} onSubmit={handleConfirm}>
            <label htmlFor="prompt-dialog-input" className={styles.srOnly}>
              {title}
            </label>
            <input
              id="prompt-dialog-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className={styles.input}
              autoFocus
            />

            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={`${styles.button} ${styles.cancelButton}`}
                onClick={handleCancel}
              >
                취소
              </button>
              <button type="submit" className={styles.button}>
                확인
              </button>
            </div>
          </form>
        </Modal.Container>
      </Modal.Background>
    </Modal>
  );
};
