import React, { useState } from "react";
import { Modal } from "./lib/index";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          size="large"
          position="bottom"
          onBackdropClick={() => setIsOpened(false)}
        >
          <Modal.Title
            title="Modal Title"
            subtitle="Modal subtitle"
            position="left"
          ></Modal.Title>
          <div>Children</div>
          <Modal.InputForm
            title="Input Title"
            placeHolder="Input placeholder"
            size="small"
          ></Modal.InputForm>

          <Modal.CancelButton
            onClick={() => setIsOpened(false)}
            content="Close"
            size="medium"
          />
          <Modal.ConfirmButton
            onClick={() => alert("Confirmed")}
            content="Confirm"
            size="large"
          />
          <Modal.CloseButton onClick={() => setIsOpened(false)} size="large" />
        </Modal>
      ) : (
        <button onClick={() => setIsOpened(true)}>모달 열기</button>
      )}
    </>
  );
}

export default App;
