import "./App.css";

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalOverlay,
  ModalBody,
} from "@kaori-killer/modal-component";

import ModalFooter from "./lib/ModalFooter/ModalFooter";

function App() {
  return (
    <>
      <ModalOverlay onClose={() => console.log("clicked")} />
      <Modal isOpen={true} position="bottom">
        <ModalHeader direction="row" align="start" justify="start">
          <ModalTitle tag="h1" fontSize="40px" fontWeight="bold">
            Title이다!
          </ModalTitle>
        </ModalHeader>
        <ModalBody>몸통이다!</ModalBody>
        <ModalFooter direction="row" align="end" justify="center">
          Footer이다!
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
