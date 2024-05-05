import { useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';

import { BottomModal, Modal } from './lib';
import { usePosition } from './lib/hooks/';

const ContentsInner = styled.div<{ backgroundColor?: string; width?: string; height?: string }>`
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius: 0.625rem;
  width: ${({ width }) => width || 'fit-contents'};
`;

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);
  const [openToastModal, setOpenToastModal] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const { position } = usePosition(positionRef.current);

  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}> center modal open</button>
      <button onClick={() => setOpenBottomModal(true)}> bottom modal open</button>
      <button onClick={() => setOpenToastModal(true)}> toast modal open</button>
      <Modal type="bottom" openModal={openBottomModal} setOpenModal={setOpenBottomModal}>
        <ContentsInner>
          <h1>Bottom Modal</h1>
          <BottomModal.button isCloseModal={true}>close</BottomModal.button>
        </ContentsInner>
      </Modal>
      <Modal type="center" openModal={openCenterModal} setOpenModal={setOpenCenterModal}>
        <ContentsInner>
          <h1>Center Modal</h1>
          <Modal.button isCloseModal={true}>close button</Modal.button>
        </ContentsInner>
      </Modal>
      <Modal
        type="toast"
        openModal={openToastModal}
        setOpenModal={setOpenToastModal}
        position={position}
        isNeedAnimation={true}
      >
        <ContentsInner backgroundColor=" rgb(248, 255, 188)" width="300px">
          <h3>toast modal</h3>
        </ContentsInner>
      </Modal>
      <div ref={positionRef} id="toast-modal-position">
        toast modal position
      </div>
    </>
  );
}

export default App;
