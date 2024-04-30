import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import CloseButton from './assets/closeButton.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  position: 'center' | 'bottom';
  style?: React.CSSProperties;
  closeButton?: React.ReactNode;
  confirmButton?: React.ReactNode;
  buttonPosition?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  onConfirm?: () => void;
  closeOnOutsideClick?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  position,
  style,
  closeButton,
  confirmButton,
  buttonPosition,
  onConfirm,
  closeOnOutsideClick = true,
  children,
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        closeOnOutsideClick
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', clickOutSide);
    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [modalRef, onClose, closeOnOutsideClick]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.dimmed}>
            <section className={styles.modal} ref={modalRef}>
              <header className={styles.modalHeader}>
                <div className={styles.title}>{title}</div>
                <img
                  src={CloseButton}
                  alt="close"
                  className={styles.closeButton}
                  onClick={onClose}
                />
              </header>
              <section>{children}</section>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
