import styles from './Modal.module.css';
import { PropsWithChildren } from 'react';

type positionProps = 'center' | 'bottom';

interface ModalProps {
  position: positionProps;
  title: string;
  onClose: () => void;
}

const Modal = ({ position, title, children, onClose }: PropsWithChildren<ModalProps>) => {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      <div className={styles.backDrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
