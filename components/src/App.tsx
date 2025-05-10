import Modal from './modal/Modal';

function App() {
  return (
    <Modal role="alert-modal">
      <Modal.ButtonTrigger>
        <button>열기</button>
      </Modal.ButtonTrigger>
      <Modal.Container>
        <Modal.Title>모달</Modal.Title>
        <Modal.CloseButton />

        <div>컨텐츠</div>
        <Modal.PromptInput />

        <Modal.ButtonWrapper direction="column">
          <Modal.Button variant="primary" onClick={() => alert('클릭됨')}>
            동의하고 저장하기
          </Modal.Button>
          <Modal.Button variant="secondary" onClick={() => {}}>
            닫기
          </Modal.Button>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
}

export default App;
