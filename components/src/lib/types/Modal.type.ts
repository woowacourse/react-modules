import { ReactNode } from 'react';

export type Position = 'center' | 'bottom';
export type Size = 'small' | 'medium' | 'large' | undefined;

export type ModalContextType = {
  onClose: () => void;
  position: Position;
};

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  position: Position;
  onClose: () => void;
  onAfterOpen?: () => void;
  size?: Size;
}

export interface ModalContentProps {
  children?: ReactNode;
}

export interface ModalFooterProps {
  children?: ReactNode;
}

export interface ModalHeaderProps {
  title?: string;
  showCloseButton?: boolean;
}
