import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import { AlertModal, BottomModal, CenterModal, ConfirmModal, PromptModal, ToastModal, usePosition } from './lib';
import ModalContainer from './lib/components/ModalContainer';
import { BASIC_BORDER_RADIUS } from './lib/constants/modal';

export const ModalTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const AppModalContents = styled.div`
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
  const [openPromptModal, setOpenPromptModal] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const { position } = usePosition(positionRef.current);

  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}> center modal open</button>
      <button onClick={() => setOpenBottomModal(true)}> bottom modal open</button>
      <button onClick={() => setOpenToastModal(true)}> toast modal open</button>
      <button onClick={() => setOpenAlertModal(true)}> alert modal open</button>
      <button onClick={() => setOpenConfirmModal(true)}> confirm modal open</button>
      <button onClick={() => setOpenPromptModal(true)}> prompt modal open</button>

      <BottomModal openModal={openBottomModal} setOpenModal={setOpenBottomModal}>
        <h1>Bottom Modal</h1>
        <BottomModal.Button isCloseModal={true}>close</BottomModal.Button>
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
          <AppModalContents>
            <p>open</p>
            <p>alert modal</p>
          </AppModalContents>
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
          <AppModalContents>
            <p>open</p>
            <p>confirm modal</p>
          </AppModalContents>
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

      <PromptModal
        openModal={openPromptModal}
        setOpenModal={setOpenPromptModal}
        title={<ModalTitle>alert modal</ModalTitle>}
        label="prompt modal"
        input={{
          attribute: {
            className: 'input test',
          },
          props: {
            onChange: (e) => {
              console.log(e.target.value);
            },
          },
        }}
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
