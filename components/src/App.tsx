import { useModalContext } from './modal';
import Modal from './modal/Modal';

function App() {
  return (
    <Modal>
      <Modal.OpenTrigger>
        <button>열기</button>
      </Modal.OpenTrigger>
      <Modal.Container title="모달" showCloseButton={false}>
        <div>컨텐츠</div>
        <Modal.PromptInput />
        <Modal.ButtonGroup direction="row" align="end">
          <ModalCloseButton />
          <Modal.CloseTrigger>
            <Modal.Button>확인</Modal.Button>
          </Modal.CloseTrigger>
        </Modal.ButtonGroup>
      </Modal.Container>
    </Modal>
  );
}

function ModalCloseButton() {
  const { onClose } = useModalContext();
  return (
    <Modal.Button
      variant="primary"
      onClick={() => {
        if (Math.random() > 0.5) {
          onClose();
        }
        alert('클릭됨');
      }}
    >
      동의하고 저장하기
    </Modal.Button>
  );
}

export default App;
