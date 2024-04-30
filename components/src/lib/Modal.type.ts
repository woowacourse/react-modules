import { ButtonHTMLAttributes } from 'react';

export type Direction = 'row' | 'column';
export type Position = 'center' | 'bottom';
export type BackDropType = 'transparent' | 'blur' | 'default';
export type Size = 'sm' | 'md' | 'lg';
export type ButtonMode = 'primary' | 'secondary';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode?: ButtonMode;
}

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  position?: Position;
  backdropType?: BackDropType;
  size?: Size;
}

export interface ModalCloseButtonProps {
  close: () => void;
}

export interface ModalFooterProps {
  direction?: Direction;
}
