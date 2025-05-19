import { ReactNode } from 'react';
import { ModalProps } from './Modal.type';

export interface AlertModalProps extends Omit<ModalProps, 'children'> {
  onConfirm: () => void;
  content: ReactNode;
  confirmText?: string;
  title?: string;
}
