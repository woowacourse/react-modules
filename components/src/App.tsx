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

  const { isOpen: isSmallModalOpen, toggleModal: toggleSmallModal } =
    useModal();
  const { isOpen: isMediumModalOpen, toggleModal: toggleMediumModal } =
    useModal();
  const { isOpen: isBigModalOpen, toggleModal: toggleBigModal } = useModal();

  return (
    <>
      <ButtonContainer>
        <button onClick={() => toggleAlertModal()}>Alert!</button>
        <button onClick={() => toggleConfirmModal()}>Confirm!</button>
        <button onClick={() => togglePromptModal()}>Prompt!</button>
      </ButtonContainer>
      <ButtonContainer>
        <button onClick={() => toggleSmallModal()}>Small Modal Button</button>
        <button onClick={() => toggleMediumModal()}>Medium Modal Button</button>
        <button onClick={() => toggleBigModal()}>Large Modal Button</button>
      </ButtonContainer>
      <Modal
        toggleModal={toggleAlertModal}
        position="center"
        category="alert"
        isOpen={isAlertOpen}
      >
        <Modal.Title title="아이디를 입력해 주세요." />
        <Modal.SubTitle subTitle="아이디는 필수로 입력해야 합니다." />
        <Modal.Button />
      </Modal>
    </>
  );
}

export default App;
