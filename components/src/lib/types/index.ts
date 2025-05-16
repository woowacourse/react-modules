import type { ComponentProps, ReactNode } from 'react';

export type ModalPosition = 'center' | 'bottom';
export type ModalSize = 'small' | 'medium' | 'large';

export interface ModalBaseProps {
  position?: ModalPosition;
  size?: ModalSize;
  onClose: () => void;
}

export interface ModalContentProps extends ComponentProps<'div'> {
  children: ReactNode;
  position?: ModalPosition;
  size?: ModalSize;
  zIndex?: number;
}

export interface ModalButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}
export interface ModalCloseButtonProps extends Omit<ModalButtonProps, 'onClick'> {}

export interface AlertModalProps extends ModalBaseProps {
  title: string;
  description: string;
  onConfirmButtonClick: () => void;
}
export interface ConfirmModalProps extends AlertModalProps {}

export interface PromptModalProps extends ModalBaseProps {
  title: string;
  placeholder?: string;
  onPromptButtonClick: (inputValue: string) => void;
}

export interface ModalMainProps {
  onClose: () => void;
  children: ReactNode;
}

export interface ModalBackDropProps extends ComponentProps<'div'> {
  backgroundColor?: string;
  zIndex?: number;
}

export interface ModalTitleProps extends ComponentProps<'h2'> {
  children: ReactNode;
}
