import Input, { InputProps } from "@/lib/Input/Input";
import Modal, { ModalPosition, ModalSize } from "../Modal/Modal";
import { ChangeEvent } from "react";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  position?: ModalPosition;
  modalSize?: ModalSize;
  inputProps?: InputProps;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const PromptModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  modalSize = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
  position = "center",
  inputProps,
  value,
  onChange,
}: PromptModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      size={modalSize}
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>
        <Input
          isError={false}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
      </Modal.Content>
      <Modal.Footer>
        <Modal.StyledButton
          onClickEvent={onClose}
          label={cancelButtonText}
          backgroundColor={"white"}
          size="small"
        />
        <Modal.StyledButton
          onClickEvent={onConfirm}
          label={confirmButtonText}
          backgroundColor={"black"}
          size="small"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
