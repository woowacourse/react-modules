import ModalLayout from "./common/ModalLayout";
import Button from "../common/Button";
import styled from "@emotion/styled";
import { ConfirmModalProps } from "../../types/modalTypes";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

const AlertModal = ({
  modalPosition,
  modalSize,
  titleText,
  descriptionText,
  closeType,
  onClose,
  onConfirm = onClose,
}: ConfirmModalProps) => {
  const footer = (
    <ButtonContainer>
      <Button widthSize="80px" onClick={onConfirm} variant="primary" autoFocus>
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

export default AlertModal;
