import { Modal } from "..";
import { ModalMainProps } from "../type/modal.type";

export interface PromptModalProps extends ModalMainProps {
  onSubmit: () => void;
  onCancel: () => void;
  title: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PromptModal = ({ onSubmit, onCancel, title, submitButtonText = "확인", cancelButtonText = "취소", value, onChange, ...rest }: PromptModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Input
          value={value}
          onChange={onChange}
        ></Modal.Input>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Button
          size="small"
          onClick={onSubmit}
        >
          {submitButtonText}
        </Modal.Button>
        <Modal.Button
          variant="secondary"
          size="small"
          onClick={onCancel}
        >
          {cancelButtonText}
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
