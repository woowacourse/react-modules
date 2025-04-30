import React from "react";
import "./App.css";
import { Modal, ModalHeader } from "@kaori-killer/modal-component";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal isOpen={true} position="bottom">
        <ModalHeader direction="row" align="start" justify="start">
          Hello
        </ModalHeader>
      </Modal>
    </>
  );
}

export default App;
