import * as React from 'react';

export interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

export interface MessageProps {
  message: string;
}

export interface ModalProps {
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;

  alert?: MessageProps;
  confirm?: MessageProps;
  prompt?: boolean | MessageProps;

  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (value?: string) => void;
}

export declare const Modal: React.FC<ModalProps>;
