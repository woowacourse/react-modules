import React, { useState } from "react";
import styled from "styled-components";
// import { Modal } from "hash-modal";
import { AlertModal, ConfirmModal, Modal, PromptModal } from "./lib/index";

function App() {
  const [defaultModalOpen, setDefaultModalOpen] = useState<boolean>(false);
  const [nameInputValue, setNameInputValue] = useState<string>("");
  const [onChangeInput, setOnChangeInput] = useState<string>("");

  const setConfirm = () => {
    alert(`${nameInputValue}님, 접수 완료 되었습니다.`);
    setDefaultModalOpen(false);
    setNameInputValue("");
  };

  const alertInput = () => {
    alert(onChangeInput);
  };

  return (
    <>
      <button onClick={() => setDefaultModalOpen(true)}>기본 모달 버튼</button>

      {defaultModalOpen && (
        <Modal
          setModalClose={() => setDefaultModalOpen(false)}
          backgroundColor="pink"
        >
          <Modal.Header
            title="◻◻ 병원 접수 신청"
            setModalClose={() => setDefaultModalOpen(false)}
          ></Modal.Header>

          <Modal.Content>
            <ContentDefaultTemplate>
              <label htmlFor="name-input">이름을 입력해주세요.</label>
              <input
                id="name-input"
                value={nameInputValue}
                onChange={(e) => setNameInputValue(e.target.value)}
              ></input>
            </ContentDefaultTemplate>
          </Modal.Content>

          <Modal.Footer buttonLayout="column">
            <Modal.Button onClick={setConfirm} buttonSize="MAX"></Modal.Button>
            <Modal.Button
              onClick={() => setDefaultModalOpen(false)}
              buttonSize="MAX"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            ></Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
      <ConfirmModal
        title="카드를 삭제하시겠습니까?"
        content="삭제하면 복구하실 수 없습니다"
      />
      <AlertModal
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
      />
      <PromptModal
        title="쿠폰 번호를 입력해 주세요."
        inputHandler={() => alertInput()}
      >
        <InputContainer>
          <input
            onChange={(e) => {
              setOnChangeInput(e.target.value);
            }}
          ></input>
        </InputContainer>
      </PromptModal>
    </>
  );
}

const InputContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 90%;
    height: 40%;
  }
`;

export const ContentDefaultTemplate = styled.div`
  height: 10rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  #name-input {
    width: 70%;
    height: 1.875rem;
  }
`;

export const ContentWideTemplate = styled.div`
  width: 500vw;
  height: 500vh;
  background-color: #ffc7c7;
`;

export default App;
