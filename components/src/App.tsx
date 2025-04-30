import React from 'react';
import { Modal } from './lib';
import { ModalBackdrop, Container, Wrapper } from './lib';
import './App.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ModalBackdrop />
      <Container>
        <Wrapper>
          <Modal modalType="center" titleText="카드사 선택" closeType="top">
            카드사 선택
          </Modal>
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
