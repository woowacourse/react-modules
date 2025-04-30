import React, { useEffect } from 'react';
import { Layout, Overlay, ModalContainer, TitleContainer, Title, CloseButton, CloseButtonImage } from './Modal.styles';

export type ModalPosition = 'center' | 'bottom';

export type ModalContainerProps = {
  width?: string;
  height?: string;
  position: ModalPosition;
};

type ModalProps = ModalContainerProps & {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal({ width = '304px', height = '216px', position, title, onClose, children }: ModalProps) {
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

  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Layout onClick={handleClickOverlay}>
      <Overlay onClick={onClose} />
      <ModalContainer width={customWidth} height={height} position={position}>
        <TitleContainer>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <CloseButtonImage src="/close.svg" alt="close" />
          </CloseButton>
        </TitleContainer>
        {children}
      </ModalContainer>
    </Layout>
  );
}

export default Modal;
