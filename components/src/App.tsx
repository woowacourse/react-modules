import "./App.css";

import Modal from "./lib/Modal/Modal";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal position="center" title="카드사 선택" isConfirmButton={true} closeButtonPosition="top">
        <div>hello, world</div>
      </Modal>
    </>
  );
}

export default App;
