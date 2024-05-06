import React, { useState } from "react";
import { Modal } from "paran-simple-modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          onClose={() => {
            setIsOpened(false);
          }}
          modalPosition="bottom"
          title="test"
          subtitle="123123"
          confirmButton={{
            content: "확인",
            onConfirm: () => {
              alert("확인");
            },
          }}
          cancelButton={{
            content: "취소",
            onCancel: () => {
              alert("취소");
            },
          }}
          children={<p>hi</p>}
          preventCloseOnOutsideClick={true}
        />
      ) : (
        <button onClick={() => setIsOpened(true)}>모달 열기</button>
      )}
    </>
  );
}

export default App;
