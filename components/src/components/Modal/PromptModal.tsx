/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, useState } from "react";
import Modal from "./Modal";
import { useModalAction } from ".";
import { css } from "@emotion/react";

export interface Props {
  title?: string;
  width?: number;
  onSubmit?: (value?: string) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const inputStyle = css({});

const PromptModal = ({ title, width, onSubmit, inputProps }: Props) => {
  const action = useModalAction();

  const [state, setState] = useState<string>();

  return (
    <Modal
      title={title}
      width={width}
      hasConfirmButton
      buttonAlign="row"
      confirmMessage="확인"
      cancelMessage="취소"
      onConfirm={() => {
        if (onSubmit) onSubmit(state);
        action.handleClose();
      }}
      closeButtonPosition="bottom"
    >
      <input
        name="input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
        value={state}
        css={inputStyle}
        {...inputProps}
      />
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
