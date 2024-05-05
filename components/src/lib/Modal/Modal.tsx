import { BUTTON_COLOR_MAP, MODAL_POSITION_MAP } from './Modal.constant';
import type { ButtonColorType, FlexDirection, ModalPosition } from './Modal.type';

import useModalControl from './hooks/useModalControl';

import { convertPascalCase } from '../../utils/string';
import { extendClassNames } from '../../utils/extendClassNames';
import { CloseImage } from '../assets';

import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  position: ModalPosition;
  onToggle: () => void;
}

type ModalHeaderType = React.FC<React.PropsWithChildren<{ title: string } & React.HTMLAttributes<HTMLElement>>>;
type ModalContentType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { direction?: FlexDirection }>
>;
type ModalCloseButtonType = React.FC<React.HTMLAttributes<HTMLButtonElement>>;
type ModalButtonType = React.FC<React.HTMLAttributes<HTMLButtonElement> & { color: ButtonColorType }>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
  ModalCloseButton: ModalCloseButtonType;
  ModalButton: ModalButtonType;
} = ({ children, isOpen, position = 'center', onToggle }) => {
  const modalContainerPositionClassName = position === 'bottom' ? `modalContainer${convertPascalCase(position)}` : '';

  useModalControl(isOpen, onToggle);

  return (
    isOpen && (
      <div className={extendClassNames(styles.modal, styles[MODAL_POSITION_MAP[position]])}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div className={extendClassNames(styles.modalContainer, styles[modalContainerPositionClassName])}>
          {children}
        </div>
      </div>
    )
  );
};

const ModalHeader: ModalHeaderType = ({ children, className, title }) => {
  return (
    <header className={extendClassNames(styles.modalHeader, className)}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {children}
    </header>
  );
};

const ModalCloseButton: ModalCloseButtonType = ({ className, ...rest }) => {
  return (
    <button className={extendClassNames(styles.modalCloseButton, className)} {...rest}>
      <img className={styles.modalCloseButtonImage} src={CloseImage} alt="close-button" />
    </button>
  );
};

const ModalContent: ModalContentType = ({ children, className, ...rest }) => {
  return (
    <section className={extendClassNames(styles.modalContent, className)} {...rest}>
      {children}
    </section>
  );
};

const ModalFooter: ModalFooterType = ({ children, direction = 'row', className }) => {
  const footerRowClassName = styles[`footer${convertPascalCase(direction)}`];
  return (
    <footer className={extendClassNames(styles.modalFooter, footerRowClassName, className)}>
      <div className={extendClassNames(styles.modalFooterChildrenContainer, styles[direction])}>{children}</div>
    </footer>
  );
};

const ModalButton: ModalButtonType = ({ children, color = 'primary', className, ...rest }) => {
  return (
    <button className={extendClassNames(styles.modalButton, styles[BUTTON_COLOR_MAP[color]], className)} {...rest}>
      {children}
    </button>
  );
};

export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;
