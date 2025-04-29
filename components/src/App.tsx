import Modal from './lib/Modal.tsx';
import './App.css';

function App() {
  return (
    <div>
      <Modal
        position="bottom"
        title="모달"
        onClose={() => {
          console.log('닫기');
        }}
      >
        모달 내용
      </Modal>
    </div>
  );
}

export default App;
