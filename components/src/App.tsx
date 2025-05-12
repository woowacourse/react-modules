import Modal from './modal/Modal';

function App() {
  return (
    <Modal role="alert-modal">
      <Modal.OpenTrigger>
        <button>열기</button>
      </Modal.OpenTrigger>
      <Modal.Container title="모달" showCloseButton={false}>
        <div>컨텐츠</div>
        <Modal.PromptInput />

        <Modal.ButtonWrapper direction="row" align="end">
          <Modal.CloseTrigger>
            <Modal.Button variant="primary" onClick={() => alert('클릭됨')}>
              동의하고 저장하기
            </Modal.Button>
          </Modal.CloseTrigger>
          <Modal.CloseTrigger>
            <Modal.Button>확인</Modal.Button>
          </Modal.CloseTrigger>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
}

export default App;
