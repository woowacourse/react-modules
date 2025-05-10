import { ComponentProps } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

type PromptModalProps = {
  title: string;
  position?: "center" | "bottom";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  inputAttributes?: ComponentProps<"input">;
};

const PromptModal = ({
  title,
  position = "center",
  hasCloseButton = true,
  onClose,
  onConfirm,
  inputAttributes,
}: PromptModalProps) => {
  return (
    <ConfirmModal
      title={title}
      content={<input {...inputAttributes} />}
      position={position}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};

export default PromptModal;
