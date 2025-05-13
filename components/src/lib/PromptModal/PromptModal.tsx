import BaseModal from "../BaseModal/BaseModal";
import * as BaseStyle from "../styles/modal.styles";
import { ChangeEvent } from "react";
import { ModalPropsType } from "../types/ModalPropsType";

interface PromptModal extends ModalPropsType {
  inputValue: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirm?: () => void;
}

const PromptModal = ({
  isModalOpen,
  title,
  size = "small",
  inputValue,
  onChangeInput,
  onClose,
  onConfirm = onClose,
}: PromptModal) => {
  return (
    <BaseModal
      isModalOpen={isModalOpen}
      title={title}
      onClose={onClose}
      position="center"
      showCloseButton={false}
      size={size}
    >
      <BaseStyle.Input
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="내용을 입력하세요"
      />
      <BaseStyle.ButtonContainer>
        <BaseStyle.CancelButton type="button" onClick={onClose}>
          취소
        </BaseStyle.CancelButton>
        <BaseStyle.ConfirmButton type="button" onClick={onConfirm}>
          확인
        </BaseStyle.ConfirmButton>
      </BaseStyle.ButtonContainer>
    </BaseModal>
  );
};

export default PromptModal;
