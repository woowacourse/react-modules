// import { Modal } from "@kaori-killer/modal-component";
import Modal from "../src/lib/components/Modal/Modal";
import Button from "./lib/components/Button/Button";

function App() {
  const { isOpen, handleOpen, handleClose } = Modal.useModal();

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content position="center">
          <Modal.Header direction="row" align="start" justify="start">
            <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
              Title이다!
            </Modal.Title>
            <Modal.CloseButton onClose={handleClose} />
          </Modal.Header>
          <Modal.Body>몸통이다!</Modal.Body>
          <Modal.Footer direction="row" align="end" justify="center">
            <Button>확인</Button>
            <Button>취소</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
