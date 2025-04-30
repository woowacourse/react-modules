import { ReactNode, useEffect, useRef } from 'react';
import styles from './Modal.module.css';

function Modal({
  title,
  isOpen,
  onClose,
  contents,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  position = 'center',
  showCloseButton = true,
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  contents: ReactNode;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
  showCloseButton?: boolean;
  position?: 'center' | 'bottom';
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <dialog
      onClose={onClose}
      className={`${styles.modal} ${position === 'bottom' ? styles.modalBottom : ''}`}
      ref={modalRef}
    >
      <div
        className={`${styles.modalWrapper} ${position === 'bottom' ? styles.modalWrapperBottom : ''}`}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          {showCloseButton && (
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
            >
              <img src="./close-button.png" alt="모달 닫기 버튼" />
            </button>
          )}
        </div>
        {contents}
        <div className={styles.buttonWrapper}>
          <button
            className={styles.primaryButton}
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </button>
          <button
            className={styles.secondaryButton}
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
