// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalTitle,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
// } from "@kaori-killer/modal-component";

import Modal from "./lib/Modal/Modal";
import ModalOverlay from "./lib/ModalOverlay/ModalOverlay";
import ModalContent from "./lib/ModalContent/ModalContent";
import ModalHeader from "./lib/ModalHeader/ModalHeader";
import ModalTitle from "./lib/ModalTitle/ModalTitle";
import ModalCloseButton from "./lib/ModalCloseButton/ModalCloseButton";
import ModalBody from "./lib/ModalBody/ModalBody";
import ModalFooter from "./lib/ModalFooter/ModalFooter";
import useModal from "./lib/hooks/useModal";

function App() {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal isOpen={isOpen}>
        <ModalOverlay onClose={handleClose} />
        <ModalContent position="center">
          <ModalHeader direction="row" align="start" justify="start">
            <ModalTitle tag="h1" fontSize="25px" fontWeight="700">
              Title이다!
            </ModalTitle>
            <ModalCloseButton onClose={handleClose} />
          </ModalHeader>
          <ModalBody>몸통이다!</ModalBody>
          <ModalFooter direction="row" align="end" justify="center">
            Footer이다!
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
