import ModalBox from "./ModalBox";
import {
  ModalContainer,
  ModalBackdrop,
  Container,
  Wrapper,
} from "../styles/ModalStyle";
import { ModalProps } from "../types/modalTypes";
import { useEscapeKeyClose } from "../hook/useEscapeKeyClose";

const BasicModal = ({
  modalPosition = "center",
  modalSize = "medium",
  titleText = "",
  children,
  closeType,
  onClose,
}: ModalProps) => {
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
            {children}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default BasicModal;
