import { css } from '@emotion/css';
import { ReactNode } from 'react';

type Position = 'center' | 'bottom';

interface ModalProps {
  position: Position;
  content: ReactNode;
  onOpen: () => void;
  onClose: () => void;
  title?: string;
  showCloseButton?: boolean;
  actions?: ReactNode;
  onConfirm?: () => void;
}

const Modal = ({
  position,
  content,
  onOpen,
  onClose,
  showCloseButton = true,
  actions,
  title = '',
  onConfirm,
}: ModalProps) => {
  return (
    <div className={ModalBackdrop}>
      <div className={ModalFrame(position)}>
        <button className={ModalCloseButton}>&times;</button>
        <h2>Modal Header</h2>
        <p>This is a simple modal.</p>
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
`;

const ModalCloseButton = css`
  all: unset;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;
