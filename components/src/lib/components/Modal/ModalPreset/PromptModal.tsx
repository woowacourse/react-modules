import { ChangeEvent } from 'react';
import { ModalFooterProps, ModalProps } from '../Modal.type';
import { Modal } from '../../..';
import { InputProps } from '../../common/Input/Input';
import { ButtonProps } from '../../common/Button/Button';

export type PromptModalProps = ModalProps & {
  title: string;
  onConfirm: () => void;
  onCancel?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputProps?: InputProps;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footerProps?: ModalFooterProps;
};

export const PromptModal = ({
  title,
  onConfirm,
  onCancel,
  onChange,
  value,
  inputProps,
  footerProps,
  cancelButtonProps,
  confirmButtonProps,
  ...rest
}: PromptModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Input {...inputProps} fullWidth onChange={onChange} value={value} />
      </Modal.Body>
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
