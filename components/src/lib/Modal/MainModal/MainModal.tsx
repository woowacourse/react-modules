import { createPortal } from 'react-dom';
import { useEscapeKey, useFocusTrap, usePreventScroll } from '../../hooks';
import type { ModalProps } from '../types/Modal.type';
import type { StrictPropsWithChildren } from '../../types/common';
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
  const modalRef = useFocusTrap(isOpen);

  useEscapeKey(isOpen, close);
  usePreventScroll(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div ref={modalRef} className={`${styles.modalLayout} ${styles[position]} ${animation ? styles.animation : ''}`}>
      <div onClick={close} className={`${styles.modalBackdrop} ${styles[backdropType]}`} />
      <div
        className={`${styles.modalContainer} ${styles[size]} ${styles[position]} ${shadow ? styles.shadow : ''} ${animation ? styles.animation : ''}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default MainModal;
