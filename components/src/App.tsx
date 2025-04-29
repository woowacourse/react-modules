import './App.css';
import { Modal } from './lib';

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal isOpen={true}>
        <h2>Modal</h2>
      </Modal>
    </>
  );
}

export default App;
