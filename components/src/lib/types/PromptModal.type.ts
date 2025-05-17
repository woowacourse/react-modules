import { ReactNode } from 'react';
import { ModalProps } from './Modal.type';

export interface PromptModalProps extends Omit<ModalProps, 'children'> {
  onConfirm: (inputValue: string) => void;
  onCancel: () => void;
  content: ReactNode;
  confirmText?: string;
  cancelText?: string;
  title?: string;
  placeholder?: string;
}
