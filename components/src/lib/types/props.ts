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

export interface ButtonContainerProps extends BaseProps {
  direction?: Direction;
}
