import { useModalContext } from './modal';
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
        <Modal.ButtonGroup direction="row" align="end">
          <ModalCloseButton />
          <Modal.CloseTrigger>
            <Modal.WideButton>확인</Modal.WideButton>
          </Modal.CloseTrigger>
        </Modal.ButtonGroup>
      </Modal.Container>
    </Modal>
  );
}

function ModalCloseButton() {
  const { onClose } = useModalContext();
  return (
    <Modal.WideButton
      variant="primary"
      onClick={() => {
        if (Math.random() > 0.5) {
          onClose();
        }
        alert('클릭됨');
      }}
    >
      동의하고 저장하기
    </Modal.WideButton>
  );
}

export default App;
