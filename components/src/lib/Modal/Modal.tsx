import { useEffect } from 'react';
import type { StrictPropsWithChildren } from '../types/common';
import type { ModalProps, ModalFooterProps } from './Modal.type';
import { preventScroll, allowScroll } from '../utils/scroll';
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
  position = 'center',
  size = 'lg',
  backdropType = 'opaque',
  shadow = true,
  animation = true,
}: StrictPropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const prevScrollY = preventScroll();

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      allowScroll(prevScrollY);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalLayout} ${styles[position]} ${animation ? styles.animation : ''}`}>
      <div onClick={close} className={`${styles.modalBackdrop} ${styles[backdropType]}`} />
      <div
        className={`${styles.modalContainer} ${styles[size]} ${styles[position]} ${shadow ? styles.shadow : ''} ${animation ? styles.animation : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
