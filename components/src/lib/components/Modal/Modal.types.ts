import { ModalSize } from './hooks/useModalContext';

export type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

export type ModalProps = BaseProps & {
  size?: ModalSize;
};

export type ActionButtonType = 'confirm' | 'cancel' | 'default';
