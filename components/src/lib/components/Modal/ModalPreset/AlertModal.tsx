import { Modal } from '../../..';
import { ButtonProps } from '../../common/Button/Button';
import { ModalFooterProps, ModalProps } from '../Modal.type';

export type AlertModalProps = ModalProps & {
  title: string;
  description?: string;
  onConfirm: () => void;
  footerProps?: ModalFooterProps;
  confirmButtonProps?: ButtonProps;
};

export const AlertModal = ({
  title,
  description,
  onConfirm,
  footerProps,
  confirmButtonProps,
  ...rest
}: AlertModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer position="right" {...footerProps}>
        <Modal.Button size="md" text="확인" onClick={onConfirm} {...confirmButtonProps}></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
