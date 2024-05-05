import type { ModalProps, ModalFooterProps } from './Modal.type';
import styles from './Modal.module.css';
import { StrictPropsWithChildren } from '../type/common';
import usePreventScroll from '../hooks/usePreventScroll';
import useKeyPress from '../hooks/useKeyPress';

export const ModalHeader = ({ children }: StrictPropsWithChildren) => {
  return <header className={styles.modalHeader}>{children}</header>;
};

export const ModalBody = ({ children }: StrictPropsWithChildren) => {
  return <main className={styles.modalBody}>{children}</main>;
};

export const ModalFooter = ({ children, direction = 'column' }: StrictPropsWithChildren<ModalFooterProps>) => {
  return <footer className={`${styles.modalFooter} ${styles[direction]}`}>{children}</footer>;
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
        className={`${styles.modalContainer} ${styles[size]} ${styles[position]} ${shadow ? styles.shadow : ''} ${animation ? styles.animation : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
