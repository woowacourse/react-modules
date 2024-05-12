import React, { useState } from "react";
import { Modal } from "paran-simple-modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          guidanceSize="large"
          position="bottom"
          onBackdropClick={() => setIsOpened(false)}
        >
          <Modal.Title
            title="Modal Title"
            subtitle="Modal subtitle"
            position="left"
          />
          <div>Children</div>
          <Modal.InputForm guidanceSize="small" placeholder="placeholder" />
          <Modal.CancelButton
            onClick={() => setIsOpened(false)}
            content="Cancel"
            guidanceSize="medium"
          />
          <Modal.ConfirmButton
            onClick={() => alert("Confirmed")}
            content="Confirm"
            guidanceSize="large"
          />
          <Modal.CloseButton
            onClick={() => setIsOpened(false)}
            guidanceSize="medium"
          />
        </Modal>
      ) : (
        <button onClick={() => setIsOpened(true)}>모달 열기</button>
      )}
    </>
  );
}

export default App;
