import { ModalProvider } from './ModalContext';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  width: 'small' | 'medium' | 'large';
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, position, width, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const hasOverlay = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === Modal.Overlay
    );
    const hasContainer = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === Modal.Container
    );

    if (!hasOverlay || !hasContainer) {
      console.error('Modal은 <Modal.Overlay> <Modal.Container> components 필수로 포함해야합니다');
    }
  }, [isOpen, children]);

  if (!isOpen) return null;

  return (
    <ModalProvider isOpen={isOpen} position={position} width={width} onClose={onClose}>
      {children}
    </ModalProvider>
  );
}

Modal.Overlay = function Overlay({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

Modal.Container = function Container({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

export default Modal;
