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
          buttonLayout='column'
          position='bottom'
          title='제목입니다.'
          isXButton={true}
          closeButtonContent='닫기'
          confirmButtonContent='확인'
          handleConfirm={handleConfirm}
          handleClose={handleClose}
        >
          {
            <Temp>
              <input></input>
            </Temp>
          }
        </Modal>
      )}
    </>
  );
}

export const Temp = styled.div`
  height: 50vh;
  background-color: red;
`;

export const Wide = styled.div`
  width: 500vw;
  height: 500vh;
  background-color: red;
`;

export default App;
