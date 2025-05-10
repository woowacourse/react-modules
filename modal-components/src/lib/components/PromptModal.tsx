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
import Input from "./common/Input";
import { useEscapeKeyClose } from "../hook/useEscapeKeyClose";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const PromptModal = ({
  modalPosition = "center",
  modalSize = "medium",
  titleText = "",
  descriptionText = "",
  closeType,
  onClose,
  onConfirm = onClose,
  onCancel = onClose,
}: ConfirmModalProps) => {
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
            <form>
              <Input />
            </form>
            <ButtonContainer>
              <Button widthSize="80px" onClick={onCancel} variant="secondary">
                취소
              </Button>
              <Button widthSize="80px" onClick={onConfirm} variant="primary">
                확인
              </Button>
            </ButtonContainer>
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default PromptModal;
