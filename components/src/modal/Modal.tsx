import { css } from '@emotion/css';
import { ReactNode, useEffect } from 'react';

type Position = 'center' | 'bottom';

interface ActionDef {
  label: string;
  style: string;
  onClick: () => void;
}

interface ModalProps {
  position: Position;
  content: ReactNode;
  onClose: () => void;
  onOpen?: () => void;
  title?: string;
  showCloseButton?: boolean;
  actions?: ActionDef[];
}

const Modal = ({ position, content, onOpen, onClose, actions, title, showCloseButton = true }: ModalProps) => {
  useEffect(() => {
    if (onOpen) {
      onOpen();
    }
  }, []);

  return (
    <div className={ModalBackdrop}>
      <div className={ModalFrame(position)}>
        <div className={ModalHeader}>
          {title && <h2>{title}</h2>}
          {showCloseButton && (
            <button className={ModalCloseButton} onClick={onClose}>
              X
            </button>
          )}
        </div>
        <div>{content}</div>
        {actions && (
          <div className={ButtonBar}>
            {actions.map(({ label, style, onClick }) => (
              <button key={label} className={style} onClick={onClick}>
                {label}
              </button>
            ))}
          </div>
        )}
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
