export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export type Position = 'center' | 'bottom';

export interface ModalContentProps extends BaseProps {
  hasTopCloseButton?: boolean;
  position?: Position;
}
