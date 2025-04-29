import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalOverlayProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function ModalOverlay({ isOpen, children, onClose }: ModalOverlayProps) {
  return createPortal(
    <StyledModalOverlay isOpen={isOpen} onClick={onClose}>
      {children}
    </StyledModalOverlay>,
    document.body
  );
}

export default ModalOverlay;

type ModalOverlayStyledProps = Pick<ModalOverlayProps, 'isOpen'>;

const StyledModalOverlay = styled.div<ModalOverlayStyledProps>`
  background-color: rgba(0, 0, 0, 0.35);
  position: relative;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0px;
  left: 0px;
`;
