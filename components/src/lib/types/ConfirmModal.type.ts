import { ReactNode } from 'react';
import { ModalProps } from './Modal.type';

export interface ConfirmModalProps extends Omit<ModalProps, 'children'> {
  onConfirm: () => void;
  onCancel: () => void;
  content: ReactNode;
  confirmText?: string;
  cancelText?: string;
  title?: string;
}
