import "./App.css";
import { AlertModal, useModalAction } from "./lib/index";

function App() {
  const { handleOpen } = useModalAction();

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={handleOpen}></button>
      {/* <Modal.Small
        buttonAlign="row"
        position="center"
        title="카드사 선택"
        confirmMessage="확인 메세지"
        cancelMessage="취소"
        hasConfirmButton={true}
        closeButtonPosition="bottom"
      >
        <div>hello, world</div>
      </Modal.Small> */}
      <AlertModal.Large title="카드번호를 입력하세요."></AlertModal.Large>
    </>
  );
}

export default App;
