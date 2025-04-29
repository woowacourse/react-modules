import React from "react";
import "./App.css";
import { Modal } from "@kaori-killer/modal-component";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal isOpen={true} position="bottom">
        <h2>Modal</h2>
      </Modal>
    </>
  );
}

export default App;
