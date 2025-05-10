import { ComponentProps } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

type PromptModalProps = {
  title: string;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  inputAttributes?: ComponentProps<"input">;
};

const PromptModal = ({
  title,
  position = "center",
  hasCloseButton = true,
  size = "medium",
  onClose,
  onConfirm,
  inputAttributes,
}: PromptModalProps) => {
  return (
    <ConfirmModal
      title={title}
      content={<input {...inputAttributes} />}
      position={position}
      size={size}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};

export default PromptModal;
