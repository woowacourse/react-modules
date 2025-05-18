import { ReactNode } from 'react';
import Modal from '../Modal';
import { ModalSizeType } from '../../type/Modal.types';
import Button from '../Button/Button';

interface AlertModalProps {
  size?: ModalSizeType;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: ReactNode;
  confirmText?: string;
}

export default function AlertModal({ size = 'medium', isOpen, onClose, title, content, confirmText = '확인' }: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="center" size={size}>
      <Modal.BackDrop style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
      <Modal.Content style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '8px', gap: '12px' }}>
        {Boolean(title) && <Modal.Title style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>{title}</Modal.Title>}
        {content}
        <Modal.Footer>
          <Button variant="primary" autoFocus onClick={onClose}>
            {confirmText}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
