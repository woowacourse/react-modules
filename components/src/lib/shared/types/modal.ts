export type ModalType = 'alert' | 'confirm' | 'prompt' | 'custom';
export type ModalSize = 'small' | 'medium' | 'large';
export type ModalPosition = 'top' | 'center' | 'bottom';

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  type?: ModalType;
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: (value: string) => void;
  children?: React.ReactNode;
  size?: ModalSize;
  position?: ModalPosition;
}
