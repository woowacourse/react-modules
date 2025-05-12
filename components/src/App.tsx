import Modal from './modal/Modal';

function App() {
  return (
    <Modal role="alert-modal">
      <Modal.OpenTrigger>
        <button>열기</button>
      </Modal.OpenTrigger>
      <Modal.Content title="모달" showCloseButton={false}>
        <div>컨텐츠</div>
        <Modal.PromptInput />

        <Modal.ButtonWrapper direction="column">
          <Modal.CloseTrigger>
            <Modal.Button variant="primary" onClick={() => alert('클릭됨')}>
              동의하고 저장하기
            </Modal.Button>
          </Modal.CloseTrigger>
          <Modal.CloseTrigger>닫기</Modal.CloseTrigger>
        </Modal.ButtonWrapper>
      </Modal.Content>
    </Modal>
  );
}

export default App;
