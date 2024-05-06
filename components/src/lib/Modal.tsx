import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';
import closeButton from './assets/closeButton.svg';

type positionProps = 'center' | 'bottom';

interface ModalProps {
  position: positionProps;
  title: string;
  onClose: () => void;
  existCloseButton: boolean;
  closeOnBackdropClick?: boolean;
}

const Modal = ({ position, title, children, onClose, existCloseButton, closeOnBackdropClick = true }: PropsWithChildren<ModalProps>) => {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      <div className={styles.backDrop} onClick={closeOnBackdropClick ? onClose : undefined}></div>
      <div className={styles.modalContent}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          {existCloseButton && (
            <button className={styles.closeButton} onClick={onClose}>
              <img src={closeButton} />
            </button>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
