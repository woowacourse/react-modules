import { css } from '@emotion/css';
import { Children } from 'react';
import { ModalProps, Position } from './Modal.type';
import ModalBackdrop from './components/ModalBackdrop';
import ModalHeader from './components/ModalHeader';
import useModalKeyboard from './hooks/useModalKeyboard';

const Modal = ({ children, position, isOpen, onClose, title = '', showCloseButton = true }: ModalProps) => {
  const [content, actions] = Children.toArray(children);

  if (!isOpen) return null;

  useModalKeyboard(onClose);

  return (
    <ModalBackdrop onClose={onClose}>
      <div className={ModalFrame(position)} data-testid="modal">
        <ModalHeader title={title} showCloseButton={showCloseButton} onClose={onClose} />
        <section>{content}</section>
        <section className={ButtonBar}>{actions}</section>
      </div>
    </ModalBackdrop>
  );
};

export default Modal;

const modalPosionStyle = {
  center: css`
    width: 100%;
    min-width: 300px;
    max-width: 80dvw;
    border-radius: 8px;
  `,
  bottom: css`
    width: 100dvw;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  `,
};

const ModalFrame = (position: Position) => css`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${modalPosionStyle[position]}
`;

const ButtonBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
