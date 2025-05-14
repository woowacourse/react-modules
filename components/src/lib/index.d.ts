import * as React from 'react';

export interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

type ModalType = 'alert' | 'confirm' | 'prompt';

export interface ModalProps {
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
  type?: ModalType;
  message?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (value?: string) => void;
}

export declare const Modal: React.FC<ModalProps>;
