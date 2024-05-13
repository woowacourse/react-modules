import Modal, { ModalProps } from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

interface ConfirmModalProps
  extends Omit<ModalProps, 'type' | 'closeOnOutsideClick' | 'closeOnESCKeydown' | 'dialogSize'> {
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
    <Modal
      type="dialog"
      {...props}
      closeOnOutsideClick={false}
      closeOnESCKeydown={false}
      style={{ modal: { gap: 16 } }}
    >
      <ModalHeader title={title} onClose={props.onClose} hideCloseIcon />
      <ModalContent>
        <p>{caption}</p>
      </ModalContent>
      <ModalFooter
        style={{ justifyContent: 'flex-end', gap: 12 }}
        closeButton={{
          role: 'close',
          style: { width: 80 },
          onClick: () => {
            if (onCancel) onCancel();
            props.onClose();
          },
        }}
        confirmButton={{
          role: 'confirm',
          style: { width: 80 },
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
