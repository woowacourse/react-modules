import Modal, { ModalProps } from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

interface ConfirmModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick'> {
  title: string;
  caption: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const ConfirmModal = ({
  title,
  caption,
  onOk,
  onCancel,
  ...props
}: React.PropsWithChildren<ConfirmModalProps>) => {
  return (
    <Modal type="dialog" {...props} closeOnOutsideClick={false}>
      <ModalHeader title={title} onClose={props.onClose} hideCloseIcon />
      <ModalContent>
        <p>{caption}</p>
      </ModalContent>
      <ModalFooter
        closeButton={{
          role: 'close',
          onClick: () => {
            if (onCancel) onCancel();
            props.onClose();
          },
        }}
        confirmButton={{
          role: 'confirm',
          onClick: () => {
            if (onOk) onOk();
            props.onClose();
          },
        }}
      />
    </Modal>
  );
};

export default ConfirmModal;
