// import Modal from "../src/lib/components/Modal/Modal";
import { Modal } from "@kaori-killer/modal-component";

function App() {
  const { isOpen, handleOpen, handleClose } = Modal.useModal();

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal isOpen={isOpen}>
        <Modal.Overlay onClose={handleClose} />
        <Modal.Content position="center">
          <Modal.Header direction="row" align="start" justify="start">
            <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
              Title이다!
            </Modal.Title>
            <Modal.CloseButton onClose={handleClose} />
          </Modal.Header>
          <Modal.Body>몸통이다!</Modal.Body>
          <Modal.Footer direction="row" align="end" justify="center">
            Footer이다!
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
