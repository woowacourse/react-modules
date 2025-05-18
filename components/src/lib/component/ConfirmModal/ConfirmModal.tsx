import { ReactNode } from 'react';
import Modal from '../Modal';
import { ModalSizeType } from '../../type/Modal.types';
import Button from '../Button/Button';

interface ConfirmModalProps {
  size?: ModalSizeType;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  size = 'medium',
  isOpen,
  onClose,
  title,
  content,
  cancelText = '취소',
  confirmText = '확인',
  onConfirm
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size={size}>
      <Modal.BackDrop style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        {Boolean(title) && <Modal.Title style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>{title}</Modal.Title>}
        {content}
        <Modal.Footer>
          <Button variant="secondary" autoFocus onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onConfirm();
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
