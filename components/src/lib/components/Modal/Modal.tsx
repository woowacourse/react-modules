import { forwardRef } from 'react';

import {
  BUTTON_COLOR_MAP,
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from './Modal.constant';
import type { ButtonColorType, FlexDirection, ModalDevice, ModalPosition, ModalSize } from './Modal.type';

import useModalControl from './@hooks/useModalControl';

import { convertPascalCase } from '../../../utils/string';
import { extendClassNames } from '../../../utils/extendClassNames';
import { CloseImage } from '../../assets';

import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  position: ModalPosition;
  size?: ModalSize;
  device?: ModalDevice;
  onToggle: () => void;
}

export type ModalInputType = React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
>;
type ModalHeaderType = React.FC<React.PropsWithChildren<{ title: string } & React.HTMLAttributes<HTMLElement>>>;
type ModalContentType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;
type ModalFooterType = React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { direction?: FlexDirection }>
>;
type ModalCloseButtonType = React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
type ModalButtonType = React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { color: ButtonColorType }>;
type ModalLabelType = React.FC<React.PropsWithChildren>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
  ModalCloseButton: ModalCloseButtonType;
  ModalButton: ModalButtonType;
  ModalInput: ModalInputType;
  ModalLabel: ModalLabelType;
} = ({ children, isOpen, device = 'mobile', size = 'small', position = 'center', onToggle }) => {
  useModalControl(isOpen, onToggle);

  return (
    isOpen && (
      <div
        className={extendClassNames(
          styles.modal,
          styles[MODAL_POSITION_CLASS_NAME_MAP[position]],
          styles[MODAL_DEVICE_CLASS_NAME_MAP[device]],
        )}
      >
        <div className={styles.dimmed} onClick={onToggle} />
        <div
          className={extendClassNames(
            styles.modalContainer,
            styles[MODAL_POSITION_CLASS_NAME_MAP[position]],
            styles[MODAL_SIZE_CLASS_NAME_MAP[size]],
          )}
        >
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

const ModalCloseButton: ModalCloseButtonType = ({ className, type = 'submit', ...rest }) => {
  return (
    <button type={type} className={extendClassNames(styles.modalCloseButton, className)} {...rest}>
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

const ModalButton: ModalButtonType = ({ children, type = 'submit', color = 'primary', className, ...rest }) => {
  return (
    <button
      type={type}
      className={extendClassNames(styles.modalButton, styles[BUTTON_COLOR_MAP[color]], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

const ModalInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ ...rest }, ref) => {
  return <input className={styles.modalInput} ref={ref} {...rest} />;
});

const ModalLabel: ModalLabelType = ({ children }) => {
  return <p className={styles.modalLabel}>{children}</p>;
};

export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;
Modal.ModalInput = ModalInput;
Modal.ModalLabel = ModalLabel;
