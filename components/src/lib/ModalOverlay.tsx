import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useModalContext } from './ModalContext';

export default function ModalOverlay({ children }: { children: React.ReactNode }) {
  const { isOpen, onClose } = useModalContext();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      onClose();
    }
  };

  return createPortal(<StyledModalOverlay onClick={handleOverlayClick}>{children}</StyledModalOverlay>, document.body);
}

const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
