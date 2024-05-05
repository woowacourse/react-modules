import React, { MouseEvent } from 'react';
import { CLOSE_BUTTON } from '../assets/images/index';

import styled from 'styled-components';

type ModalPosition = 'center' | 'bottom';

interface ModalProps {
  closeModal: () => void;
  position: ModalPosition;
  title: string;
  closeOption: 'icon' | 'button';
  children: React.ReactNode;
}

function Modal({
  closeModal,
  position,
  title,
  closeOption,
  children,
}: ModalProps) {
  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <BackDrop onClick={handleBackdropClick}>
      <Container position={position}>
        <Header>
          <Title>{title}</Title>
          {closeOption === 'icon' && (
            <CloseIcon onClick={closeModal}>
              <img src={CLOSE_BUTTON} />
            </CloseIcon>
          )}
        </Header>
        <div>{children}</div>
        {closeOption === 'button' && (
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        )}
      </Container>
    </BackDrop>
  );
}

export default Modal;

interface ContainerStyleProps {
  position: ModalPosition;
}

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5px);
`;

const Container = styled.div<ContainerStyleProps>`
  position: fixed;
  top: ${({ position }) => (position === 'center' ? '50%' : '100%')};
  left: 50%;
  transform: ${({ position }) =>
    position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)'};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 3.2rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const CloseIcon = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const CloseButton = styled.button`
  height: 4.4rem;
  padding: 0.8rem auto;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  background-color: transparent;
  color: #8b95a1;
  font-size: 1.5rem;
  font-weight: bold;
`;
