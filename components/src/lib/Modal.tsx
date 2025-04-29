import React, { useEffect } from 'react';
import s from './Modal.module.css';

type ModalStyle = 'center' | 'bottom';

type ModalProps = {
  width?: string;
  height?: string;
  position: ModalStyle;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal({ width = '304px', height = '216px', position, title, onClose, children }: ModalProps) {
  const customWidth = position === 'center' ? width : '100%';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.layout} onClick={handleClickOverlay}>
      <div className={s.overlay} onClick={onClose} />
      <div className={[s.modalContainer, s[position]].join(' ')} style={{ width: customWidth, height: height }}>
        <div className={s.titleContainer}>
          <h3 className={s.title}>{title}</h3>
          <button className={s.closeButton} onClick={onClose}>
            <img className={s.closeButtonImage} src="images/close.png" alt="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
