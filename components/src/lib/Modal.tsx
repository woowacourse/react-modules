import { css } from '@emotion/css';
import { Children, MouseEvent, useEffect } from 'react';
import { ModalProps, Position } from './Modal.type';

const Modal = ({ children, position, isOpen, onAfterOpen, onClose, title, showCloseButton = true }: ModalProps) => {
  const [content, actions] = Children.toArray(children);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={ModalBackdrop} onClick={handleBackdropClick} data-testid="modal-backdrop">
      <div className={ModalFrame(position)} data-testid="modal">
        <section className={ModalHeader}>
          {title && <h2>{title}</h2>}
          {showCloseButton && (
            <button className={ModalCloseButton} onClick={onClose}>
              X
            </button>
          )}
        </section>
        <section>{content}</section>
        <section className={ButtonBar}>{actions}</section>
      </div>
    </div>
  );
};

export default Modal;

const ModalBackdrop = css`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
`;

const ModalFrame = (position: Position) => css`
  background-color: white;
  padding: 20px;
  width: ${position === 'center' ? '100%' : '100dvw'};
  min-width: ${position === 'center' ? '300px' : null};
  max-width: ${position === 'center' ? '80dvw' : null};
  border-radius: ${position === 'center' ? '8px' : '8px 8px 0 0'};
  position: ${position === 'bottom' ? 'absolute' : null};
  bottom: ${position === 'bottom' ? '0' : null};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ModalHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalCloseButton = css`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;

const ButtonBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
