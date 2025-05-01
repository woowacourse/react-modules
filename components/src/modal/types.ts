export interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: 'center' | 'bottom';
}
