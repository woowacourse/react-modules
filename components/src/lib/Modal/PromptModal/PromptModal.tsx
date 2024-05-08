import Modal from '../Modal';
import PromptModalInput from './PromptModalInput';
import { useState } from 'react';

export interface PromptModalProps {
  isOpen: boolean;
  title: string;
  placeholder?: string;
  defaultValue?: string;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
  onClose: () => void;
}

export default function PromptModal({
  isOpen,
  title,
  placeholder = '',
  defaultValue = '',
  submitButtonLabel = '확인',
  cancelButtonLabel = '취소',
  onSubmit,
  onCancel,
  onClose,
}: PromptModalProps) {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onSubmitButtonClick = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Modal.Header
        title={title}
        hasCloseButton={false}
        onClose={onClose}
      />
      <Modal.Content>
        <PromptModalInput
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
        />
      </Modal.Content>
      <Modal.Footer direction="row">
        <Modal.Footer.Button
          style="secondary"
          onClick={onCancel}
        >
          {cancelButtonLabel}
        </Modal.Footer.Button>
        <Modal.Footer.Button
          style="primary"
          onClick={onSubmitButtonClick}
        >
          {submitButtonLabel}
        </Modal.Footer.Button>
      </Modal.Footer>
    </Modal>
  );
}
