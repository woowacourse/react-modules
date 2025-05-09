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

export type Position = 'center' | 'bottom';

export interface ModalContentProps extends BaseProps {
  hasTopCloseButton?: boolean;
  position?: Position;
}
