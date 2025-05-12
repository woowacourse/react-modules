import BaseModal from "../BaseModal/BaseModal";
import * as S from "./PromptModal.styles";
import { ChangeEvent } from "react";
import { ModalPropsType } from "../types/ModalPropsType";

interface PromptModal extends ModalPropsType {
  inputValue: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PromptModal = ({
  isModalOpen,
  title,
  size = "small",
  inputValue,
  onChangeInput,
  onClose,
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
      <S.Input
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="내용을 입력하세요"
      />
      <S.ButtonContainer>
        <S.CancelButton type="button" onClick={onClose}>
          취소
        </S.CancelButton>
        <S.ConfirmButton type="button" onClick={onClose}>
          확인
        </S.ConfirmButton>
      </S.ButtonContainer>
    </BaseModal>
  );
};

export default PromptModal;
