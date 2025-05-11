import { ModalProvider } from './ModalContext';

interface ModalProps {
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  width: 'small' | 'medium' | 'large';
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, position, width, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalProvider isOpen={isOpen} position={position} width={width} onClose={onClose}>
      {children}
    </ModalProvider>
  );
}

export default Modal;
