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

        <Modal.ButtonWrapper direction="column">
          <Modal.PrimaryButton
            label="동의하고 저장하기"
            onClick={() => alert('클릭됨')}
          />
          <Modal.SecondaryButton label="닫기" onClick={() => {}} />
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
}

export default App;
