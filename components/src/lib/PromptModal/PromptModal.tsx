import BaseModal from "../BaseModal/BaseModal";
import * as S from "./PromptModal.styles";
import { ChangeEvent } from "react";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  inputValue: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

const ConfirmModal = ({
  isModalOpen,
  title,
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

export default ConfirmModal;
