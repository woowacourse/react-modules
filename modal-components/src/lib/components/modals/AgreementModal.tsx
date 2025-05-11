import ModalLayout from "./common/ModalLayout";
import Button from "../common/Button";
import styled from "@emotion/styled";
import { ConfirmModalProps } from "../../types/modalTypes";
import Checkbox from "../common/CheckBox";
import { useState } from "react";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

const AgreementContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const AgreementModal = ({
  modalPosition,
  modalSize,
  titleText,
  descriptionText,
  children,
  closeType,
  onClose,
  onConfirm = onClose,
}: ConfirmModalProps) => {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  const footer = (
    <ButtonContainer>
      <Button
        onClick={onConfirm}
        variant="primary"
        disabled={!checked || !secondChecked}
      >
        확인
      </Button>
    </ButtonContainer>
  );

  return (
    <ModalLayout
      modalPosition={modalPosition}
      modalSize={modalSize}
      titleText={titleText}
      descriptionText={descriptionText}
      closeType={closeType}
      onClose={onClose}
      footer={footer}
    >
      <AgreementContentBox>
        <Checkbox checked={checked} onChange={setChecked} autoFocus />
        <span>약관에 동의합니다.</span>
      </AgreementContentBox>
      <AgreementContentBox>
        <Checkbox checked={secondChecked} onChange={setSecondChecked} />
        <span>약관에 동의합니다.</span>
      </AgreementContentBox>
      {children}
    </ModalLayout>
  );
};

export default AgreementModal;
