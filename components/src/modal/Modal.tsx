import { ReactNode, useEffect, useRef } from 'react';
import styles from './Modal.module.css';

function Modal({
  isOpen,
  onClose,
  contents,
  position = 'center',
}: {
  isOpen: boolean;
  onClose: () => void;
  contents: ReactNode;
  position?: 'center' | 'bottom';
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <dialog
      onClose={onClose}
      className={`${styles.modal} ${position === 'bottom' ? styles.modalBottom : ''}`}
      ref={modalRef}
    >
      {contents}
      <button onClick={onClose}>닫기</button>
    </dialog>
  );
}

export default Modal;
