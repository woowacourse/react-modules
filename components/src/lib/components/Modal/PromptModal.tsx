import { useEffect, useRef, useState } from 'react';
import { ModalProps } from '../../Modal.type';
import Modal from './Modal';
import { css } from '@emotion/css';
import Button from '../common/Button';

function PromptModal({ title, position, isOpen, onClose, onAfterOpen, size, onConfirm }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    inputRef.current?.focus();
    if (onAfterOpen) onAfterOpen();
  }, [onAfterOpen]);

  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} onAfterOpen={onAfterOpen} size={size} title={title}>
      <Modal.Header title={title} showCloseButton />
      <Modal.Body>
        <label htmlFor="prompt-input">입력 내용</label>
        <input
          type="text"
          ref={inputRef}
          className={Input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="입력 내용"
        />
      </Modal.Body>
      <Modal.Actions>
        <Button variant="default" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={() => onConfirm?.(value)}>
          확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default PromptModal;

const Input = css`
  width: 100%;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
`;
