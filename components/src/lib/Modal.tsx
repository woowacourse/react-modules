import React from 'react';
import styled from 'styled-components';
import { CLOSE_BUTTON } from '../assets/images/index';

interface ContainerProps {
  position: string;
}

const Container = styled.div<ContainerProps>`
  background-color: #ffffff;
  position: fixed;

  top: ${(props) => props.position};
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  color: #000000;
`;

/**
 * props
 * 모달 위치, 제목, 닫기 버튼 종류
 */

interface ModalProps {
  toggleModal: () => void;
  position: 'top' | 'center' | 'bottom';
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

  const handlePosition = () => {
    if (position === 'center') {
      const top = '50%';
      return top;
    }
    return '0';
  };

  return (
    <Container position={handlePosition()}>
      <Header>
        <div>{title}</div>
        {closeOption === 'icon' && (
          <img onClick={handleCloseButton} src={CLOSE_BUTTON} />
        )}
      </Header>
      <div>{children}</div>
      {closeOption === 'button' && (
        <button onClick={handleCloseButton}>닫기</button>
      )}
    </Container>
  );
}

export default Modal;
