import { MODAL_POSITION_MAP, MODAL_SIZE_MAP } from './Modal.constant';
import { ButtonStyle, ModalPosition, ModalSize } from './Modal.type';

import useModalControl from './hooks/useModalControl';

import { convertPascalCase } from '../../utils/string';
import closeButtonImg from '../../asset/CloseButton.png';
import styles from './Modal.module.css';
import { forwardRef } from 'react';

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  position: ModalPosition;
  size: ModalSize;
}

interface ModalButtonProps {
  variant: ButtonStyle;
  onClick?: () => void;
}

interface ModalCloseButtonProps {
  onClick: () => void;
}

interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

type ModalHeaderType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { title: string }>>;
type ModalContentType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalButtonType = React.FC<React.PropsWithChildren<ModalButtonProps>>;
type ModalCloseButtonType = React.FC<React.PropsWithChildren<ModalCloseButtonProps>>;
type ModalCaptionType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { caption: string }>>;
type ModalInputType = React.ForwardRefExoticComponent<ModalInputProps & React.RefAttributes<HTMLInputElement>>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
  ModalButton: ModalButtonType;
  ModalCloseButton: ModalCloseButtonType;
  ModalInput: ModalInputType;
  ModalCaption: ModalCaptionType;
} = ({ children, className, isOpen, onToggle, position = 'center', size = 'large' }) => {
  const modalContainerPositionStyle = `modalContainerPosition${convertPascalCase(position)}`;

  useModalControl(isOpen, onToggle);

  return (
    isOpen && (
      <div className={`${styles.modal} ${styles[MODAL_POSITION_MAP[position]]} `}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div
          className={`${styles.modalContainer} ${styles[modalContainerPositionStyle]} ${styles[MODAL_SIZE_MAP[size]]} ${className}`}
        >
          {children}
        </div>
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

const ModalCaption: ModalCaptionType = ({ caption, ...rest }) => {
  return <div {...rest}>{caption}</div>;
};

const ModalInput = forwardRef<HTMLInputElement, ModalInputProps>(({ className, value, onChange, ...rest }, ref) => {
  return (
    <input ref={ref} className={`${styles.modalInput} ${className}`} value={value} onChange={onChange} {...rest} />
  );
});
export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalInput = ModalInput;
Modal.ModalCaption = ModalCaption;
