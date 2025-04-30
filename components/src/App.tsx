import "./App.css";

import {
  Modal,
  ModalTitle,
  ModalOverlay,
  ModalBody,
} from "@kaori-killer/modal-component";

import ModalHeader from "./lib/ModalHeader/ModalHeader";
import ModalFooter from "./lib/ModalFooter/ModalFooter";
import ModalCloseButton from "./lib/ModalCloseButton/ModalCloseButton";

function App() {
  return (
    <>
      <ModalOverlay onClose={() => console.log("clicked")} />
      <Modal isOpen={true} position="center">
        <ModalHeader direction="row" align="start" justify="start">
          <ModalTitle tag="h1" fontSize="40px" fontWeight="bold">
            Title이다!
          </ModalTitle>
          <ModalCloseButton onClose={() => console.log("Hello")} />
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
