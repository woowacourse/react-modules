export interface ModalPropsType {
  children?: React.ReactNode;
  isOpen: boolean;
  position?: 'center' | 'bottom';
  title: string;
  showCloseButton?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClose: () => void;
  closeOnBackdropClick?: boolean;
}
