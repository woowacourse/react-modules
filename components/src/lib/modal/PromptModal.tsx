import Modal, { ModalProps } from './Modal';

export interface PromptModalProps extends ModalProps {
  title: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonBackgroundColor?: string;
  secondaryButtonBackgroundColor?: string;
  primaryButtonFontColor?: string;
  secondaryButtonFontColor?: string;
}

const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  position = 'center',
  size = 'medium',
  primaryButtonText = '제출',
  secondaryButtonText = '취소',
  primaryButtonBackgroundColor = '#333333',
  secondaryButtonBackgroundColor = '#ffffff',
  primaryButtonFontColor = '#ffffff',
  secondaryButtonFontColor = '#333333',
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
          onClick={onClose}
          buttonWidth='80px'
          buttonHeight='36px'
          backgroundColor={secondaryButtonBackgroundColor}
          fontColor={secondaryButtonFontColor}
        >
          {secondaryButtonText}
        </Modal.TextButton>
        <Modal.TextButton
          type='submit'
          onSubmit={onConfirm}
          buttonWidth='80px'
          buttonHeight='36px'
          backgroundColor={primaryButtonBackgroundColor}
          fontColor={primaryButtonFontColor}
        >
          {primaryButtonText}
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
