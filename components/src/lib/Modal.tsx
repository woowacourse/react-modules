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
  closeOnOutsideClick,
  children,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.dimmed}>
            <section className={styles.modal}>
              <header className={styles.modalHeader}>
                <div className={styles.title}>{title}</div>
                <img src={CloseButton} alt="close" className={styles.closeButton} />
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
