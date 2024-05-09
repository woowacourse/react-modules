import { ChangeEvent } from 'react';
import { Modal } from '..';
import { ModalProps } from '../Modal/Modal.type';

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
