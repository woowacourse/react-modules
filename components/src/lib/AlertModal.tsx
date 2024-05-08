import Modal, { ModalProps } from './Modal';
import ModalContent from './components/content/ModalContent';
import ModalFooter from './components/footer/ModalFooter';
import ModalHeader from './components/header/ModalHeader';

interface AlertModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick'> {
  title: string;
  caption: string;
  onOk?: () => void;
}

const AlertModal = ({
  title,
  caption,
  onOk,
  ...props
}: React.PropsWithChildren<AlertModalProps>) => {
  return (
    <Modal type="dialog" {...props} closeOnOutsideClick={false}>
      <ModalHeader title={title} onClose={props.onClose} hideCloseIcon />
      <ModalContent>
        <p>{caption}</p>
      </ModalContent>
      <ModalFooter
        closeButton={{
          role: 'close',
          hide: true,
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

export default AlertModal;
