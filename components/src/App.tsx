import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "hash-modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [nameInputValue, setNameInputValue] = useState("");

  const setConfirm = () => {
    alert(`${nameInputValue}님, 접수 완료 되었습니다.`);
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)}>모달 버튼</button>
      {modalOpen && (
        <Modal
          buttonLayout="column"
          position="center"
          title="◻◻ 병원 접수 신청"
          hasXButton={true}
          closeButtonContent="닫기"
          confirmButtonContent="이름 등록"
          handleConfirmEvent={setConfirm}
          handleCloseEvent={() => setModalOpen(false)}
        >
          {
            <ContentDefaultTemplate>
              <label htmlFor="name-input">이름을 입력해주세요.</label>
              <input
                id="name-input"
                value={nameInputValue}
                onChange={(e) => setNameInputValue(e.target.value)}
              ></input>
            </ContentDefaultTemplate>
          }
        </Modal>
      )}
    </>
  );
}

export const ContentDefaultTemplate = styled.div`
  height: 10rem;
  width: 20rem;

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
