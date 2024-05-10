import React from 'react';
import './reset.css';

import styled from 'styled-components';
import { Modal, useModal } from './lib/index';

const ButtonContainer = styled.div`
  margin-bottom: 5%;
`;

function App() {
  const { isOpen: isAlertOpen, toggleModal: toggleAlertModal } = useModal();
  const { isOpen: isConfirmOpen, toggleModal: toggleConfirmModal } = useModal();
  const { isOpen: isPromptOpen, toggleModal: togglePromptModal } = useModal();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('onChangeInput 실행');
    console.log(value);
  };

  const onConfirm = () => {
    console.log('onConfirm 실행');
  };

  return (
    <>
      <ButtonContainer>
        <button onClick={() => toggleAlertModal()}>Alert!</button>
        <button onClick={() => toggleConfirmModal()}>Confirm!</button>
        <button onClick={() => togglePromptModal()}>Prompt!</button>
      </ButtonContainer>

      {/* alert modal */}
      <Modal
        toggleModal={toggleAlertModal}
        position="center"
        isOpen={isAlertOpen}
        size="small"
      >
        <Modal.Header
          title="아이디를 입력해 주세요."
          closeOption="icon"
          handleCloseButton={toggleAlertModal}
        />
        <Modal.SubTitle subTitle="아이디는 필수로 입력해야 합니다." />
        <Modal.Button category="alert" handleCloseButton={toggleAlertModal} />
      </Modal>

      {/* confirm modal */}
      <Modal
        toggleModal={toggleConfirmModal}
        position="center"
        isOpen={isConfirmOpen}
        size="medium"
      >
        <Modal.Header
          title="카드를 삭제하시겠습니까?"
          closeOption="icon"
          handleCloseButton={toggleConfirmModal}
        />
        <Modal.SubTitle subTitle="삭제하면 복구하실 수 없습니다." />
        <Modal.Button
          category="confirm"
          handleCloseButton={toggleConfirmModal}
          onConfirm={onConfirm}
        />
      </Modal>

      {/* prompt modal */}
      <Modal
        toggleModal={togglePromptModal}
        position="center"
        isOpen={isPromptOpen}
        size="large"
      >
        <Modal.Header
          title="쿠폰 번호를 입력해 주세요."
          closeOption="icon"
          handleCloseButton={togglePromptModal}
        />
        <Modal.Input onChangeInput={onChangeInput} />
        <Modal.Button
          category="prompt"
          handleCloseButton={togglePromptModal}
          onConfirm={onConfirm}
        />
      </Modal>
    </>
  );
}

export default App;
