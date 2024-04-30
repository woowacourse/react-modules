import React from 'react';
import styled from 'styled-components';
import { CLOSE_BUTTON } from '../assets/images/index';

const Container = styled.div`
  background-color: #ffffff;
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
  position: 'top' | 'center' | 'bottom';
  title: string;
  closeOption: 'icon' | 'button';
  children: React.ReactNode;
}

function Modal({ position, title, closeOption, children }: ModalProps) {
  return (
    <Container>
      <Header>
        <div>{title}</div>
        {closeOption === 'icon' && <img src={CLOSE_BUTTON} />}
      </Header>
      <div>{children}</div>
      {closeOption === 'button' && <button>닫기</button>}
    </Container>
  );
}

export default Modal;
