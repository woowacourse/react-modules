import { ChangeEvent } from 'react';
import { ModalProps } from '../Modal.type';
import { Modal } from '../../..';

type PromptModalProps = ModalProps & {
  title: string;
  onConfirm: () => void;
  onCancel?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const PromptModal = ({ title, onConfirm, onCancel, onChange, value, ...rest }: PromptModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Input fullWidth onChange={onChange} value={value} />
      </Modal.Body>
      <Modal.Footer direction="row" position="right">
        <Modal.Button
          size="md"
          text="취소"
          variants="border"
          color="none"
          onClick={() => {
            if (onCancel) onCancel();
          }}
        ></Modal.Button>
        <Modal.Button size="md" text="확인" onClick={onConfirm}></Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
