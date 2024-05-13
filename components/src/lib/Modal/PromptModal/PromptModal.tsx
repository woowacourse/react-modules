import Input, { InputProps } from "@/lib/Input/Input";
import Modal from "../Modal";
import { ChangeEvent } from "react";
import { ModalMainProps } from "../Modal";

export interface PromptModalProps extends ModalMainProps {
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  inputProps?: InputProps;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const PromptModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  size = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
  position = "center",
  inputProps,
  value,
  onChange,
  children,
  label,
}: PromptModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} size={size}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>
        <Input
          label={label}
          isError={false}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
        {children}
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
