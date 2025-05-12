import type { ModalDefaultProps } from "../../types/modal";
import Button from "@/components/Button";
import ContentModal from "../../components/ContentModal";
import { type ComponentProps, FormEvent, useRef } from "react";
import Input from "@/components/Input";

export const defaultInputAttributes: ComponentProps<"input"> = {
  type: "text",
  placeholder: "placeholder",
  autoFocus: true,
  required: true,
};

interface PromptModalProps extends ModalDefaultProps {
  inputAttributes?: ComponentProps<"input">;
  onSubmit: (value: ComponentProps<"input">["value"]) => void;
}

function PromptModal({
  title,
  size,
  inputAttributes = defaultInputAttributes,
  onRequestClose,
  onSubmit,
}: PromptModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePromptSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value =
      inputAttributes.value !== undefined
        ? inputAttributes.value
        : inputRef.current?.value ?? "";
    onSubmit(value);
    onRequestClose();
  };

  return (
    <ContentModal
      title={title}
      size={size}
      hasCloseButton={false}
      containerAs="form"
      content={<Input ref={inputRef} {...inputAttributes} />}
      buttonElements={[
        <Button
          key="secondary"
          variant="secondary"
          type="button"
          onClick={onRequestClose}
        >
          취소
        </Button>,
        <Button
          key="primary"
          variant="primary"
          type="submit"
          onClick={handlePromptSubmit}
        >
          확인
        </Button>,
      ]}
    />
  );
}

export default PromptModal;
