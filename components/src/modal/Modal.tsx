import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog className={styles.modal} ref={modalRef}>
      <button onClick={onClose}>닫기</button>
    </dialog>
  );
}

export default Modal;
