import "./App.css";

import { Modal, ModalHeader, ModalTitle } from "@kaori-killer/modal-component";
import ModalOverlay from "./lib/ModalOverlay/ModalOverlay";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <ModalOverlay onClose={() => console.log("clicked")} />
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
