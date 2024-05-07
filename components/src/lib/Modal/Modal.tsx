import type { ModalProps, ModalFooterProps, ModalHeaderType, ModalBodyType } from './Modal.type';
import styles from './Modal.module.css';
import { StrictPropsWithChildren } from '../type/common';
import usePreventScroll from '../hooks/usePreventScroll';
import useKeyPress from '../hooks/useKeyPress';

export const ModalHeader = ({ children, ...rest }: StrictPropsWithChildren<ModalHeaderType>) => {
  return (
    <header {...rest} className={styles.modalHeader}>
      {children}
    </header>
  );
};

export const ModalBody = ({ children, ...rest }: StrictPropsWithChildren<ModalBodyType>) => {
  return (
    <section {...rest} className={styles.modalBody}>
      {children}
    </section>
  );
};

export const ModalFooter = ({
  children,
  direction = 'column',
  position = 'center',
  ...rest
}: StrictPropsWithChildren<ModalFooterProps>) => {
  return (
    <footer {...rest} className={`${styles.modalFooter} ${styles[direction]} ${styles[position]}`}>
      {children}
    </footer>
  );
};

export const ModalMain = ({
  isOpen,
  close,
  children,
  position = 'center',
  size = 'lg',
  backdropType = 'opaque',
  shadow = true,
  animation = true,
  zIndex = 100,
  ...rest
}: StrictPropsWithChildren<ModalProps>) => {
  usePreventScroll(isOpen);
  useKeyPress({ targetKey: 'Escape', callback: close, isActive: isOpen });

  if (!isOpen) return null;

  const modalStyle = {
    zIndex,
  };

  return (
    <div
      style={modalStyle}
      className={`${styles.modalLayout} ${styles[position]} ${animation ? styles.animation : ''}`}
    >
      <div onClick={close} className={`${styles.modalBackdrop} ${styles[backdropType]}`} />
      <div
        {...rest}
        className={`${styles.modalContainer} ${styles[size]} ${styles[position]} ${shadow ? styles.shadow : ''} ${animation ? styles.animation : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
