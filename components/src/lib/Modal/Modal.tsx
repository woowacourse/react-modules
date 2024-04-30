import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, isOpen, onToggle }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div className={styles.modalContainer}>{children}</div>
      </div>
    )
  );
};

export default Modal;
