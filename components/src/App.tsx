import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './lib/Modal';
import xButton from './lib/asset/xButton.svg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = (e: React.MouseEvent) => {
    setIsModalOpen(false);
  };
  const handleConfirm = (e: React.MouseEvent) => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>열기</button>
      {isModalOpen && (
        <Modal
          position='center'
          size='small'
          onDimmedClick={handleClose}
        >
          <Modal.Header>
            <Modal.Title title='예시' />
            <Modal.Button
              style={{
                backgroundColor: 'white',
                fontColor: '#8B95A1',
              }}
              onClick={handleClose}
            >
              <img src={xButton}></img>
            </Modal.Button>
          </Modal.Header>
          <Modal.Body>
            <div>예시입니다.</div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button onClick={handleClose}>취소</Modal.Button>
            <Modal.Button onClick={handleClose}>확인</Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export const Temp = styled.div`
  width: 400px;
  height: 200px;
  background-color: red;
`;

export const Wide = styled.div`
  width: 400px;
  height: 500vh;
  background-color: red;
`;

export default App;
