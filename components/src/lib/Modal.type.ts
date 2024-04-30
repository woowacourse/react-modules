import { ButtonHTMLAttributes } from 'react';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  text: string;
}

export interface ModalProps {
  position: 'center' | 'bottom';
  size: 'sm' | 'md' | 'lg';
  isOpen: boolean;
  close: () => void;
}

export interface ModalCloseButtonProps {
  close: () => void;
}
