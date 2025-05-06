export interface ModalProps {
  isOpen?: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
  title: string;
  position?: 'center' | 'bottom';
  type?: 'alert' | 'confirm' | 'prompt';
  size?: 'small' | 'medium' | 'large';
}
