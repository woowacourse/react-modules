import Modal, { ModalProps } from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

interface PromptModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick'> {
  title: string;
  placeholder?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const PromptModal = ({
  title,
  placeholder,
  onOk,
  onCancel,
  ...props
}: React.PropsWithChildren<PromptModalProps>) => {
  return (
    <Modal type="dialog" {...props} closeOnOutsideClick={false}>
      <ModalHeader title={title} onClose={props.onClose} hideCloseIcon />
      <ModalContent>
        <input
          style={{ width: '100%', height: '32px', padding: 8 }}
          type="text"
          placeholder={placeholder}
          autoFocus
        />
      </ModalContent>
      <ModalFooter
        closeButton={{
          role: 'close',
          onClick: () => {
            if (onCancel) onCancel();
            props.onClose();
          },
          type: 'reset',
        }}
        confirmButton={{
          role: 'confirm',
          onClick: () => {
            if (onOk) onOk();
            props.onClose();
          },
          type: 'submit',
        }}
      />
    </Modal>
  );
};

export default PromptModal;
