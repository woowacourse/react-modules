import React, { useState } from "react";
import styled from "styled-components";
// import { Modal } from "hash-modal";
import { Modal } from "./lib/index";
function App() {
  const [defaultModalOpen, setDefaultModalOpen] = useState<boolean>(false);
  const [nameInputValue, setNameInputValue] = useState<string>("");

  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [promptInputValue, setPromptInputValue] = useState("");
  const [lottoView, setLottoView] = useState("로또 번호를 입력해주세요.");

  const setConfirm = () => {
    alert(`${nameInputValue}님, 접수 완료 되었습니다.`);
    setDefaultModalOpen(false);
    setNameInputValue("");
  };

  return (
    <>
      <button onClick={() => setDefaultModalOpen(true)}>기본 모달 버튼</button>
      <button onClick={() => setAlertModalOpen(true)}>Alert 모달 버튼</button>

      <button onClick={() => setConfirmModalOpen(true)}>
        Confirm 모달 버튼
      </button>
      <button onClick={() => setPromptModalOpen(true)}>Prompt 모달 버튼</button>

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

      {alertModalOpen && (
        <Modal setModalClose={() => setAlertModalOpen(false)}>
          <Modal.Header
            title="아이디를 입력해 주세요."
            hasXButton={false}
            setModalClose={() => setAlertModalOpen(false)}
          ></Modal.Header>

          <Modal.Content>아이디는 필수로 입력해야 합니다.</Modal.Content>
          <Modal.Footer>
            <Modal.Button
              onClick={() => setAlertModalOpen(false)}
              buttonSize="S"
            ></Modal.Button>
          </Modal.Footer>
        </Modal>
      )}

      {confirmModalOpen && (
        <Modal
          position="center"
          setModalClose={() => setConfirmModalOpen(false)}
          modalSize="M"
        >
          <Modal.Header
            title="카드를 삭제하시겠습니까?"
            hasXButton={false}
            setModalClose={() => setConfirmModalOpen(false)}
          ></Modal.Header>

          <Modal.Content> 삭제하면 복구하실 수 없습니다.</Modal.Content>

          <Modal.Footer>
            <Modal.Button
              onClick={() => setConfirmModalOpen(false)}
              buttonSize="S"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            ></Modal.Button>
            <Modal.Button
              onClick={() => setConfirmModalOpen(false)}
              buttonSize="S"
            ></Modal.Button>
          </Modal.Footer>
        </Modal>
      )}

      {promptModalOpen && (
        <Modal modalSize="M" setModalClose={() => setPromptModalOpen(false)}>
          <Modal.Header
            title="쿠폰 번호를 입력해 주세요."
            setModalClose={() => setPromptModalOpen(false)}
          ></Modal.Header>

          <Modal.Content>
            <InputContainer>
              <input
                onChange={(e) => setPromptInputValue(e.target.value)}
              ></input>
            </InputContainer>
          </Modal.Content>

          <Modal.Footer>
            <Modal.Button
              onClick={() => setPromptModalOpen(false)}
              buttonSize="S"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            ></Modal.Button>
            <Modal.Button
              onClick={() => {
                setPromptModalOpen(false);
                setLottoView(promptInputValue);
              }}
              buttonSize="S"
            ></Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
      <LottoNumber>lotto 번호 : {lottoView}</LottoNumber>
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

const LottoNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  z-index: 0;
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
