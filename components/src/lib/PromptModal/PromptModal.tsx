import BaseModal from "../BaseModal/BaseModal";
import * as S from "./PromptModal.styles";
import { ChangeEvent } from "react";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  size?: "small" | "medium" | "large";
  inputValue: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

const PromptModal = ({
  isModalOpen,
  title,
  size = "small",
  inputValue,
  onChangeInput,
  onClose,
}: ModalPropsType) => {
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
        autoFocus
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
