import { Modal } from '../../..';
import { ButtonProps } from '../../common/Button/Button';
import { ModalFooterProps, ModalProps } from '../Modal.type';

type ConformModalProps = ModalProps & {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  footerProps?: ModalFooterProps;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

export const ConfirmModal = ({
  title,
  description,
  onConfirm,
  onCancel,
  footerProps,
  cancelButtonProps,
  confirmButtonProps,
  ...rest
}: ConformModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer direction="row" position="right" {...footerProps}>
        <Modal.Button
          {...cancelButtonProps}
          size="md"
          text="취소"
          variants="border"
          color="none"
          onClick={() => {
            if (onCancel) onCancel();
          }}
        ></Modal.Button>
        <Modal.Button {...confirmButtonProps} size="md" text="확인" onClick={onConfirm}></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
