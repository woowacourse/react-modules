import { useRef, useState } from 'react';
import './App.css';

import { BottomModal, CenterModal, usePosition } from './lib';
import ModalContainer from './lib/components/ModalContainer';
import ToastModal from './lib/components/ToastModal';

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
      <BottomModal openModal={openBottomModal} setOpenModal={setOpenBottomModal}>
        <h1>Bottom Modal</h1>
        <BottomModal.button isCloseModal={true}>close</BottomModal.button>
      </BottomModal>
      <CenterModal openModal={openCenterModal} setOpenModal={setOpenCenterModal}>
        <h1>Center Modal</h1>
        <ModalContainer.button isCloseModal={true}>close button</ModalContainer.button>
      </CenterModal>

      <ToastModal
        openModal={openToastModal}
        setOpenModal={setOpenToastModal}
        position={position}
        isNeedAnimation={true}
        backgroundColor={{ modal: 'rgb(248, 255, 188)' }}
        contentsPadding="1rem 0.875rem"
      >
        <div style={{ width: '300px', height: '2rem', textAlign: 'center' }}>
          <h2>toast modal</h2>
        </div>
      </ToastModal>
      <div ref={positionRef} id="toast-modal-position">
        toast modal position
      </div>
    </>
  );
}

export default App;
