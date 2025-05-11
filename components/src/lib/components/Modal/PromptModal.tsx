import { useEffect, useRef } from 'react';
import { ModalProps } from '../../Modal.type';
import ModalBackdrop from '../common/ModalBackdrop';
import ModalHeader from '../common/ModalHeader';
import useModalKeyboard from '../../hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from '../../ModalContext';
import ConfirmButton from '../common/ConfirmButton';
import { ButtonBar, ModalFrame } from '../common/cssStyle';
import CancelButton from '../common/CancelButton';
import { css } from '@emotion/css';

const PromptModal = ({ children, position, isOpen, onClose, onAfterOpen, size, onConfirm }: ModalProps) => {
  if (!isOpen) return null;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    if (onAfterOpen) onAfterOpen();
  }, [onAfterOpen]);

  useModalKeyboard(onClose);

  return (
    <ModalProvider onClose={onClose}>
      <ModalBackdrop>
        <div className={ModalFrame(position, size)} data-testid="modal">
          {children}
          <input type="text" className={Input} ref={inputRef} />
          <div className={ButtonBar}>
            <CancelButton />
            <ConfirmButton onClick={onConfirm} />
          </div>
        </div>
      </ModalBackdrop>
    </ModalProvider>
  );
};

PromptModal.Header = function Header({ title, showCloseButton = false }: { title: string; showCloseButton?: boolean }) {
  const context = useModalContext();
  if (!context) throw new Error('Modal.Header must be used within a Modal');
  return <ModalHeader title={title} showCloseButton={showCloseButton} onClose={context.onClose} />;
};

export default PromptModal;

const Input = css`
  width: 100%;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
`;
