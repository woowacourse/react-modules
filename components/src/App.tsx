import './App.css';
import Modal from './modal/Modal';

function App() {
  return (
    <>
      <Modal
        position="center"
        title="알림"
        content="이것은 모달 내용입니다."
        onConfirm={() => {}}
        onClose={() => {}}
        onOpen={() => {}}
      />
    </>
  );
}

export default App;
