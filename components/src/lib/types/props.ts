export type Position = 'center' | 'bottom';
export type Direction = 'row' | 'column';

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface OverlayProps extends BaseProps {
  closeOnClick?: boolean;
}

export interface ModalContentProps extends BaseProps {
  hasTopCloseButton?: boolean;
  position?: Position;
}

export interface AlertContentProps extends ModalContentProps {
  onAlert?: () => void;
  alertButtonText?: string;
  alertButtonColor?: string;
  alertButtonBackgroundColor?: string;
}

export interface ConfirmContentProps extends ModalContentProps {
  confirmButton?: ButtonProps;
  cancelButton?: ButtonProps;
}

export interface ButtonProps {
  onClick?: () => void;
  text?: string;
  color?: string;
  backgroundColor?: string;
}

export interface ConfirmButtonProps {
  onConfirm?: () => void;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  confirmButtonBackgroundColor?: string;
}

export interface CancelButtonProps {
  onCancel?: () => void;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  cancelButtonBackgroundColor?: string;
}

export interface ButtonContainerProps extends BaseProps {
  direction?: Direction;
}
