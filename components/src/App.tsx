import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import { AlertModal, BottomModal, CenterModal, ConfirmModal, ToastModal, usePosition } from './lib';
import ModalContainer from './lib/components/ModalContainer';
import { BASIC_BORDER_RADIUS } from './lib/constants/modal';

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ModalContents = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  p {
    margin-bottom: 0.625rem;
  }
`;

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);
  const [openToastModal, setOpenToastModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const { position } = usePosition(positionRef.current);

  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}> center modal open</button>
      <button onClick={() => setOpenBottomModal(true)}> bottom modal open</button>
      <button onClick={() => setOpenToastModal(true)}> toast modal open</button>
      <button onClick={() => setOpenAlertModal(true)}> alert modal open</button>
      <button onClick={() => setOpenConfirmModal(true)}> confirm modal open</button>

      <BottomModal openModal={openBottomModal} setOpenModal={setOpenBottomModal}>
        <h1>Bottom Modal</h1>
        <BottomModal.button isCloseModal={true}>close</BottomModal.button>
      </BottomModal>

      <CenterModal openModal={openCenterModal} setOpenModal={setOpenCenterModal}>
        <h1>Center Modal</h1>
        <ModalContainer.Button isCloseModal={true}>close button</ModalContainer.Button>
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

      <AlertModal
        openModal={openAlertModal}
        setOpenModal={setOpenAlertModal}
        title={<ModalTitle>alert modal</ModalTitle>}
        contents={
          <ModalContents>
            <p>open</p>
            <p>alert modal</p>
          </ModalContents>
        }
        buttonContainerJustifyContent="right"
        buttonStyle={{ backgroundColor: '#111111ed', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS }}
        buttonContents="확인"
      />

      <ConfirmModal
        openModal={openConfirmModal}
        setOpenModal={setOpenConfirmModal}
        title={<ModalTitle>alert modal</ModalTitle>}
        contents={
          <ModalContents>
            <p>open</p>
            <p>alert modal</p>
          </ModalContents>
        }
        buttonContainerJustifyContent="space-between"
        confirmButton={{
          contents: '확인',
          style: { backgroundColor: 'black', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS },
          extraClickAction: () => alert('확인'),
        }}
        cancelButton={{
          contents: '취소',
          style: { backgroundColor: '#ffff', color: 'black', borderRadius: BASIC_BORDER_RADIUS },
        }}
      />
    </>
  );
}

export default App;
