import "./App.css";
import { Modal } from "@sooyeoniya/components";

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal title="Title" isOpen={true} onClose={() => {}}>
        Contents
      </Modal>
    </>
  );
}

export default App;
