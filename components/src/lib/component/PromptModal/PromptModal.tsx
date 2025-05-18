import { useState } from 'react';
import Modal from '../Modal';
import ModalInput from '../Input/input';
import Button from '../Button/Button';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placeholder?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: (value: string) => void;
}

export default function PromptModal({ isOpen, onClose, title, placeholder = '', cancelText = '취소', confirmText = '확인', onConfirm }: PromptModalProps) {
  const [value, setValue] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size="small">
      <Modal.BackDrop style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        {Boolean(title) && <Modal.Title style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>{title}</Modal.Title>}
        <ModalInput autoFocus placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onConfirm?.(value);
              setValue('');
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
