/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, useState } from "react";
import Modal from "../Modal";
import { useModalAction } from "..";
import Input from "../../Input/Input";

export interface Props {
  title?: string;
  width?: number;
  theme?: ThemeType;
  onSubmit?: (value?: string) => void;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
}

const PromptModal = ({ title, width, onSubmit, theme, inputAttrs }: Props) => {
  const action = useModalAction();

  const [value, setValue] = useState<string>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <Modal
      title={title}
      width={width}
      hasConfirmButton
      theme={theme}
      buttonAlign="row"
      confirmMessage="확인"
      cancelMessage="취소"
      onConfirm={() => {
        if (onSubmit) onSubmit(value);
        action.handleClose();
      }}
      closeButtonPosition="bottom"
    >
      <Input value={value} onChange={handleInput} {...inputAttrs} />
    </Modal>
  );
};

enum ModalWidth {
  Small = 320,
  Medium = 480,
  Large = 600,
}

const SmallPromptModal = ({ ...props }: Props) => {
  return <PromptModal {...props} width={ModalWidth.Small} />;
};
const MediumPromptModal = ({ ...props }: Props) => {
  return <PromptModal {...props} width={ModalWidth.Medium} />;
};
const LargePromptModal = ({ ...props }: Props) => {
  return <PromptModal {...props} width={ModalWidth.Large} />;
};

PromptModal.Small = SmallPromptModal;
PromptModal.Medium = MediumPromptModal;
PromptModal.Large = LargePromptModal;

export default PromptModal;
