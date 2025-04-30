import Modal from "./lib/Modal";

function App() {
  return (
    <>
      <Modal background>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
