import React from "react";
import "./App.css";

import Modal from "./lib/Modal/Modal";

function App() {
  // console.log(window.matchMedia("(prefers-color-scheme: light)"));
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
