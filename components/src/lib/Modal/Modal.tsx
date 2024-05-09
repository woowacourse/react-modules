import { MODAL_POSITION_MAP } from './Modal.constant';
import { ButtonStyle, ModalPosition } from './Modal.type';

import useModalControl from './hooks/useModalControl';

import { convertPascalCase } from '../../utils/string';
import closeButtonImg from '../../asset/CloseButton.png';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onToggle: () => void;
  position: ModalPosition;
}

interface ModalButtonProps {
  variant: ButtonStyle;
  onClick?: () => void;
}

interface ModalCloseButtonProps {
  onClick: () => void;
}

type ModalHeaderType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { title: string }>>;
type ModalContentType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalButtonType = React.FC<React.PropsWithChildren<ModalButtonProps>>;
type ModalCloseButtonType = React.FC<React.PropsWithChildren<ModalCloseButtonProps>>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
  ModalButton: ModalButtonType;
  ModalCloseButton: ModalCloseButtonType;
} = ({ children, isOpen, onToggle, position = 'center' }) => {
  const modalContainerStyle = position === 'bottom' ? `modalContainer${convertPascalCase(position)}` : '';

  useModalControl(isOpen, onToggle);

  return (
    isOpen && (
      <div className={`${styles.modal} ${styles[MODAL_POSITION_MAP[position]]}`}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div className={`${styles.modalContainer} ${styles[modalContainerStyle]}`}>{children}</div>
      </div>
    )
  );
};

const ModalHeader: ModalHeaderType = ({ children, title, ...rest }) => {
  return (
    <header className={styles.modalHeader} {...rest}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {children}
    </header>
  );
};

const ModalContent: ModalContentType = ({ children, ...rest }) => {
  return (
    <section className={styles.modalContent} {...rest}>
      {children}
    </section>
  );
};

const ModalFooter: ModalFooterType = ({ children, ...rest }) => {
  return (
    <footer className={styles.modalFooter} {...rest}>
      {children}
    </footer>
  );
};

const ModalButton: ModalButtonType = ({ children, variant = 'primary', onClick, ...rest }) => {
  return (
    <button className={`${styles.modalButton} ${styles[variant]}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

const ModalCloseButton: ModalCloseButtonType = ({ onClick, ...rest }) => {
  return (
    <button className={styles.modalCloseButton} onClick={onClick} {...rest}>
      <img src={closeButtonImg} className={styles.modalCloseButton} />
    </button>
  );
};

export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;
Modal.ModalCloseButton = ModalCloseButton;
