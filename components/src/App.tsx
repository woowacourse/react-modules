import Modal from './lib/Modal.tsx';
import './App.css';

function App() {
  return (
    <div>
      <h1>Component Modules</h1>
      <Modal position="bottom" title="모달" onClose={() => {}}>
        모달 내용
      </Modal>
    </div>
  );
}

export default App;
