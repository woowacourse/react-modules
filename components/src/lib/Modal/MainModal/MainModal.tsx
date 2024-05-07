import { useRef } from 'react';
import { useEscapeKey, useFocusTrap, usePreventScroll } from '../../hooks';
import type { StrictPropsWithChildren, ModalProps } from '../../types/common';

import styles from './MainModal.module.css';

const MainModal = ({
  isOpen,
  close,
  children,
  position = 'center',
  size = 'lg',
  backdropType = 'opaque',
  shadow = true,
  animation = true,
}: StrictPropsWithChildren<ModalProps>) => {
  const modalRef = useRef(null);

  useEscapeKey(isOpen, close);
  usePreventScroll(isOpen);
  useFocusTrap(isOpen, modalRef);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={`${styles.modalLayout} ${styles[position]} ${animation ? styles.animation : ''}`}>
      <div onClick={close} className={`${styles.modalBackdrop} ${styles[backdropType]}`} />
      <div
        className={`${styles.modalContainer} ${styles[size]} ${styles[position]} ${shadow ? styles.shadow : ''} ${animation ? styles.animation : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainModal;
