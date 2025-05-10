import { useState } from "react";
import ModalBox from "./ModalBox";
import {
  ModalContainer,
  ModalBackdrop,
  Container,
  Wrapper,
} from "../styles/ModalStyle";
import { ConfirmModalProps } from "../types/modalTypes";
import Button from "./common/Button";
import styled from "@emotion/styled";
import Checkbox from "./common/CheckBox";
import { useEscapeKeyClose } from "../hook/useEscapeKeyClose";

// 약관동의 ux 를 생각해보면
// 1. 약관 옆에 체크박스가 있고 약관 텍스트를 클릭하면 본문을 확인할 수 있는 게 대부분이었던거같다.
// 2. 필수 체크박스를 동의하지 않으면 확인버튼이 비활성화된다.

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
  modalPosition = "center",
  modalSize = "medium",
  titleText = "",
  descriptionText = "",
  children,
  closeType,
  onClose,
  onConfirm = onClose,
}: ConfirmModalProps) => {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  useEscapeKeyClose(onClose);

  return (
    <ModalContainer modalPosition={modalPosition}>
      <ModalBackdrop onClick={onClose} />
      <Container modalSize={modalSize}>
        <Wrapper>
          <ModalBox
            modalPosition={modalPosition}
            titleText={titleText}
            closeType={closeType}
            onClose={onClose}
          >
            {descriptionText && <p>{descriptionText}</p>}
            <AgreementContentBox>
              <Checkbox checked={checked} onChange={setChecked} autoFocus />
              <span>약관에 동의합니다.</span>
            </AgreementContentBox>
            <AgreementContentBox>
              <Checkbox checked={secondChecked} onChange={setSecondChecked} />
              <span>약관에 동의합니다.</span>
            </AgreementContentBox>
            {children}
            <ButtonContainer>
              <Button
                onClick={onConfirm}
                variant="primary"
                disabled={!checked || !secondChecked}
              >
                확인
              </Button>
            </ButtonContainer>
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default AgreementModal;
