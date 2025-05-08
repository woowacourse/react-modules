// import { Modal } from "@kaori-killer/modal-component";
import Modal from "../src/lib/components/Modal/Modal";
import Button from "./lib/components/Button/Button";
import Input from "./lib/components/Input/Input";

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
          <Modal.Body>
            <Input placeholder="쿠폰 번호 입력" />
          </Modal.Body>
          <Modal.Footer direction="row" align="end" justify="center">
            <Button color="light">확인</Button>
            <Button color="dark">취소</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
