import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalOverlayProps {
  children: React.ReactNode;
}

function ModalOverlay({ children }: ModalOverlayProps) {
  return createPortal(
    <StyledModalOverlay>{children}</StyledModalOverlay>,
    document.body
  );
}

export default ModalOverlay;

const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  position: relative;
  width: 100%;
  height: 100%;
`;
