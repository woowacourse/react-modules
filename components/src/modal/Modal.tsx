import {
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import styles from './Modal.module.css';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  contents: ReactNode;
  buttons: ReactElement<typeof PrimaryButton | typeof SecondaryButton>[];
  showCloseButton?: boolean;
  position?: 'center' | 'bottom';
}

function Modal({
  title,
  isOpen,
  onClose,
  contents,
  buttons,
  position = 'center',
  showCloseButton = true,
}: ModalProps) {
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

  useEffect(() => {
    buttons.forEach((button, idx) => {
      if (
        !isValidElement(button) ||
        (button.type !== PrimaryButton && button.type !== SecondaryButton)
      ) {
        throw new Error(
          `Modal: buttons[${idx}]는 PrimaryButton 또는 SecondaryButton이어야 합니다.`
        );
      }
    });
  }, [buttons]);

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
          {buttons.map((buttonComponent, index) => (
            <Fragment key={index}>{buttonComponent}</Fragment>
          ))}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
