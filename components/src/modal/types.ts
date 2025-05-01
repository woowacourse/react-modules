export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'center' | 'bottom';
}
