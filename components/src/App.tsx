import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "hash-modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>모달 버튼</button>
      {modalOpen && (
        <Modal
          buttonLayout="column"
          position="bottom"
          title="제목입니다."
          isXButton={true}
          closeButtonContent="닫기"
          confirmButtonContent="확인"
          handleConfirm={() => setModalOpen(true)}
          handleClose={() => setModalOpen(false)}
        >
          {
            <ContentDefaultTemplate>
              <input></input>
            </ContentDefaultTemplate>
          }
        </Modal>
      )}
    </>
  );
}

export const ContentDefaultTemplate = styled.div`
  height: 50vh;
  background-color: red;
`;

export const ContentWideTemplate = styled.div`
  width: 500vw;
  height: 500vh;
  background-color: red;
`;

export default App;
