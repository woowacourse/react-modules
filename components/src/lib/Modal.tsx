import { useEffect } from 'react';
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  CloseButton,
} from './Modal.styles.ts';
interface ModalPropsType {
  children: React.ReactNode;
  isOpen: boolean;
  position: 'center' | 'bottom';
  title: string;
  showCloseButton: boolean;
  size: 'small' | 'medium' | 'large';
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({
  children,
  isOpen,
  position,
  title,
  showCloseButton,
  size = 'small',
  onClose,
  onBackdropClick,
}: ModalPropsType) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <ModalBackground
        isOpen={isOpen}
        position={position}
        onClick={(e) => onBackdropClick(e)}
      >
        <ModalContainer position={position} size={size}>
          <ModalHeader>
            <h2>{title}</h2>
            <CloseButton showCloseButton={showCloseButton} onClick={onClose}>
              X
            </CloseButton>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default Modal;
