import "soosoo-react-payments-components/dist/style.css";
import React, { useState } from "react";
import { Modal } from "soosoo-react-payments-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("확인");
  };

  const handleCancel = () => {
    console.log("취소");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{ background: "blue", width: "200px", height: "100px" }}
      >
        모달 오픈
      </button>
      <Modal
        position="center"
        title={{ position: "left", content: "🍀호프는 몇 살일까?🍀" }}
        children={<>29살 추정ㅎㅎ</>}
        isOpen={isOpen}
        onClose={handleClose}
        closeButton={{ onClose: handleClose }}
        confirmButton={{ content: "확인", onConfirm: handleConfirm }}
        cancelButton={{ content: "취소", onCancel: handleCancel }}
      />
    </>
  );
}

export default App;
