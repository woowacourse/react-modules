import Modal from './modal/Modal';
import { useModalContext } from './modal/ModalProvider';

function App() {
  const { onClose } = useModalContext();
  return (
    <Modal>
      <Modal.OpenTrigger>
        <button>열기</button>
      </Modal.OpenTrigger>
      <Modal.Container title="모달" showCloseButton={false}>
        <div>컨텐츠</div>
        <Modal.PromptInput />

        <Modal.ButtonGroup direction="row" align="end">
          <Modal.Button
            variant="primary"
            onClick={() => {
              onClose();
              alert('클릭됨');
            }}
          >
            동의하고 저장하기
          </Modal.Button>
          <Modal.CloseTrigger>
            <Modal.Button>확인</Modal.Button>
          </Modal.CloseTrigger>
        </Modal.ButtonGroup>
      </Modal.Container>
    </Modal>
  );
}

export default App;
