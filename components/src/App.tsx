import { useState } from 'react';
import './App.css';
import BasicCenterModal from './lib/Modal/BasicCenterModal/index';
import BasicBottomModal from './lib/Modal/BasicBottomModal/index';
import Modal from './lib/Modal';

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}>basic center open</button>
      <button onClick={() => setOpenBottomModal(true)}>basic bottom open</button>
      <BasicCenterModal
        closeButtonType="icon"
        isOpen={openCenterModal}
        modalTitle="basic center"
        closeModal={() => setOpenCenterModal(false)}
      >
        <div>basic center modal</div>
      </BasicCenterModal>
      <BasicBottomModal
        closeButtonType="box"
        isOpen={openBottomModal}
        modalTitle="basic bottom"
        closeModal={() => setOpenBottomModal(false)}
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
