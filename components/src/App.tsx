import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./lib/Modal";

function App() {
  const [defaultModalOpen, setDefaultModalOpen] = useState(false);
  const [nameInputValue, setNameInputValue] = useState("");

  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [promptInputValue, setPromptInputValue] =
    useState("로또 번호를 입력해주세요.");

  const setConfirm = () => {
    alert(`${nameInputValue}님, 접수 완료 되었습니다.`);
    setDefaultModalOpen(false);
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
          modalSize="S"
          buttonLayout="column"
          position="center"
          title="◻◻ 병원 접수 신청"
          hasXButton={true}
          closeButtonContent="닫기"
          confirmButtonContent="이름 등록"
          handleConfirmEvent={setConfirm}
          handleCloseEvent={() => setDefaultModalOpen(false)}
        >
          <ContentDefaultTemplate>
            <label htmlFor="name-input">이름을 입력해주세요.</label>
            <input
              id="name-input"
              value={nameInputValue}
              onChange={(e) => setNameInputValue(e.target.value)}
            ></input>
          </ContentDefaultTemplate>
        </Modal>
      )}

      {alertModalOpen && (
        <Modal
          position="center"
          title="아이디를 입력해 주세요."
          hasXButton={false}
          confirmButtonContent="확인"
          handleConfirmEvent={() => setAlertModalOpen(false)}
          handleCloseEvent={() => setAlertModalOpen(false)}
          buttonSize="S"
          buttonPosition="right"
          modalSize="M"
        >
          아이디는 필수로 입력해야 합니다.
        </Modal>
      )}

      {confirmModalOpen && (
        <Modal
          position="center"
          title="카드를 삭제하시겠습니까?"
          hasXButton={false}
          confirmButtonContent="확인"
          closeButtonContent="취소"
          handleConfirmEvent={() => {
            setConfirmModalOpen(false);
            alert("삭제 완료");
          }}
          handleCloseEvent={() => setConfirmModalOpen(false)}
          buttonSize="S"
          buttonPosition="right"
          modalSize="M"
        >
          삭제하면 복구하실 수 없습니다.
        </Modal>
      )}

      {promptModalOpen && (
        <Modal
          position="center"
          title="쿠폰 번호를 입력해 주세요."
          hasXButton={false}
          confirmButtonContent="확인"
          closeButtonContent="취소"
          handleConfirmEvent={() => setPromptModalOpen(false)}
          handleCloseEvent={() => {
            setPromptModalOpen(false);
            setPromptInputValue("로또 번호를 입력해주세요.");
          }}
          buttonSize="S"
          buttonPosition="right"
          modalSize="M"
        >
          <InputContainer>
            <input
              onChange={(e) => setPromptInputValue(e.target.value)}
            ></input>
          </InputContainer>
        </Modal>
      )}
      <LottoNumber>
        lotto 번호 : {!promptModalOpen && promptInputValue}
      </LottoNumber>
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
  width: 15rem;

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
