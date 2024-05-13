import { Modal } from '../../..';
import { ModalProps } from '../Modal.type';

type AlertModalProps = ModalProps & {
  title: string;
  description?: string;
  onConfirm: () => void;
};

export const AlertModal = ({ title, description, onConfirm, ...rest }: AlertModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer position="right">
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
