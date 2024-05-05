import "./App.css";

import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal position="center" title="카드사 선택" hasConfirmButton={true} closeButtonPosition="top">
        <div>hello, world</div>
      </Modal>
    </>
  );
}

export default App;
