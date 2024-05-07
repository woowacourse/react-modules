import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './lib/Modal';

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
      <button onClick={() => setIsModalOpen(true)}></button>
      {isModalOpen && (
        <Modal
          position='center'
          size='large'
          title='제목입니다.'
          // isXButton={true}
          // closeButtonContent='닫기'
          confirmButtonContent='확인'
          handleConfirm={handleConfirm}
          // handleClose={handleClose}
        >
          {<Temp></Temp>}
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
