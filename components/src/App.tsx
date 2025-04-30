import "./App.css";

import { Modal, ModalHeader } from "@kaori-killer/modal-component";
import ModalTitle from "./lib/ModalTitle/ModalTitle";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal isOpen={true} position="bottom">
        <ModalHeader direction="row" align="start" justify="start">
          <ModalTitle tag="h1" fontSize="40px" fontWeight="bold">
            Title이다!
          </ModalTitle>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default App;
