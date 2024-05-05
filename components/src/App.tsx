import { useRef, useState } from 'react';
import './App.css';

import { usePosition } from './lib/hooks/';
import Modal from './lib/Modal';
import BottomModal from './lib/Modal/BottomModal/index';
import CloseButtonIcon from './lib/Modal/CloseButtonIcon';

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}> center modal open</button>
      <button onClick={() => setOpenBottomModal(true)}> bottom modal open</button>
      <Modal type="bottom" openModal={openBottomModal} setOpenModal={setOpenBottomModal}>
        <BottomModal.button>
          <CloseButtonIcon />
        </BottomModal.button>
        <h1>Bottom Modal</h1>
      </Modal>
      <Modal type="center" openModal={openCenterModal} setOpenModal={setOpenCenterModal}>
        <h1>Center Modal</h1>
        <Modal.button isCloseModal={true}>close button</Modal.button>
      </Modal>
      >
        <Modal.ActionAndCloseButton extraAction={() => alert('extraAction!!')}>
          <div>Action And Close Button</div>
        </Modal.ActionAndCloseButton>
        <div> basic bottom modal</div>
      </BasicBottomModal>
    </>
  );
}

export default App;
