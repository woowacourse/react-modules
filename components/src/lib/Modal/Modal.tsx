import { StrictPropsWithChildren } from '../types/common';
import type { ModalProps, ModalFooterProps } from './Modal.type';

import styles from './Modal.module.css';

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
  position = 'bottom',
  size = 'lg',
  backdropType = 'opaque',
}: StrictPropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalLayout} ${position === 'center' ? styles.alignCenter : styles.alignFlexEnd}`}>
      <div onClick={close} className={`${styles.modalBackdrop} ${styles[backdropType]}`} />
      <div className={`${styles.modalContainer} ${styles[size]} ${styles[position]}`}>{children}</div>
    </div>
  );
};
