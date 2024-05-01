import React, { MouseEvent } from 'react';
import { CLOSE_BUTTON } from '../assets/images/index';
import styled from 'styled-components';

interface ContainerProps {
  $position: string;
  $transform: string;
}

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: ${(props) => props.$position};
  left: 50%;
  transform: ${(props) => props.$transform};
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
  font-weight: bold;
  font-size: 1.8rem;
`;

const CloseIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const CloseButton = styled.button`
  height: 2.75rem;
  background-color: transparent;
  color: #8b95a1;
  font-weight: bold;
  font-size: 1.5rem;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  padding: 0.8rem auto;
  box-sizing: border-box;
`;

/**
 * props
 * 모달 위치, 제목, 닫기 버튼 종류
 */

interface ModalProps {
  toggleModal: () => void;
  position: 'center' | 'bottom';
  title: string;
  closeOption: 'icon' | 'button';
  children: React.ReactNode;
}

function Modal({
  toggleModal,
  position,
  title,
  closeOption,
  children,
}: ModalProps) {
  const handleCloseButton = () => {
    toggleModal();
  };

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      handleCloseButton();
    }
  };

  const calculateModalPosition = () => {
    if (position === 'center') {
      return '50%';
    } else if (position === 'bottom') {
      return '100%';
    } else {
      return '0';
    }
  };

  const calculateModalTransform = () => {
    if (position === 'center') {
      return 'translate(-50%, -50%)';
    } else if (position === 'bottom') {
      return 'translate(-50%, -100%)';
    } else {
      return 'translate(-50%, 0)';
    }
  };

  return (
    <BackDrop onClick={(e) => handleBackdropClick(e)}>
      <Container
        $position={calculateModalPosition()}
        $transform={calculateModalTransform()}
      >
        <Header>
          <Title>{title}</Title>
          {closeOption === 'icon' && (
            <CloseIcon onClick={handleCloseButton} src={CLOSE_BUTTON} />
          )}
        </Header>
        <div>{children}</div>
        {closeOption === 'button' && (
          <CloseButton onClick={handleCloseButton}>닫기</CloseButton>
        )}
      </Container>
    </BackDrop>
  );
}

export default Modal;
