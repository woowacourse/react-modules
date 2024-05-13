import Modal, { ModalProps } from '../Modal';

interface PromptModalProps extends ModalProps {
  placeHolder: string;
  onChange: (e: React.ChangeEvent) => void;
  onConfirmButtonClick: (e: React.MouseEvent) => void;
  onCancelButtonClick: (e: React.MouseEvent) => void;
}

const PromptModal = ({
  children,
  onConfirmButtonClick,
  onCancelButtonClick,
  onChange,
  placeHolder,
  ...args
}: PromptModalProps) => {
  return (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='쿠폰번호를 입력해주세요.' />
      </Modal.Header>
      <Modal.Body>
        {children}
        <input
          onChange={onChange}
          style={{ width: '100%', boxSizing: 'border-box' }}
          placeholder={placeHolder}
        />
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button
          onClick={onCancelButtonClick}
          buttonColor={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
        <Modal.Button onClick={onConfirmButtonClick}>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
