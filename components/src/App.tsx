import useBoolean from './lib/hooks/useBoolean';
import { Modal } from './lib';

function App() {
  const { value: isOpen, setTrue, setFalse } = useBoolean(false);

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setTrue()}>Open Modal</button>

      {isOpen && (
        <Modal
          closeModal={() => setFalse()}
          position="center"
          maxWidth={500}
          title="Modal Title"
          isVisibleCloseButton={true}
        >
          <p>Modal Content</p>
        </Modal>
      )}
    </>
  );
}

export default App;
