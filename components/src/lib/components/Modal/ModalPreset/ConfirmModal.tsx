import { Modal } from '../../..';
import { ModalProps } from '../Modal.type';

type ConformModalProps = ModalProps & {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

export const ConfirmModal = ({ title, description, onConfirm, onCancel, ...rest }: ConformModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer direction="row" position="right">
        <Modal.Button
          size="md"
          text="취소"
          variants="border"
          color="none"
          onClick={() => {
            if (onCancel) onCancel();
            rest.close();
          }}
        ></Modal.Button>
        <Modal.Button
          size="md"
          text="확인"
          onClick={() => {
            onConfirm();
            rest.close();
          }}
        ></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
