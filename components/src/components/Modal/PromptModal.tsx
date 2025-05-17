import { PropsWithChildren } from "react";
import ConfirmModal from "./ConfirmModal";
import Input from "../common/Input/Input";

interface ModalInterface {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
  onConfirm: () => void;
  inputValue?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium" | "large";
}

const PromptModal = ({
  isOpen,
  onClose,
  title,
  onConfirm,
  children,
  inputValue,
  onInputChange,
  size,
}: PropsWithChildren<ModalInterface>) => {
  return (
    <ConfirmModal
      onClose={onClose}
      onConfirm={onConfirm}
      isOpen={isOpen}
      title={title}
      size={size}
    >
      <Input height={"32px"} value={inputValue} onChange={onInputChange} />
      {children}
    </ConfirmModal>
  );
};

export default PromptModal;
