import { ReactNode } from 'react';

export interface ModalProps {
  modalType: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
  titleText?: string;
  closeType: 'top' | 'bottom';
  children?: ReactNode;
  onClose?: () => void;
}

export interface ModalChildrenProps {
  children: ReactNode;
}

export interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
  onClose?: () => void;
}

export interface ModalTypeProps {
  modalType: 'center' | 'bottom';
}

export interface ModalTypeAndSizeProps {
  modalType: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
}
