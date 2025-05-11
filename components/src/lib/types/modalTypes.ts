import { ReactNode } from 'react';

export interface ModalProps {
  modalPosition: 'center' | 'bottom';
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

export interface ModalPositionProps {
  modalPosition: 'center' | 'bottom';
}

export interface ModalPositionAndSizeProps {
  modalPosition: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
}
