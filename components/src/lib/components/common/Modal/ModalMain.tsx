import React, { MouseEvent } from 'react';
import { StyleSize, StylePosition } from '../../types';
import styled from 'styled-components';
import { MODAL_SIZE } from '../../constants/styles';

export interface ModalProps {
  $size?: StyleSize;
  $position?: StylePosition;
  children?: React.ReactNode;
  onCloseModal: () => void;
}

function ModalMain({
  $size = 'medium',
  $position = 'center',
  children,
  onCloseModal,
}: ModalProps) {
  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <BackDrop onClick={handleBackdropClick}>
      <Container $size={$size} $position={$position}>
        {children}
      </Container>
    </BackDrop>
  );
}

export default ModalMain;

interface ContainerStyleProps {
  $size: StyleSize;
  $position: StylePosition;
}

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gray-color-300);
  backdrop-filter: blur(5px);
`;

const Container = styled.div<ContainerStyleProps>`
  position: fixed;
  top: ${({ $position }) => ($position === 'center' ? '50%' : '100%')};
  left: 50%;
  transform: ${({ $position }) =>
    $position === 'center'
      ? 'translate(-50%, -50%)'
      : 'translate(-50%, -100%)'};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: ${({ $size }) => MODAL_SIZE[$size] || MODAL_SIZE['medium']};
  padding: 2.4rem 3.2rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  background-color: var(--white-color);
`;
