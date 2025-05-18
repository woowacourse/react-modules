import ModalLayout from "./common/ModalLayout";
import Button from "../../../common/components/Button";
import styled from "@emotion/styled";
import { ConfirmModalProps } from "../../types/modalTypes";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const ConfirmModal = ({
  modalPosition,
  modalSize,
  titleText,
  descriptionText,
  closeType,
  onClose,
  onConfirm = onClose,
  onCancel = onClose,
}: ConfirmModalProps) => {
  const footer = (
    <ButtonContainer>
      <Button widthSize="80px" onClick={onCancel} variant="secondary" autoFocus>
        취소
      </Button>
      <Button widthSize="80px" onClick={onConfirm} variant="primary">
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
    />
  );
};

export default ConfirmModal;
