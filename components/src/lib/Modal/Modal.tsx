import { MODAL_POSITION_MAP } from './Modal.constant';
import { ModalPosition } from './Modal.type';

import { convertPascalCase } from '../../utils/string';

import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onToggle: () => void;
  position: ModalPosition;
}

type ModalHeaderType = React.FC<React.PropsWithChildren<{ title: string }>>;
type ModalContentType = React.FC<React.PropsWithChildren>;
type ModalFooterType = React.FC<React.PropsWithChildren>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
} = ({ children, isOpen, onToggle, position = 'center' }) => {
  const modalContainerStyle = position === 'bottom' ? `modalContainer${convertPascalCase(position)}` : '';

  return (
    isOpen && (
      <div className={`${styles.modal} ${styles[MODAL_POSITION_MAP[position]]}`}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div className={`${styles.modalContainer} ${styles[modalContainerStyle]}`}>{children}</div>
      </div>
    )
  );
};

const ModalHeader: React.FC<React.PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <header className={styles.modalHeader}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {children}
    </header>
  );
};

const ModalContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className={styles.modalContent}>{children}</section>;
};

const ModalFooter: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <footer className={styles.modalFooter}>{children}</footer>;
};

export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
