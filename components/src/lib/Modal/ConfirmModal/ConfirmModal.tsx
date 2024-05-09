import { Modal } from '../..';
import { SizeType } from '../Content/Content';
import { ModalProps } from '../ModalContainer';

interface ConfirmModal extends ModalProps {
  size?: SizeType;
  title: string;
  label: string;
  existCloseButton: boolean;
  onConfirm: () => void;
}

export default function ConfirmModal({ size = 'medium', title, label, existCloseButton, onConfirm, ...props }: ConfirmModal) {
  const { position, isOpen, onClose } = props;

  const onConfirmHandler = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal position={position} isOpen={isOpen} onClose={onClose}>
      <Modal.Backdrop onClick={onClose} />
      <Modal.Content size={size}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          {existCloseButton && <Modal.CloseButton onClick={onClose} />}
        </Modal.Header>
        <Modal.Main>
          <Modal.Label color='basic'>{label}</Modal.Label>
        </Modal.Main>
        <Modal.Footer align='row' position='right'>
          <Modal.Button backgroundColor='secondary' onClick={onConfirmHandler} size='small'>
            취소
          </Modal.Button>
          <Modal.Button backgroundColor='primary' onClick={onConfirmHandler} size='small'>
            확인
          </Modal.Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
