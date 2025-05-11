import React, { useEffect } from 'react';
import { Layout, Overlay, ModalContainer, TitleContainer, Title, CloseButton, CloseIcon } from './Modal.styles';

export type ModalPosition = 'center' | 'bottom';

export type ModalContainerProps = {
  width?: string;
  height?: string;
  position: ModalPosition;
  size?: 'sm' | 'md' | 'lg';
};

type ModalProps = ModalContainerProps & {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal({ width = '304px', height = '216px', position, title, onClose, children, size = 'md' }: ModalProps) {
  const customWidth = position === 'center' ? width : '100%';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOverlay = () => {
    onClose();
  };

  return (
    <Layout onClick={handleClickOverlay}>
      <Overlay />
      <ModalContainer
        width={customWidth}
        height={height}
        position={position}
        size={size}
        onClick={(e) => e.stopPropagation()}
      >
        <TitleContainer>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </TitleContainer>
        {children}
      </ModalContainer>
    </Layout>
  );
}

export default Modal;

