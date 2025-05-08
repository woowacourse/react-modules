import BaseModal from "../BaseModal/BaseModal";
import * as S from "./Consent.styles";
import { useState, ChangeEvent } from "react";

interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  onClose: () => void;
}

const AlertModal = ({ isModalOpen, title, onClose }: ModalPropsType) => {
  const [firstAgreed, setFirstAgreed] = useState(false);
  const [secondAgreed, setSecondAgreed] = useState(false);
  const handleFirstCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstAgreed(e.target.checked);
  };
  const handleSecondCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondAgreed(e.target.checked);
  };

  return (
    <BaseModal
      isModalOpen={isModalOpen}
      title={title}
      onClose={onClose}
      position="center"
      showCloseButton={true}
    >
      <S.CheckboxLabel>
        <input
          type="checkbox"
          checked={firstAgreed}
          onChange={handleFirstCheckbox}
        />
        <span>[필수] 개인정보 수집이용 동의</span>
      </S.CheckboxLabel>
      <S.CheckboxLabel>
        <input
          type="checkbox"
          checked={secondAgreed}
          onChange={handleSecondCheckbox}
        />
        <span>[필수] 고객정보 제 3자 제공동의</span>
      </S.CheckboxLabel>
      <S.SaveButton type="button" onClick={onClose}>
        동의하고 저장하기
      </S.SaveButton>
    </BaseModal>
  );
};

export default AlertModal;
