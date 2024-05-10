import Modal, { ModalProps } from './Modal';

export interface PromptModalProps extends ModalProps {
  title: string;
}

const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  onClose,
  title,
  position = 'center',
  size = 'medium',
}) => {
  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} size={size}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Input></Modal.Input>
      </Modal.Content>
      <Modal.Footer buttonPosition='right' buttonGap='10px'>
        <Modal.TextButton
          actionFn={onClose}
          buttonSize='50px'
          backgroundColor='#ffffff'
          fontColor='#333333'
        >
          취소
        </Modal.TextButton>
        <Modal.TextButton
          type='submit'
          actionFn={onClose}
          buttonSize='50px'
          fontColor='#ffffff'
        >
          제출
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
