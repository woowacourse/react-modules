// import { Modal } from "@ohgus/modal-component";
import { Modal } from "./lib";

function App() {
  return (
    <>
      <div>Modal Library</div>
      <Modal.Root>
        <Modal.Trigger>
          <button>Open</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content position="center" size="large">
            <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
              Title이다!
            </Modal.Title>
            <textarea name="" id=""></textarea>
            <input type="text" />
            <input type="text" />
            <Modal.Close>
              <button>Close</button>
            </Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export default App;
