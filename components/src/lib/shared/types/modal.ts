export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  type?: 'alert' | 'confirm' | 'prompt' | 'custom';
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: (value: string) => void;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'center' | 'bottom';
}
