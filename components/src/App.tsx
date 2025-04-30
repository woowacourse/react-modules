import "./App.css";

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalOverlay,
  ModalBody,
} from "@kaori-killer/modal-component";

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
        <ModalBody>몸통이다!</ModalBody>
      </Modal>
    </>
  );
}

export default App;
